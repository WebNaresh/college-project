import { cActivity } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: cActivity[];
};

const CActivityForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="9. Co-curricular/Extra-curricular/Professional Development activities organized" />
      <HeaderText
        className=" font-normal"
        title="Extra- curricular/ Co-Curricular Activities (NSS, Cultural fest, technical fest, educational tour,industrial visit, publication of magazine/newsletter, Professional Society Chapter, Student Activity Club, T&P, ISR) "
      />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CActivityForm;
