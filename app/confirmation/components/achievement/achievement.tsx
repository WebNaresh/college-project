import { achievements } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { columns } from "./components/column";

type Props = {
  data: achievements[];
};

const AchievementsForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="[B] Any other Special Achievement [Documentary evidence to be attached]" />
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AchievementsForm;
