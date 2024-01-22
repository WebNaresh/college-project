import HeaderText from "../header-text";
import EvalutationFooter from "./components/evaluation-footer";
import AdvanceEvaluationTable from "./components/evaluation-table";
import { RowItemInteferance } from "./components/interface";

type Props = {
  // data: Books[];
};

const EvaluationForm = (p: Props) => {
  return (
    <>
      <div id="printable" className="gap-4 flex flex-col">
        <HeaderText title="b) Books(s)/Article/Chapter(s) published" />
        <AdvanceEvaluationTable header={rowHeader} internalData={rowData} />
        <div className="html2pdf__page-break" />
        <AdvanceEvaluationTable header={rowHeader} internalData={array2} />
        <div className="html2pdf__page-break" />
        <AdvanceEvaluationTable header={rowHeader} internalData={array3} />
        <EvalutationFooter />
      </div>
    </>
  );
};

export default EvaluationForm;

export const rowHeader: RowItemInteferance = {
  className: "",
  data: ["Sr.No.", "Appraisal Parameters", "Maximum Marks", "Marks Scored"],
};
export const rowData: RowItemInteferance[] = [
  {
    className: "bg-[#fbd4b4] text-left font-bold p-2 border-b",
    data: ["[A]", "Academic Appraisal ", "[210]", ""],
  },
  {
    className: "bg-[#ffff66] text-left font-bold p-2 border-b",
    data: ["1", "Teaching & Learning", "[95]", ""],
  },
  {
    data: [
      "",
      <div className="flex flex-col">
        <AdvanceEvaluationTable
          title={{ titleData: "Average % Result (Theory): ", className: "" }}
          className="border-0 border-b"
          header={{
            data: ["UG", "6", "5", "4", "3", "2", "1"],
            className: "p-0  h-8",
          }}
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
              className: "p-0  h-8",
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
              className: "p-0  h-8",
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
              className: "p-0  h-8",
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
              className: "p-0  h-8",
            },
          ]}
        />
        <AdvanceEvaluationTable
          title={{ titleData: "" }}
          className="border-0 border-b "
          header={{
            data: ["PG", "6", "5", "4", "3", "2", "1"],
            className: "p-0  h-8",
          }}
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
              className: "p-0  h-8",
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
              className: "p-0  h-8",
            },
          ]}
        />
        <AdvanceEvaluationTable
          title={{ titleData: "Average % Class Engagement" }}
          className="border-0 border-b"
          header={{
            data: ["7", "6", "5", "4", "3", "2", "1"],
            className: "p-0  h-8",
          }}
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
              className: "p-0  h-8",
            },
          ]}
        />
        <AdvanceEvaluationTable
          title={{ titleData: "Average % Student Feedback Score" }}
          className="border-0 border-b "
          header={{
            data: ["6", "5", "4", "3", "2", "1"],
            className: "p-0  h-8",
          }}
          internalData={[
            {
              data: ["96-100", "90-95", "80-89", "75-79", "70-74", "60-69"],
              className: "p-0  h-8",
            },
          ]}
        />
        <AdvanceEvaluationTable
          title={{ titleData: "Average % Peer Feedback Score" }}
          className="border-0 border-b"
          header={{
            data: ["6", "5", "4", "3", "2", "1"],
            className: "p-0  h-8",
          }}
          internalData={[
            {
              data: ["96-100", "90-95", "80-89", "75-79", "70-74", "60-69"],
              className: "p-0  h-8",
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
                    {
                      data: ["1 Effort "],
                      className: "font-bold p-0  h-8",
                    },
                    { data: ["5"], className: "p-0  h-8 border-b-0" },
                  ]}
                />,
                <AdvanceEvaluationTable
                  className="border-0"
                  internalData={[
                    { data: ["> 1 Effort "], className: "font-bold p-0  h-8" },
                    { data: ["10"], className: "p-0  h-8 border-b-0" },
                  ]}
                />,
              ],
              className: "border-b-0",
            },
          ]}
        />
      </div>,
      "6",
      "",
    ],
  },
];

let array2 = [
  {
    className: "bg-[#ffff66] font-bold text-left p-2 border-b",
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
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
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
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
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
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
            },
          ]}
        />
      </>,
      "20",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left p-2",
    data: ["3", "Knowledge Enhancement Programs Attended", "[10]", ""],
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
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
            },
          ]}
        />
      </>,
      "",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left p-2",
    data: ["4", "Knowledge Enhancement Programs Organized ", "[10]", ""],
  },
  {
    className: "border-b-0",
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
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
            },
          ]}
        />
      </>,
      "",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left p-2",
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
                              className: "border-b-0",
                            },
                          ]}
                        />,
                        <AdvanceEvaluationTable
                          className="border-0"
                          internalData={[
                            {
                              data: ["Awarded ", "Submitted"],
                            },
                            { className: "border-b-0", data: ["20", "10"] },
                          ]}
                        />,
                      ],
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
            },
          ]}
        />
      </>,
      "30",
      "",
    ],
  },
];
let array3 = [
  {
    className: "bg-[#ffff66] font-bold text-left p-2",
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
                              className: "border-b-0",
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
                              className: "border-b-0",
                            },
                          ]}
                        />,
                      ],
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
            },
          ]}
        />
      </>,
      "10",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left p-2",
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
                              className: "border-b-0",
                            },
                          ]}
                        />,
                      ],
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
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
      "8",
      "Examination Duties Assigned[Minimum 1 expected in each category] ",
      "[10]",
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
                              data: ["College Level", "University Level"],
                            },
                            {
                              data: ["5", "5"],
                              className: "border-b-0",
                            },
                          ]}
                        />,
                      ],
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
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
    data: [
      "9",
      "Co-curricular, Extra-curricular activities Organized[Minimum 1 expected in each category] ",
      "[10]",
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
                              data: ["Co-Curricular", "Extra-Curricular"],
                            },
                            {
                              data: ["5", "5"],
                              className: "border-b-0",
                            },
                          ]}
                        />,
                      ],
                      className: "border-b-0",
                    },
                  ]}
                />,
              ],
              className: "border-b-0",
            },
          ]}
        />
      </>,
      "",
      "",
    ],
  },
  {
    className: "bg-[#ffff66] font-bold text-left ",
    data: [
      "10",
      "Responsibilities Handled [5 Marks/Responsibility, Maximum 2 Responsibility] ",
      "[10]",
      "",
    ],
  },
  {
    className: "bg-[#8db3e2] font-bold text-left",
    data: ["", "Total:[A]", "[210]", ""],
  },
  {
    className: "bg-[#fbd4b4] font-bold text-left",
    data: [
      "B",
      "Any other Special Achievement[5 Marks/Achievement, Maximum 2 Achievement] ",
      "[10]",
      "",
    ],
  },
  {
    className: "bg-[#8db3e2] font-bold text-left",
    data: ["", "Total:[B]", "[10]", ""],
  },
  {
    className: "font-bold text-left",
    data: ["", "Total:[A]+[B]", "[220]", ""],
  },
];
