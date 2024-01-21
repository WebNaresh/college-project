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
      <AdvanceEvaluationTable header={rowHeader} internalData={rowData} />
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
    className: "bg-[#fbd4b4] text-left font-bold",
    data: ["[A]", "Academic Appraisal ", "[210]", ""],
  },
  {
    className: "bg-[#ffff66] text-left font-bold",
    data: ["1", "Teaching & Learning", "[95]", ""],
  },
  {
    data: [
      "",
      <div className="flex flex-col">
        <AdvanceEvaluationTable
          title={{ titleData: "Average % Result (Theory): ", className: "" }}
          className="border-0 border-b"
          header={{ data: ["UG", "6", "5", "4", "3", "2", "1"] }}
          internalData={[
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
          title={{ titleData: "" }}
          className="border-0 border-b "
          header={{ data: ["PG", "6", "5", "4", "3", "2", "1"] }}
          internalData={[
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
        <AdvanceEvaluationTable
          title={{ titleData: "Average % Class Engagement" }}
          className="border-0 border-b"
          header={{ data: ["7", "6", "5", "4", "3", "2", "1"] }}
          internalData={[
            {
              data: [
                "96-100",
                "90-95",
                "85-89",
                "80-84",
                "75-79",
                "70-74",
                "65-69",
              ],
            },
          ]}
        />
        <AdvanceEvaluationTable
          title={{ titleData: "Average % Student Feedback Score" }}
          className="border-0 border-b "
          header={{ data: ["6", "5", "4", "3", "2", "1"] }}
          internalData={[
            {
              data: ["96-100", "90-95", "80-89", "75-79", "70-74", "60-69"],
            },
          ]}
        />
        <AdvanceEvaluationTable
          title={{ titleData: "Average % Peer Feedback Score" }}
          className="border-0 border-b"
          header={{ data: ["6", "5", "4", "3", "2", "1"] }}
          internalData={[
            {
              data: ["96-100", "90-95", "80-89", "75-79", "70-74", "60-69"],
            },
          ]}
        />
        <AdvanceEvaluationTable
          title={{
            titleData:
              "Efforts taken for Effective Curriculum Delivery [ Minimum 1 expected ] ",
          }}
          className="border-0 "
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    { data: ["1 Effort "], className: "font-bold" },
                    { data: ["5"] },
                  ]}
                />,
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    { data: ["> 1 Effort "], className: "font-bold" },
                    { data: ["10"] },
                  ]}
                />,
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
    className: "bg-[#ffff66] font-bold text-left",
    data: ["1", "Publication", "[45]", ""],
  },
  {
    data: [
      "1",
      <>
        <AdvanceEvaluationTable
          className="border-0"
          header={{ data: ["Journals:"], className: "text-left" }}
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    {
                      data: [
                        "Indexed in SCI/Scopus/Google Scholar / any other",
                        "No index",
                      ],
                    },
                    {
                      data: ["20", "10"],
                    },
                  ]}
                />,
              ],
            },
          ]}
        />
        <AdvanceEvaluationTable
          className="border-0 border-t"
          header={{ data: ["Conferences:"], className: "text-left" }}
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    {
                      data: [
                        "Indexed in SCI/Scopus/Google Scholar / any other",
                        "No index",
                      ],
                    },
                    {
                      data: ["20", "10"],
                    },
                  ]}
                />,
              ],
            },
          ]}
        />
        <AdvanceEvaluationTable
          className="border-0 border-t"
          header={{ data: ["Books/ Book Chapter:"], className: "text-left" }}
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    {
                      data: ["Book", "Book Chapter"],
                    },
                    {
                      data: ["10", "5"],
                    },
                  ]}
                />,
              ],
            },
          ]}
        />
      </>,
      "20",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left",
    data: ["3", "Knowledge Enhancement Programs Attended ", "[10]", ""],
  },
  {
    className: "",
    data: [
      "",
      <>
        <AdvanceEvaluationTable
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    {
                      data: ["Minimum 1 Week ", "1 to 5 Days "],
                    },
                    {
                      data: ["10", "5"],
                    },
                  ]}
                />,
              ],
            },
          ]}
        />
      </>,
      "",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left",
    data: ["4", "Knowledge Enhancement Programs Organized ", "[10]", ""],
  },
  {
    className: "",
    data: [
      "",
      <>
        <AdvanceEvaluationTable
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    {
                      data: ["Main Organizer ", "Organizing Committee Member "],
                    },
                    {
                      data: ["10", "5"],
                    },
                  ]}
                />,
              ],
            },
          ]}
        />
      </>,
      "",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left",
    data: ["5", "Sponsored Research ", "[30]", ""],
  },
  {
    className: "",
    data: [
      "",
      <>
        <AdvanceEvaluationTable
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    {
                      data: ["In-house ", "External Agency (With R&D Cell) "],
                    },
                    {
                      data: [
                        <AdvanceEvaluationTable
                          className="border-0"
                          internalData={[
                            {
                              data: ["Awarded ", "Submitted"],
                            },
                            {
                              data: ["10", "5"],
                            },
                          ]}
                        />,
                        <AdvanceEvaluationTable
                          className="border-0"
                          internalData={[
                            {
                              data: ["Awarded ", "Submitted"],
                            },
                            {
                              data: ["20", "10"],
                            },
                          ]}
                        />,
                      ],
                    },
                  ]}
                />,
              ],
            },
          ]}
        />
      </>,
      "30",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left",
    data: ["6", "Consultancy – Amount ", "[10]", ""],
  },
  {
    className: "",
    data: [
      "",
      <>
        <AdvanceEvaluationTable
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    {
                      data: [
                        <AdvanceEvaluationTable
                          className="border-0"
                          internalData={[
                            {
                              data: ["2+ Lacs  ", "1+ Lacs"],
                            },
                            {
                              data: ["10", "5"],
                            },
                          ]}
                        />,
                        <AdvanceEvaluationTable
                          className="border-0"
                          internalData={[
                            {
                              data: ["50 K+ ", "25 K+"],
                            },
                            {
                              data: ["3 ", "2"],
                            },
                          ]}
                        />,
                      ],
                    },
                  ]}
                />,
              ],
            },
          ]}
        />
      </>,
      "10",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left",
    data: [
      "7",
      "Efforts taken for IPR [Minimum 1 expected in each category] ",
      "[40]",
      "",
    ],
  },
  {
    className: "",
    data: [
      "",
      <>
        <AdvanceEvaluationTable
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    {
                      data: [
                        <AdvanceEvaluationTable
                          className="border-0"
                          internalData={[
                            {
                              data: ["Patent", "Copy right", "Trade Mark"],
                            },
                            {
                              data: ["20", "10", "10"],
                            },
                          ]}
                        />,
                      ],
                    },
                  ]}
                />,
              ],
            },
          ]}
        />
      </>,
      "10",
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
