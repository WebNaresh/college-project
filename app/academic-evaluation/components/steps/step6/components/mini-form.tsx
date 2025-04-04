"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  nextStep: () => void;
};
export const step1formSchema = z.object({
  effort: z.string(),
});

const MiniForm = ({ nextStep }: Props) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof step1formSchema>>({
    resolver: zodResolver(step1formSchema),
    defaultValues: {
      effort:
        "Implemented interactive learning methods and conducted regular doubt sessions to improve student engagement and understanding.",
    },
  });

  const addFeedBack = async (body: z.infer<typeof step1formSchema>) => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.put(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/efforts-extra-curriculum`,
      body,
      config
    );
    return data.data;
  };
  const { mutate } = useMutation({
    mutationFn: addFeedBack,
    onSuccess: async (data) => {
      // Invalidate the relevant queries in the queryClient after successful delete
      await queryClient.invalidateQueries({
        queryKey: [`efforts-extra-curriculum`],
      });
    },
  });
  form.getValues();
  const onSubmit = async (values: z.infer<typeof step1formSchema>) => {
    mutate(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex-1 flex flex-col"
      >
        <div className="text-primary text-sm font-bold underline">
          Efforts taken for Effective Curriculum Delivery. Describe
        </div>
        <FormField
          control={form.control}
          name="effort"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Efforts taken for effective Curriculum Delivery
              </FormLabel>
              <Input placeholder="Enter Your Effort desciption" {...field} />
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
