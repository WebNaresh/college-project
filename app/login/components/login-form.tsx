"use client";
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
import { SignInResponse, signIn, useSession } from "next-auth/react";
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
  const { data: session, status } = useSession();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Use the signIn function directly from next-auth/react
      const result: SignInResponse | undefined = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });

      if (result?.error) {
        // Handle sign-in error
        toast.error(result.error);
      } else {
        // Optionally, you can redirect the user after successful sign-in
        // router.push('/dashboard');
        toast.success("Successfully signed in!");
        router.push("/");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("An error occurred during sign-in");
    }
  };

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
        <Button type="submit" className="flex mx-auto">
          Sign In
        </Button>
      </form>
    </Form>
  );
}
