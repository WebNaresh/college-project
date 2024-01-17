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
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};
const levelEnum = z.enum(["UG", "PG"]);
const courseHeadEnum = z.enum(["TH", "PR", "T"]);
const termEnum = z.enum(["I", "II"]);
const yearEnum = z.enum(["Current", "Previous"]);
const formSchema = z.object({
  term_I_current_year_student_feedback: z.number(),
  term_II_previous_year_student_feedback: z.number(),
  term_I_current_year_peer_feedback: z.number(),
  term_II_previous_year_peer_feedback: z.number(),
});
const MiniForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      term_I_current_year_student_feedback: undefined,
      term_II_previous_year_student_feedback: undefined,
      term_I_current_year_peer_feedback: undefined,
      term_II_previous_year_peer_feedback: undefined,
    },
  });
  form.getValues();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Handle form submission
    console.log("Form values:", values);
    // Add your logic to process the form data or make API calls
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
