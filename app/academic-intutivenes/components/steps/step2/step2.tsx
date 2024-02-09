"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { columns } from "./components/column";
import MiniForm from "./components/mini-form";
import { DataTable } from "./components/table";

type Props = {
  onNext: () => void;
};
const Step4 = ({ onNext }: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/kepOrganized`,
      config
    );
    return data.data;
  };
  const { data } = useQuery({
    queryKey: ["form-details-kepOrganized"],
    queryFn: fetchFormDetails,
  });
  return (
    <div className="flex flex-col gap-4">
      <MiniForm title="Knowledge Enhancement Programs Organized" />
      <DataTable columns={columns} data={data?.kepOrganized || []} />
    </div>
  );
};

export default Step4;
