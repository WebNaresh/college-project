import { irg } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: irg[];
};

const IRGForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="6. Consultancy/Internal Revenue Generation (IRG) " />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default IRGForm;
