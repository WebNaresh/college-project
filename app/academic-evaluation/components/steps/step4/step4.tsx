"use client";
import Loader from "@/components/Loader/loader";
import { PerformanceEvalutationForm } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import MiniForm from "./components/mini-form";

type Props = {
  nextStep: () => void;
};

const Step4 = ({ nextStep }: Props) => {
  const fetchFeedback = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/`,

      config
    );
    return data.data;
  };
  const { data, isFetching } = useQuery({
    queryKey: ["form-average-result"],
    queryFn: fetchFeedback,
  });
  if (isFetching) {
    <Loader />;
  }
  return (
    <div>
      {!isFetching && (
        <MiniForm
          nextStep={nextStep}
          data={data.form as PerformanceEvalutationForm}
        />
      )}
    </div>
  );
};

export default Step4;
