import Bottom from "./bottom";
import Header from "./header";

type Props = {
  totalSteps: number;
  step: number;
  goToStep: (number: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  children: React.ReactNode;
};

const StepForm = ({
  totalSteps,
  step,
  goToStep,
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  children,
}: Props) => {
  return (
    <div className="p-8 flex flex-col gap-4">
      <Header {...{ goToStep, totalSteps, step }} />
      {children}
      <Bottom {...{ isFirstStep, isLastStep, nextStep, prevStep }} />
    </div>
  );
};

export default StepForm;
