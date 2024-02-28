"use client";
import { LucideIcon } from "lucide-react";
// Header.tsx
import React, { FC } from "react";

interface HeaderProps {
  totalSteps: number;
  step: number;
  goToStep: (number: number) => void;
  arrayOfIcons?: LucideIcon[];
}

const Header: FC<HeaderProps> = ({
  totalSteps,
  step,
  goToStep,
  arrayOfIcons,
}) => {
  console.log(`🚀 ~ file: header.tsx:19 ~ arrayOfIcons:`);
  const stepLabels = Array.from({ length: totalSteps }, (_, index) =>
    (index + 1).toString()
  );

  return (
    <div className="w-full flex gap-[1px]">
      {stepLabels.map((label, index) => {
        let Icon = arrayOfIcons
          ? arrayOfIcons[index]
            ? arrayOfIcons[index]
            : undefined
          : undefined;

        return (
          <React.Fragment key={index}>
            <button
              onClick={() => goToStep(index + 1)}
              className={`${
                step > index + 1
                  ? "!bg-brand/brand-primary-fade text-brand/brand-primary font-bold"
                  : "!bg-brand/brand-background text-brand/brand-background/brand-background-9 font-bold"
              } rounded-full flex-shrink-0 w-14 h-14 flex items-center justify-center`}
            >
              {Icon ? <Icon size={20} /> : label}
            </button>
            {index < totalSteps - 1 && (
              <div
                className={`w-full h-4 ${
                  step - 1 < index + 1
                    ? "bg-brand/brand-neutrals-white"
                    : "bg-brand/brand-primary-fade"
                } flex m-auto rounded-md`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Header;
