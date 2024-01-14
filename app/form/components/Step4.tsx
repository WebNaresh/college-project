// Step4.tsx
import { FC } from "react";

interface Step4Props {
  onPrev: () => void;
  onNext: () => void;
}

const Step4: FC<Step4Props> = ({ onPrev, onNext }) => {
  return (
    <div>
      4S{/* Step 1 form elements */}
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step4;
