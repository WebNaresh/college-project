import { kepAttended } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: kepAttended[];
};

const ActivityForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="8. Examination Duties Assigned & Performed" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ActivityForm;
