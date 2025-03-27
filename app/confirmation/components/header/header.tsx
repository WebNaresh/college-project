"use client";
import { format, subYears } from "date-fns";
import Image from "next/image";
import { PerformanceEvalutationFormDetails } from "../../form";

type Props = {
  data: PerformanceEvalutationFormDetails | undefined;
};

const Header = ({ data }: Props) => {
  return (
    <div className="grid justify-center grid-cols-8 gap-4 w-full">
      <Image
        src="/biglogo.svg"
        alt="Modern College Log"
        width={70}
        className="grid col-span-2 text-center m-auto"
        height={70}
      />
      <div className="flex flex-col justify-center col-span-6 font-bold text-center gap-2">
        <div>PES’s Modern College of Engineering</div>
        <div>Faculty Performance Evaluation Form </div>
        <div>
          Academic Year:{" "}
          {data?.createdAt !== undefined && format(data?.createdAt, "yyyy")}-
          {data?.createdAt !== undefined &&
            format(subYears(data?.createdAt, 1), "yyyy")}{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
