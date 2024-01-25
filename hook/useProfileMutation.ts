import { step1formSchema } from "@/app/academic-evaluation/components/steps/step1/components/mini-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { z } from "zod";

// Define your schema for the form data
const addProfile = async (data: z.infer<typeof step1formSchema>) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const result: AxiosResponse = await axios.put(
    `${process.env.NEXT_PUBLIC_ROUTE}/api/form/teaching-learning`,
    data,
    config
  );
  return result.data;
};

// Define your custom hook
const useAddProfileMutation = (nextStep?: () => void) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addProfile,
    onSuccess: async (data) => {
      toast.success(data?.message);
      await queryClient.invalidateQueries({
        queryKey: [`form-details-${data?.term}-${data?.year}`],
      });
      if (nextStep) {
        nextStep();
      }
    },
    onError: (data: any) => {
      toast.error(data?.response?.data?.message);
    },
  });

  return mutate;
};

export default useAddProfileMutation;
