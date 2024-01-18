"use client";
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
import useAddProfileMutation from "@/hook/useProfileMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { step1formSchema } from "../../step1/components/mini-form";
type Props = { title: string };

const MiniForm = ({ title }: Props) => {
  const mutate = useAddProfileMutation();
  const form = useForm<z.infer<typeof step1formSchema>>({
    resolver: zodResolver(step1formSchema),
    defaultValues: {
      subjectName: "",
      level: undefined,
      courseHead: undefined,
      noOfHrsWeek: undefined,
      noOfClassesConducted: undefined,
      result: undefined,
      term: "II",
      year: "Current",
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
        <div className="text-primary text-sm font-bold underline">{title}</div>
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
          name="noOfHrsWeek"
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
