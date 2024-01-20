import { copyRight, patent, tradeMark } from "@prisma/client";
import HeaderText from "../header-text";
import { DataTable } from "../table";
import { copyRigthColumn } from "./components/copyRightColumn";
import { patentsColumn } from "./components/patentColumn";
import { trademarkColumn } from "./components/trademarkColumn";

type Props = {
  patents: patent[];
  copyRight: copyRight[];
  tradeMark: tradeMark[];
};

const PatentForm = ({ patents, copyRight, tradeMark }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="7. Efforts taken for Intellectual Property Rights" />
      <DataTable
        columns={patentsColumn}
        data={patents}
        title="Efforts taken for Intellectual Property Rights [Patents]"
      />
      <DataTable
        columns={copyRigthColumn}
        data={copyRight}
        title="Efforts taken for Intellectual Property Rights [Copy-Rights]"
      />
      <DataTable
        columns={trademarkColumn}
        data={tradeMark}
        title="Efforts taken for Intellectual Property Rights [Trade-Marks]"
      />
    </div>
  );
};

export default PatentForm;
