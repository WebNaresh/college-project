import HeaderText from "../header-text";
import AdvanceEvaluationTable from "./components/evaluation-table-2";
import { RowItemInteferance } from "./components/interface";

type Props = {
  // data: Books[];
};

const EvaluationForm = (p: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      <HeaderText title="b) Books(s)/Article/Chapter(s) published" />
      <AdvanceEvaluationTable header={rowHeader} data={rowData} />
    </div>
  );
};

export default EvaluationForm;

export const rowHeader: RowItemInteferance = {
  className: "",
  data: ["Sr.No.", "Appraisal Parameters", "Maximum Marks", "Marks Scored"],
};
export const rowData: RowItemInteferance[] = [
  {
    className: "bg-[#fbd4b4]",
    data: ["[A]", "Academic Appraisal ", "[210]", ""],
  },
  {
    className: "bg-[#ffff66]",
    data: ["1", "Teaching & Learning", "[95]", ""],
  },
  {
    data: [
      "",
      <div className="flex flex-col gap-4">
        <AdvanceEvaluationTable
          header={{ data: ["UG", "6", "5", "4", "3", "2", "1"] }}
          data={[
            {
              data: [
                "I",
                "90-100",
                "80-89",
                "70-79",
                "60-69",
                "55-59",
                "50-54",
              ],
            },
            {
              data: [
                "II",
                "90-100",
                "80-89",
                "70-79",
                "60-69",
                "55-59",
                "50-54",
              ],
            },
            {
              data: [
                "III",
                "96-100",
                "90-95",
                "80-89",
                "70-79",
                "60-69",
                "55-59",
              ],
            },
            {
              data: [
                "IV",
                "96-100",
                "90-95",
                "80-89",
                "70-79",
                "60-69",
                "55-59",
              ],
            },
          ]}
        />
        <AdvanceEvaluationTable
          header={{ data: ["PG", "6", "5", "4", "3", "2", "1"] }}
          data={[
            {
              data: [
                "I",
                "96-100",
                "90-95",
                "80-89",
                "70-79",
                "60-69",
                "55-59",
              ],
            },
            {
              data: [
                "II",
                "96-100",
                "90-95",
                "85-89",
                "80-84",
                "75-79",
                "70-74",
              ],
            },
          ]}
        />
      </div>,
      "6",
      "",
    ],
  },
  {
    className: "bg-[#ffff66]",
    data: ["1", "Publication", "[45]", ""],
  },
  {
    data: [
      "1",
      <AdvanceEvaluationTable
        header={{ className: "border-black border", data: ["Journals:"] }}
        data={[
          {
            data: [
              "Indexed in SCI/Scopus/Google Scholar / any other",
              "No index",
            ],
          },
        ]}
      />,
      "20",
      "",
    ],
  },
];
// export const scoreCard = {
//   "Teaching & Learning ": {
//     "Average % Result (Theory):": {
//       ugArray: {
//         headersRow: ["UG", "6", "5", "4", "3", "2", "1"],
//         data: [
//           ["I", "90-100", "80-89", "70-79", "60-69", "55-59", "50-54"],
//           ["II", "90-100", "80-89", "70-79", "60-69", "55-59", "50-54"],
//           ["III", "96-100", "90-95", "80-89", "70-79", "60-69", "55-59"],
//           ["IV", "96-100", "90-95", "80-89", "70-79", "60-69", "55-59"],
//         ],
//       },
//       pgArray: {
//         headersRow: ["PG", "6", "5", "4", "3", "2", "1"],
//         data: [
//           ["I", "96-100", "90-95", "80-89", "70-79", "60-69", "55-59"],
//           ["II", "96-100", "90-95", "85-89", "80-84", "75-79", "70-74"],
//         ],
//       },
//     },
//     "Average % Class Engagement": {
//       headersRow: ["7", "6", "5", "4", "3", "2", "1"],
//       data: ["96-100", "90-95", "85-89", "80-84", "75-79", "70-74", "65-69"],
//     },
//     "Average % Student Feedback Score": {
//       headersRow: ["6", "5", "4", "3", "2", "1"],
//       data: ["96-100", "90-95", "80-89", "75-79", "70-74", "60-69"],
//     },
//     "Average % Peer Feedback Score ": {
//       headersRow: ["6", "5", "4", "3", "2", "1"],
//       data: ["96-100", "90-95", "80-89", "75-79", "70-74", "60-69"],
//     },
//     "Efforts taken for Effective Curriculum Delivery [ Minimum 1expected ]": {
//       headersRow: ["1 Effort", "> 1 Effort "],
//       data: ["5", "10"],
//     },
//   },
// };
