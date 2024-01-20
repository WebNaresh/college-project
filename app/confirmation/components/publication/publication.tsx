import { Publication } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: Publication[];
};

const PublicationForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="2. a)Publications in Journals/Conferences [Current Academic Year]" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PublicationForm;
