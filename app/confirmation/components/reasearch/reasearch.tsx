import { reasearch } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: reasearch[];
};

const SponsorReasearchForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="5. Sponsored Research" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default SponsorReasearchForm;
