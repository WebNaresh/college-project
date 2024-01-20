import { PerformanceEvalutationFormDetails } from "../../form";
import HeaderText from "../header-text";

type Props = {
  data: PerformanceEvalutationFormDetails | undefined;
};

const EffortsForm = ({ data }: Props) => {
  console.log(`🚀 ~ file: efforts.tsx:9 ~ data:`, data?.efforts);
  return (
    <div className="w-full flex flex-col gap-4">
      <HeaderText title="c) Efforts taken for Effective Curriculum Delivery. Describe" />
      {data?.efforts.map((doc, i) => (
        <div className="pl-6 font-semibold">
          {i + 1})&nbsp;{doc.efforts}
        </div>
      ))}
    </div>
  );
};

export default EffortsForm;
