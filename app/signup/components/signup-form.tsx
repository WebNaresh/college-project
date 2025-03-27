"use client";

import Loader from "@/components/Loader/loader";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(4, { message: "Password is minimum of 4 length" }),
  departmentName: z.enum(["Master of Computer Application"]),
  facaultyName: z
    .string()
    .min(2, { message: "minimum 2 length of facaulty name" }),
  designation: z.enum([
    "Associate Professor",
    "Professor",
    "Assistant Professor",
  ]),
  profileImage: z.string().min(0, { message: "profile image is required" }),
  contact: z.string().length(10, { message: "Enter 10 digit number" }),
  role: z.enum(["HOD", "Teacher"]),
  dateOfJoining: z.date(),
});

export function LoginForm() {
  const data = useSession();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Teacher",
      email: "teacher@gmail.com",
      password: "Pass@123",
      role: "Teacher",
      dateOfJoining: new Date(),
      departmentName: "Master of Computer Application",
      facaultyName: "Python",
      contact: "9876543210",
      designation: "Professor",
      profileImage: "/biglogo.svg",
    },
  });

  const addProfile = async (data: z.infer<typeof formSchema>) => {
    const config = { headers: { "Content-Type": "application/json" } };
    const result: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/signup`,
      data,
      config
    );
    console.log(`🚀 ~ result:`, result);
    return result.data;
  };
  const { mutate, isPending } = useMutation({
    mutationFn: addProfile,
    onSuccess: (data) => {
      console.log(`🚀 ~ file: signup-form.tsx:91 ~ data:`, data);
      toast.success(data?.message);
      router.push("/waiting");
    },
    onError: (data: any) => {
      toast.error(data?.response?.data?.message);
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {isPending && <Loader />}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter User Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role to register" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* <SelectItem value="HOD">HOD</SelectItem> */}
                  <SelectItem value="Teacher">Teacher</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfJoining"
          render={({ field }) => (
            <FormItem className="my-4 flex w-full flex-col">
              <FormLabel>Date of Joining</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick date of Joining</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card" align="start">
                  <Calendar
                    captionLayout="dropdown"
                    mode="single"
                    className=""
                    fromYear={1900}
                    toYear={2035}
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    // closeComponent={<PopoverClose />}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="departmentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department Name</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* <SelectItem value="HOD">HOD</SelectItem> */}
                  <SelectItem value="Master of Computer Application">
                    Master of Computer Application
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="facaultyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Facaulty Name</FormLabel>
              <FormControl>
                <Input placeholder="Facaulty" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Designation Name</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Designation " />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* <SelectItem value="HOD">HOD</SelectItem> */}
                  <SelectItem value="Associate Professor">
                    Associate Professor
                  </SelectItem>
                  <SelectItem value="Professor">Professor</SelectItem>
                  <SelectItem value="Assistant Professor">
                    Assistant Professor
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Contact" {...field} />
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
          {isPending ? "Submitting..." : "Send for Profile Approval"}
        </Button>
      </form>
    </Form>
  );
}
