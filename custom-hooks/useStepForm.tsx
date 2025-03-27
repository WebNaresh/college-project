// useMultiStepForm.ts
import { useState } from "react";

const useMultiStepForm = (totalSteps: number) => {
  const [step, setStep] = useState<number>(1);

  const goToStep = (newStep: number) => {
    setStep((prevStep) => Math.min(Math.max(newStep, 1), totalSteps));
  };

  const nextStep = () => {
    goToStep(step + 1);
  };

  const prevStep = () => {
    goToStep(step - 1);
  };

  const isFirstStep = step === 1;
  const isLastStep = step === totalSteps;

  return {
    step,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    totalSteps,
    goToStep, // Add the goToStep function
  };
};

export default useMultiStepForm;
