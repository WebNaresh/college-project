"use client";
import { LucideIcon } from "lucide-react";
import { useEffect } from "react";
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
  arrayOfIcons?: LucideIcon[];
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
  arrayOfIcons,
}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  return (
    <div className="p-8 flex flex-col gap-4 border border-brand/brand-background m-4 rounded-lg">
      <Header {...{ goToStep, totalSteps, step, arrayOfIcons }} />
      {children}
      <Bottom {...{ isFirstStep, isLastStep, nextStep, prevStep }} />
    </div>
  );
};

export default StepForm;
