// Step3.tsx
import { FC } from "react";

interface Step3Props {
  onPrev: () => void;
  onNext: () => void;
}

const Step3: FC<Step3Props> = ({ onPrev, onNext }) => {
  return (
    <div>
      3{/* Step 1 form elements */}
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step3;
