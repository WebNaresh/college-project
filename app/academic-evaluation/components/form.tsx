"use client";
import StepForm from "@/components/step-form/form-wrapper";
import useMultiStepForm from "@/custom-hooks/useStepForm";
import { CalendarRange, LucideIcon } from "lucide-react";
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
        return <Step1 nextStep={nextStep} />;
      case 2:
        return <Step2 nextStep={nextStep} />;
      case 3:
        return <Step3 nextStep={nextStep} />;
      case 4:
        return <Step4 nextStep={nextStep} />;
      case 5:
        return <Step5 nextStep={nextStep} />;
      case 6:
        return <Step6 nextStep={nextStep} />;
      default:
        return null;
    }
  };
  let arrayOfIcons: LucideIcon[] = [CalendarRange];
  console.log(`🚀 ~ file: form.tsx:37 ~ arrayOfIcons:`, arrayOfIcons);
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
        arrayOfIcons,
      }}
    >
      {useSwitch(step)}
    </StepForm>
  );
};

export default AcademicEvaluationForm;
