"use client";
import StepForm from "@/components/step-form/form-wrapper";
import useMultiStepForm from "@/custom-hooks/useStepForm";
import { FC } from "react";
import Step1 from "./steps/step1/step1";
import Step2 from "./steps/step2/step2";
import Step3 from "./steps/step3/step3";

const AcademicEvaluationForm: FC = () => {
  const {
    step,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    totalSteps,
    goToStep,
  } = useMultiStepForm(3);

  const useSwitch = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 onNext={nextStep} />;
      case 2:
        return <Step2 onNext={nextStep} />;
      case 3:
        return <Step3 onNext={nextStep} />;

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

export default AcademicEvaluationForm;
