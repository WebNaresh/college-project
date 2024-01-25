import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { columns } from "../components/column";
import { DataTable } from "../components/data-table";
import MiniForm from "./components/mini-form";

type Props = {
  nextStep: () => void;
};

const Step3 = ({ nextStep }: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/teaching-learning`,
      {
        term: "II",
        year: "Current",
      },
      config
    );
    return data.data;
  };
  const { data } = useQuery({
    queryKey: ["form-details-II-Current"],
    queryFn: fetchFormDetails,
  });
  return (
    <div className="flex flex-col gap-4">
      <MiniForm nextStep={nextStep} />
      <DataTable columns={columns} data={data?.termIIPreviousData || []} />
    </div>
  );
};

export default Step3;
