"use client";
import StepForm from "@/components/step-form/form-wrapper";
import useMultiStepForm from "@/custom-hooks/useStepForm";
import { FC } from "react";
import Step1 from "./steps/step1/step1";
import Step2 from "./steps/step2/step2";
import Step3 from "./steps/step3/step3";
import Step4 from "./steps/step4/step4";
import Step5 from "./steps/step5/step5";
import Step6 from "./steps/step6/step6";

const AcademicEvaluationForm: FC = () => {
  const {
    step,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    totalSteps,
    goToStep,
  } = useMultiStepForm(6);

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
      case 5:
        return <Step5 onPrev={prevStep} onNext={nextStep} />;
      case 6:
        return <Step6 onPrev={prevStep} onNext={nextStep} />;
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
