import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { columns } from "./components/column";
import MiniForm from "./components/mini-form";
import { DataTable } from "./components/table";

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

const Step6 = (props: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form/efforts-extra-curriculum`,
      config
    );
    return data.data;
  };
  const { data } = useQuery({
    queryKey: ["efforts-extra-curriculum"],
    queryFn: fetchFormDetails,
  });
  return (
    <div className="flex flex-col gap-4">
      <MiniForm />
      <DataTable columns={columns} data={data?.effort || []} />
    </div>
  );
};

export default Step6;
