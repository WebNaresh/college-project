"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
const step1formSchema = z.object({
  dateOfApplication: z.date(),
  rightStatus: z.enum(["Applied", "Granted"]),
  isCommercialized: z.boolean(),
});
const addProfile = async (data: z.infer<typeof step1formSchema>) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const result: AxiosResponse = await axios.put(
    `${process.env.NEXT_PUBLIC_ROUTE}/api/form/tradeMark`,
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
        queryKey: [`form-details-tradeMark`],
      });
    },
    onError: (data: any) => {
      toast.error(data?.response?.data?.message);
    },
  });

  const form = useForm<z.infer<typeof step1formSchema>>({
    resolver: zodResolver(step1formSchema),
    defaultValues: {
      dateOfApplication: undefined,
      rightStatus: undefined,
      isCommercialized: false,
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
          name="dateOfApplication"
          render={({ field }) => (
            <FormItem className="my-4 flex w-full flex-col">
              <FormLabel>Date of Application</FormLabel>
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
                        <span>Pick date of Application</span>
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
        <FormField
          control={form.control}
          name="isCommercialized"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Are you main author?</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rightStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Level</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Publication Level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Applied">Applied</SelectItem>
                  <SelectItem value="Granted">Granted</SelectItem>
                </SelectContent>
              </Select>
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
