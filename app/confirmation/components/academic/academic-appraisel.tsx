import { PerformanceEvalutationFormDetails } from "../../form";
import HeaderText from "../header-text";
import AcademicCellTermICurrent from "./components/term-I-current.";
import AcademicCellTermIICurrent from "./components/term-II-current";
import AcademicCellTermIIPrevious from "./components/term-II-previous";

type Props = {
  data: PerformanceEvalutationFormDetails | undefined;
};

const AcademicAppraisel = ({ data }: Props) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <HeaderText title="[A] Academic Appraisal" />
      <HeaderText title="1. a) Teaching and Learning " />

      <div className="border-[1px] border-black m-0">
        <AcademicCellTermICurrent title="Term II of previous Academic Year (2021-22) " />
        <AcademicCellTermIICurrent title="Term I of Current Academic Year (2022-23) " />
        <AcademicCellTermIIPrevious title="Term II of Current Academic Year (2022-23)" />
      </div>
    </div>
  );
};

export default AcademicAppraisel;
