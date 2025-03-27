import { useSession } from "next-auth/react";
import AdvanceEvaluationTable from "./evaluation-table";

type Props = {
  score: number;
};

const EvalutationFooter = ({ score }: Props) => {
  const { data } = useSession();
  const calculateScore = (value: number) => {
    if (value >= 161) {
      return "Outstanding";
    } else if (value >= 121 && value <= 160) {
      return "Excellent";
    } else if (value >= 91 && value <= 120) {
      return "Very Good";
    } else if (value >= 51 && value <= 90) {
      return "Satisfactory";
    } else if (value >= 1 && value <= 50) {
      return "Average";
    } else {
      return "Invalid value"; // Handle cases where the value is not in any defined range
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold">
        <div>Name of the facaulty Member: {data?.user?.name}</div>
        <div>Department : {data?.user?.professionalInfo?.departmentName}</div>
        <div>Signature : </div>
      </div>
      <AdvanceEvaluationTable
        header={{
          data: [
            "Overall Grading Marks ",
            "[Out of 220] ",
            "Marks & Grade Scored",
          ],
        }}
        internalData={[
          {
            data: [
              <>
                <AdvanceEvaluationTable
                  className="border-0 border-b"
                  internalData={[{ data: ["Outstanding"] }]}
                />
                <AdvanceEvaluationTable
                  className="border-0 border-b"
                  internalData={[{ data: ["Excellent"] }]}
                />
                <AdvanceEvaluationTable
                  className="border-0 border-b"
                  internalData={[{ data: ["Very Good"] }]}
                />
                <AdvanceEvaluationTable
                  className="border-0 border-b"
                  internalData={[{ data: ["Satisfactory"] }]}
                />
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    { data: ["Average"], className: "border-b-0" },
                  ]}
                />
              </>,
              <>
                <AdvanceEvaluationTable
                  className="border-0 border-b"
                  internalData={[{ data: ["161 and above"] }]}
                />
                <AdvanceEvaluationTable
                  className="border-0 border-b"
                  internalData={[{ data: ["121 -160 "] }]}
                />
                <AdvanceEvaluationTable
                  className="border-0 border-b"
                  internalData={[{ data: ["91-120 "] }]}
                />
                <AdvanceEvaluationTable
                  className="border-0 border-b"
                  internalData={[{ data: ["51-90 "] }]}
                />
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    { data: ["Less than 50 "], className: "border-b-0" },
                  ]}
                />
              </>,
              calculateScore(score),
            ],
          },
        ]}
      />
    </div>
  );
};

export default EvalutationFooter;
