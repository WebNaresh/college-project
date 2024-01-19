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
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/publication`,
      config
    );
    return data.data;
  };
  const { data } = useQuery({
    queryKey: ["form-details-publication"],
    queryFn: fetchFormDetails,
  });
  return (
    <div className="flex flex-col gap-4">
      <MiniForm title="Publications in Journals/Conferences [Current Academic Year]" />
      <DataTable columns={columns} data={data?.publications || []} />
    </div>
  );
};

export default Step1;
