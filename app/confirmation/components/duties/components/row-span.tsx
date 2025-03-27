import { dutyEnum } from "@prisma/client";

type Props = {
  sr: string | number;
  type: string | number;
  assigned: string | dutyEnum;
  header?: boolean;
  className?: string;
};

const RowSpan = ({ sr, type, assigned, header, className }: Props) => {
  return (
    <>
      <div
        className={` grid grid-cols-5 border-black border-b text-center ${className}`}
      >
        <div
          className={` col-span-1 p-2 text-sm ${
            header && "font-bold"
          } border-r border-black`}
        >
          {sr}
        </div>
        <div
          className={`text-left col-span-2 p-2 text-sm ${
            header && "font-bold"
          }`}
        >
          {" "}
          {type}
        </div>
        <div
          className={` col-span-2 p-2 text-sm border-l border-black font-bold`}
        >
          {assigned}
        </div>
      </div>
    </>
  );
};

export default RowSpan;
