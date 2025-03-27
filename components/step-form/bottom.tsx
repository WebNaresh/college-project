"use client";
import { Button } from "@/components/ui/button";

type Props = {
  nextStep: () => void;
  prevStep: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};

const Bottom = ({ nextStep, prevStep, isFirstStep, isLastStep }: Props) => {
  return (
    <div className="w-full flex justify-between">
      <Button variant={"outline"} onClick={prevStep} disabled={isFirstStep}>
        Previous
      </Button>
      <Button variant={"outline"} onClick={nextStep} disabled={isLastStep}>
        Next
      </Button>
    </div>
  );
};

export default Bottom;
