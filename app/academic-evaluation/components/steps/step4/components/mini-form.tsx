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
import { PerformanceEvalutationForm } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CurrentYear from "../../../year";

type Props = {
  data: PerformanceEvalutationForm;
};
export const feedbackFormSchema = z.object({
  averageResult: z.number().max(100),
  classEngagement: z.number().max(100),
});
const MiniForm = ({ data }: Props) => {
  console.log(`🚀 ~ file: mini-form.tsx:27 ~ data:`, data);
  const queryClient = useQueryClient();

  const addAverageResult = async (body: z.infer<typeof feedbackFormSchema>) => {
    console.log(`🚀 ~ file: mini-form.tsx:38 ~ body:`, body);
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/`,
      body,
      config
    );
    return data.data;
  };
  const { mutate } = useMutation({
    mutationFn: addAverageResult,
    onSuccess: async (data) => {
      // Invalidate the relevant queries in the queryClient after successful delete
      await queryClient.invalidateQueries({
        queryKey: [`form-feedback`],
      });
    },
  });

  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      averageResult: data?.averageResult,
      classEngagement: data?.classEngagement,
    },
  });

  const onSubmit = async (values: z.infer<typeof feedbackFormSchema>) => {
    mutate(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex-1 flex flex-col"
      >
        <div className="text-primary text-sm font-bold underline">
          Feedback Academic Year <CurrentYear />
        </div>
        <FormField
          control={form.control}
          name="averageResult"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Average Result</FormLabel>
              <Input
                type="number"
                placeholder="Average Result "
                {...field}
                value={field.value || ""}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  field.onChange(value);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="classEngagement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Average Class Engagement</FormLabel>
              <Input
                type="number"
                placeholder="Average Class Engagement"
                {...field}
                value={field.value || ""}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  field.onChange(value);
                }}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={!form.formState.isDirty}
          type="submit"
          className="flex mx-auto"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default MiniForm;
