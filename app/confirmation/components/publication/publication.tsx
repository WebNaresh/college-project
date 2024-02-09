import { Conferences, Journals } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: Journals[];
  data2: Conferences[];
};

const PublicationForm = ({ data, data2 }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="2. a)Publications in Journals/Conferences [Current Academic Year]" />
      <DataTable columns={columns} data={[...data, ...data2]} />
    </div>
  );
};

export default PublicationForm;
