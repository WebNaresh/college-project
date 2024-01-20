"use client";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = { title: string };
const publishingMonthEnum = z.enum([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
const indexedInEnum = z.enum(["SCI", "SCOUPUS", "UGC_CARE", "PEER_REVIEWED"]);
export const step1formSchema = z.object({
  scheme: z.string(),
  agency: z.string(),
  status: z.enum(["Awarded", "Submitted"]),
  date: z.date(),
  grantRecieved: z.string(),
});
const addProfile = async (data: z.infer<typeof step1formSchema>) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const result: AxiosResponse = await axios.put(
    `${process.env.NEXT_PUBLIC_ROUTE}/api/form/reasearch`,
    data,
    config
  );
  return result.data;
};
const MiniForm = ({ title }: Props) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addProfile,
    onSuccess: async (data) => {
      toast.success(data?.message);
      await queryClient.invalidateQueries({
        queryKey: [`form-details-reasearch`],
      });
    },
    onError: (data: any) => {
      toast.error(data?.response?.data?.message);
    },
  });

  const form = useForm<z.infer<typeof step1formSchema>>({
    resolver: zodResolver(step1formSchema),
    defaultValues: {
      scheme: undefined,
      agency: undefined,
      status: undefined,
      date: undefined,
      grantRecieved: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof step1formSchema>) => {
    mutate(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex-1 flex flex-col"
      >
        <div className="text-primary text-sm font-bold underline">{title}</div>
        <FormField
          control={form.control}
          name="scheme"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scheme Title</FormLabel>
              <Input placeholder="Enter Your Scheme Title" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agency Name</FormLabel>
              <Input placeholder="Enter Your Agency Name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="grantRecieved"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grant Recieved</FormLabel>
              <Input
                placeholder="Enter Your Grant Recieved"
                {...field}
                type="number"
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Status (Awarded/ Submitted)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Awarded">Awarded</SelectItem>
                  <SelectItem value="Submitted">Submitted</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="my-4 flex w-full flex-col">
              <FormLabel>Date of Starting</FormLabel>
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
                        <span>Pick date of Start</span>
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
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="flex mx-auto rounded-full p-4 h-auto"
          variant={"outline"}
        >
          <Plus className=" text-xl text-primary" />
        </Button>
      </form>
    </Form>
  );
};

export default MiniForm;
