"use client";
import { FeedbackDetails } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import MiniForm from "./components/mini-form";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const Step4 = (props: Props) => {
  const fetchFeedback = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/feedback`,

      config
    );
    return data.data;
  };
  const { data, isFetching } = useQuery({
    queryKey: ["form-feedback"],
    queryFn: fetchFeedback,
  });
  return (
    <div>
      {!isFetching && <MiniForm data={data?.feedback as FeedbackDetails} />}
    </div>
  );
};

export default Step4;
