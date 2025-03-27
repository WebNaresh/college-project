import { Books } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: Books[];
};

const BooksForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="b) Books(s)/Article/Chapter(s) published" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default BooksForm;
