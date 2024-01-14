// Step2.tsx
import { FC } from "react";

interface Step2Props {
  onNext: () => void;
  onPrev: () => void;
}

const Step2: FC<Step2Props> = ({ onNext, onPrev }) => {
  return (
    <div>
      {/* Step 1 form elements */}2<button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step2;
