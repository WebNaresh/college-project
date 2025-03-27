"use client";
import Loader from "@/components/Loader/loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(4, { message: "Password is a minimum of 4 characters" }),
});

export function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "teacher@gmail.com",
      password: "Pass@123",
    },
  });

  const signInFunction = async (data: z.infer<typeof formSchema>) => {
    const response = await signIn("credentials", {
      redirect: false,
      email: data?.email,
      password: data?.password,
    });
    if (response?.status !== 200) {
      throw new Error(response?.error as string);
    }
    return response;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: signInFunction,
    onSuccess: async (data) => {
      toast.success("Successfully signed in!");
      // Get the session to check user role
      const session = await fetch("/api/auth/session").then((res) =>
        res.json()
      );
      const userRole = session?.user?.role;

      // Redirect based on role
      if (userRole === "Teacher") {
        router.push("/teacher");
      } else if (userRole === "HOD") {
        router.push("/hod");
      }
    },
    onError: (error) => {
      console.error("Sign-in error:", error);
      toast.error(error.message || "An error occurred during sign-in");
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      mutate(values);
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("An error occurred during sign-in");
    }
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex-1 gap-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input size={2} placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="flex mx-auto" disabled={isPending}>
          {isPending ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
