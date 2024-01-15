"use client";
import StepForm from "@/components/step-form/form-wrapper";
import useMultiStepForm from "@/custom-hooks/useStepForm";
import { FC } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiStepForm: FC = () => {
  const {
    step,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    totalSteps,
    goToStep,
  } = useMultiStepForm(7);

  const useSwitch = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 onNext={nextStep} />;
      case 2:
        return <Step2 onNext={nextStep} onPrev={prevStep} />;
      case 3:
        return <Step3 onPrev={prevStep} onNext={nextStep} />;
      case 4:
        return <Step4 onPrev={prevStep} onNext={nextStep} />;
      default:
        return null;
    }
  };

  return (
    <StepForm
      {...{
        goToStep,
        totalSteps,
        step,
        isFirstStep,
        isLastStep,
        nextStep,
        prevStep,
      }}
    >
      {useSwitch(step)}
    </StepForm>
  );
};

export default MultiStepForm;
