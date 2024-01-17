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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};
const levelEnum = z.enum(["UG", "PG"]);
const courseHeadEnum = z.enum(["TH", "PR", "T"]);
const termEnum = z.enum(["I", "II"]);
const yearEnum = z.enum(["Current", "Previous"]);
const formSchema = z.object({
  subjectName: z.string(),
  level: levelEnum,
  courseHead: courseHeadEnum,
  noOfHrsWeekEnum: z.number(),
  noOfClassesConducted: z.number(),
  result: z
    .number()
    .max(100, { message: "Value lies between 0 to 100 it is percentage" })
    .positive(),
  term: termEnum,
  year: yearEnum,
});
const MiniForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subjectName: "",
      level: undefined,
      courseHead: undefined,
      noOfHrsWeekEnum: undefined,
      noOfClassesConducted: undefined,
      result: undefined,
      term: "I",
      year: "Current",
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
          Term II of Current Academic Year (2021-22)
        </div>
        <FormField
          control={form.control}
          name="subjectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject Name</FormLabel>
              <Input placeholder="Enter Your Subject Name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="For Term II Current Academic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="PG">PG</SelectItem>
                  <SelectItem value="UG">UG</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="courseHead"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Head</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="For Term II Current Academic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="TH">TH</SelectItem>
                  <SelectItem value="PR">PR</SelectItem>
                  <SelectItem value="T">T</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="noOfHrsWeekEnum"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. of Hours per Week</FormLabel>
              <Input
                type="number"
                placeholder="For Term II Current Academic"
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
          name="noOfClassesConducted"
          render={({ field }) => (
            <FormItem>
              <FormLabel>No. of Classes Conducted</FormLabel>
              <Input
                type="number"
                placeholder="For Term II Current Academic"
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
          name="result"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Result</FormLabel>
              <Input
                type="number"
                placeholder="For Term II Current Academic"
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
