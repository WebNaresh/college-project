"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { columns } from "./components/column";
import MiniForm from "./components/mini-form";
import { DataTable } from "./components/table";

type Props = {
  onNext: () => void;
};

const Step1 = ({ onNext }: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/irg`,
      config
    );
    return data.data;
  };
  const { data } = useQuery({
    queryKey: ["form-details-irg"],
    queryFn: fetchFormDetails,
  });
  console.log(`🚀 ~ file: step1.sx:26 ~ data:`, data);
  return (
    <div className="flex flex-col gap-4">
      <MiniForm title="Consultancy Internal Revenue Generation (IRG)" />
      <DataTable columns={columns} data={data?.irg || []} />
    </div>
  );
};

export default Step1;
