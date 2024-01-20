import { PerformanceEvalutationFormDetails } from "../../form";
import HeaderText from "../header-text";

type Props = {
  data: PerformanceEvalutationFormDetails | undefined;
};

const EffortsForm = (props: Props) => {
  return (
    <div className="w-full">
      <HeaderText title="c) Efforts taken for Effective Curriculum Delivery. Describe" />
    </div>
  );
};

export default EffortsForm;
