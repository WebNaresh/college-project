import { kepAttended } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: kepAttended[];
};

const KepAttendedForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="3. Knowledge Enhancement Programs Attended" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default KepAttendedForm;
