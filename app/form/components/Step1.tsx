// Step1.tsx
import { FC } from "react";

interface Step1Props {
  onNext: () => void;
}

const Step1: FC<Step1Props> = ({ onNext }) => {
  return (
    <div>
      {/* Step 1 form elements */}1<button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step1;
