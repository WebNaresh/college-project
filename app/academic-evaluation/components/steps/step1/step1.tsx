"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { columns, data } from "./components/column";
import { DataTable } from "./components/data-table";
import MiniForm from "./components/mini-form";

type Props = {
  onNext: () => void;
};

const Step1 = ({ onNext }: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .get(`${process.env.NEXT_PUBLIC_ROUTE}/api/form`, config)
      .catch((errors) => {
        console.log(errors);
      })
      .then((response) => {
        console.log(response);
      });
  };
  const query = useQuery({ queryKey: ["todos"], queryFn: fetchFormDetails });
  return (
    <div className="flex flex-col gap-4">
      <MiniForm />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Step1;
