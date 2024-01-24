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
import { FeedbackDetails } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CurrentYear from "../../../year";

type Props = {
  data: FeedbackDetails;
};
export const feedbackFormSchema = z.object({
  term_I_current_year_student_feedback: z.number().max(100),
  term_II_previous_year_student_feedback: z.number().max(100),
  term_I_current_year_peer_feedback: z.number().max(100),
  term_II_previous_year_peer_feedback: z.number().max(100),
  id: z.string(),
  formId: z.string(),
});
const MiniForm = ({ data }: Props) => {
  const queryClient = useQueryClient();

  const addFeedBack = async (body: z.infer<typeof feedbackFormSchema>) => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/feedback`,
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
        queryKey: [`form-feedback`],
      });
    },
  });

  const form = useForm<z.infer<typeof feedbackFormSchema>>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      term_I_current_year_student_feedback:
        data?.term_I_current_year_student_feedback,
      term_II_previous_year_student_feedback:
        data?.term_II_previous_year_student_feedback,
      term_I_current_year_peer_feedback:
        data?.term_I_current_year_peer_feedback,
      term_II_previous_year_peer_feedback:
        data?.term_II_previous_year_peer_feedback,
      formId: data?.formId,
      id: data?.id,
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
          name="term_I_current_year_student_feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Feedback for Term I Current Year</FormLabel>
              <Input
                type="number"
                placeholder="For Term I Current Academic"
                {...field}
                value={field.value || ""} // Ensure the value is a string or an empty string
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
          name="term_II_previous_year_student_feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Feedback for Term II Previous Year</FormLabel>
              <Input
                type="number"
                placeholder="For Term I Current Academic"
                {...field}
                value={field.value || ""} // Ensure the value is a string or an empty string
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
          name="term_I_current_year_peer_feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Peer Feedback for Term I Current Year</FormLabel>
              <Input
                type="number"
                placeholder="For Term I Current Academic"
                {...field}
                value={field.value || ""} // Ensure the value is a string or an empty string
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
          name="term_II_previous_year_peer_feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Peer Feedback for Term II Previous Year</FormLabel>
              <Input
                type="number"
                placeholder="For Term I Current Academic"
                {...field}
                value={field.value || ""} // Ensure the value is a string or an empty string
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
