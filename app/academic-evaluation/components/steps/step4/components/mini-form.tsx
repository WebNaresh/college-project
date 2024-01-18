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
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};
const formSchema = z.object({
  term_I_current_year_student_feedback: z.number(),
  term_II_previous_year_student_feedback: z.number(),
  term_I_current_year_peer_feedback: z.number(),
  term_II_previous_year_peer_feedback: z.number(),
});
const MiniForm = (props: Props) => {
  const fetchFeedback = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/feedback`,

      config
    );
    return data.data;
  };
  const { data } = useQuery({
    queryKey: ["form-details-II-Previous"],
    queryFn: fetchFeedback,
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      term_I_current_year_student_feedback:
        data.feedback.term_I_current_year_student_feedback || undefined,
      term_II_previous_year_student_feedback:
        data.feedback.term_II_previous_year_student_feedback || undefined,
      term_I_current_year_peer_feedback:
        data.feedback.term_I_current_year_peer_feedback || undefined,
      term_II_previous_year_peer_feedback:
        data.feedback.term_II_previous_year_peer_feedback || undefined,
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex-1 flex flex-col"
      >
        <div className="text-primary text-sm font-bold underline">
          Term II of previous Academic Year (2021-22)
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
        <Button type="submit" className="flex mx-auto">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default MiniForm;
