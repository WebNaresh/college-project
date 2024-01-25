import { duties } from "@prisma/client";
import HeaderText from "../header-text";
import RowSpan from "./components/row-span";

type Props = {
  data: duties[];
};

const DutyForm = ({ data }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="8. Examination Duties Assigned & Performed" />
      <div className="border border-black grid row-span-4">
        <RowSpan
          header={true}
          sr={"Sr No"}
          type={"Type of Examination duties"}
          assigned={" Duties Assigned By (University | Institute)"}
        />
        <RowSpan
          sr={"1"}
          type={"Invigilation , flying squad duties/ any exam related duties"}
          assigned={data[0]?.ifsDuty}
        />
        <RowSpan
          sr={"2"}
          type={"Evaluation of Answer Scripts"}
          assigned={data[0]?.esDuty}
        />
        <RowSpan
          sr={"3"}
          type={"Question Paper Setting"}
          assigned={data[0]?.qpsDuty}
          className="border-b-0"
        />
      </div>
    </div>
  );
};

export default DutyForm;
