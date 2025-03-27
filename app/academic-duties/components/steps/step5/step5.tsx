"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { columns } from "./components/column";
import MiniForm from "./components/mini-form";
import { DataTable } from "./components/table";

type Props = {
  onNext: () => void;
};
const Step5 = ({ onNext }: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/cActivity`,
      config
    );
    return data.data;
  };
  const { data } = useQuery({
    queryKey: ["form-details-cActivity"],
    queryFn: fetchFormDetails,
  });
  return (
    <div className="flex flex-col gap-4">
      <MiniForm title="9. Co-curricular/Extra-curricular/Professional Development activities organized" />
      <DataTable columns={columns} data={data?.cActivity || []} />
    </div>
  );
};

export default Step5;
