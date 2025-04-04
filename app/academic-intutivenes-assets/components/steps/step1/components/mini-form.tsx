"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { journalSchema } from "@/lib/zObject";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type Props = { title: string };

const addProfile = async (data: z.infer<typeof journalSchema>) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const result: AxiosResponse = await axios.put(
    `${process.env.NEXT_PUBLIC_ROUTE}/api/form/journals`,
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
        queryKey: [`form-details-journals`],
      });
    },
    onError: (data: any) => {
      toast.error(data?.response?.data?.message);
    },
  });

  const form = useForm<z.infer<typeof journalSchema>>({
    resolver: zodResolver(journalSchema),
    defaultValues: {
      name: "International Journal of Computer Science",
      issnOrIssbnNo: "ISSN-1234-5678",
      indexedIn: "SCOUPUS",
      mainAuthor: true,
    },
  });

  const onSubmit = async (values: z.infer<typeof journalSchema>) => {
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
          name="indexedIn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Indexed In</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Indexed In" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="SCI">SCI</SelectItem>
                  <SelectItem value="SCOUPUS">SCOPUS</SelectItem>
                  <SelectItem value="UGC_CARE">UGC CARE</SelectItem>
                  <SelectItem value="PEER_REVIEWED">PEER REVIEWED</SelectItem>
                  <SelectItem value="NO_INDEXED">NO INDEXED</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Journal</FormLabel>
              <Input placeholder="Enter Your Journal Name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="issnOrIssbnNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISSN OR ISSBN</FormLabel>
              <Input placeholder="Enter Your Number" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mainAuthor"
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
