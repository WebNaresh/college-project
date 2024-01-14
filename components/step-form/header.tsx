// Header.tsx
import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface HeaderProps {
  totalSteps: number;
  step: number;
  goToStep: (number: number) => void;
}

const Header: FC<HeaderProps> = ({ totalSteps, step, goToStep }) => {
  const stepLabels = Array.from({ length: totalSteps }, (_, index) =>
    (index + 1).toString()
  );

  return (
    <div className="w-full flex gap-[1px]">
      {stepLabels.map((label, index) => (
        <React.Fragment key={index}>
          <Button
            onClick={() => goToStep(index + 1)}
            variant={step < index + 1 ? "outline" : "default"}
            className="rounded-full flex-shrink-0 w-14 h-14"
          >
            {label}
          </Button>
          {index < totalSteps - 1 && (
            <div
              className={`w-full h-4 ${
                step - 1 < index + 1 ? "bg-[#f973164a]" : "bg-primary"
              } flex m-auto rounded-md`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Header;
