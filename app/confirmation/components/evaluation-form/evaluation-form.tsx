import HeaderText from "../header-text";
import EvalutationFooter from "./components/evaluation-footer";
import AdvanceEvaluationTable from "./components/evaluation-table";
import { RowItemInteferance } from "./components/interface";

type Props = {
  averageResult: number;
  averageClassEngagement: number;
  averageStudentFeedback: number;
  averagePeerFeedback: number;
  effortsScore: number;
  journalScore: number;
  conferenceScore: number;
  bookScore: number;
  kepAttendedScore: number;
  kepOrganizedScore: number;
  reasearchScore: number;
  consultancyScore: number;
  iprEffortScore: number;
  dutiesScore: number;
  activityScore: number;
  responsibilityScore: number;
  achievementScore: number;
};

const EvaluationForm = ({
  averageResult,
  averageClassEngagement,
  averagePeerFeedback,
  averageStudentFeedback,
  effortsScore,
  journalScore,
  conferenceScore,
  bookScore,
  kepAttendedScore,
  kepOrganizedScore,
  reasearchScore,
  consultancyScore,
  iprEffortScore,
  dutiesScore,
  activityScore,
  responsibilityScore,
  achievementScore,
}: Props) => {
  const rowHeader: RowItemInteferance = {
    className: "",
    data: ["Sr.No.", "Appraisal Parameters", "Maximum Marks", "Marks Scored"],
  };
  const rowData: RowItemInteferance[] = [
    {
      className: "bg-[#fbd4b4] text-left font-bold p-2 border-b",
      data: ["[A]", "Academic Appraisal ", "[210]", ""],
    },
    {
      className: "bg-[#ffff66] text-left font-bold p-2 border-b",
      data: ["1", "Teaching & Learning", "[35]", ""],
    },
    {
      data: [
        "",
        <AdvanceEvaluationTable
          key={"id1"}
          title={{
            titleData: "Average % Result (Theory): ",
            className: "border-b-0",
          }}
          className="border-0 border-b-0"
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
              className: "p-0 border-b-0 h-8",
            },
          ]}
        />,
        "6",
        averageResult,
      ],
    },

    {
      data: [
        "",
        <AdvanceEvaluationTable
          key={"id2"}
          title={{ titleData: "" }}
          className="border-0 border-b-0"
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
              className: "p-0 border-b-0 h-8",
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
              className: "p-0 border-b-0 h-8",
            },
          ]}
        />,
        "6",
        averageResult,
      ],
    },
    {
      data: [
        "",
        <AdvanceEvaluationTable
          key={"id3"}
          title={{ titleData: "Average % Class Engagement" }}
          className="border-0 border-b-0"
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
              className: "p-0 border-b-0 h-8",
            },
          ]}
        />,
        "7",
        averageClassEngagement,
      ],
    },
    {
      data: [
        "",
        <AdvanceEvaluationTable
          key={"id4"}
          title={{ titleData: "Average % Student Feedback Score" }}
          className="border-0 border-b-0"
          header={{
            data: ["6", "5", "4", "3", "2", "1"],
            className: "p-0  h-8",
          }}
          internalData={[
            {
              data: ["96-100", "90-95", "80-89", "75-79", "70-74", "60-69"],
              className: "p-0 border-b-0 h-8",
            },
          ]}
        />,
        "6",
        averageStudentFeedback,
      ],
    },
    {
      data: [
        "",
        <AdvanceEvaluationTable
          key={"id5"}
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
        />,
        "6",
        averagePeerFeedback,
      ],
    },
    {
      data: [
        "",
        <AdvanceEvaluationTable
          key={"id6"}
          title={{
            titleData:
              "Efforts taken for Effective Curriculum Delivery [ Minimum 1 expected ] ",
          }}
          className="border-0 "
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id7"}
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
                  key={"id8"}
                  className="border-0"
                  internalData={[
                    {
                      data: ["> 1 Effort "],
                      className: "font-bold p-0  h-8",
                    },
                    { data: ["10"], className: "p-0  h-8 border-b-0" },
                  ]}
                />,
              ],
              className: "border-b-0 border-t-0",
            },
          ]}
        />,
        "10",
        effortsScore,
      ],
    },
  ];

  const array2 = [
    {
      className: "bg-[#ffff66] font-bold text-left p-2 border-b",
      data: ["1", "Publication", "[45]", ""],
    },
    {
      data: [
        "1",
        <AdvanceEvaluationTable
          key={"id9"}
          className="border-0"
          header={{ data: ["Journals:"], className: "text-left" }}
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id10"}
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
        />,
        "20",
        journalScore,
      ],
    },
    {
      data: [
        "1",
        <AdvanceEvaluationTable
          key={"id11"}
          className="border-0 border-t-0"
          header={{ data: ["Conferences:"], className: "text-left" }}
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id12"}
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
        />,
        "20",
        conferenceScore,
      ],
    },
    {
      data: [
        "1",
        <AdvanceEvaluationTable
          key={"id13"}
          className="border-0 border-t-0"
          header={{ data: ["Books/ Book Chapter:"], className: "text-left" }}
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id14"}
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
        />,
        "20",
        bookScore,
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
        <AdvanceEvaluationTable
          key={"id15"}
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id16"}
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
        />,
        "10",
        kepAttendedScore,
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

        <AdvanceEvaluationTable
          key={"id17"}
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id18"}
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
        />,
        "10",
        kepOrganizedScore,
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
        <AdvanceEvaluationTable
          key={"id19"}
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id20"}
                  className="border-0"
                  internalData={[
                    {
                      data: ["In-house ", "External Agency (With R&D Cell) "],
                    },
                    {
                      data: [
                        <AdvanceEvaluationTable
                          key={"id21"}
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
                          key={"id22"}
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
        />,
        "30",
        reasearchScore,
      ],
    },
  ];
  const array3 = [
    {
      className: "bg-[#ffff66] font-bold text-left p-2",
      data: ["6", "Consultancy – Amount ", "[10]", ""],
    },
    {
      className: "",
      data: [
        "",
        <AdvanceEvaluationTable
          key={"id23"}
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id24"}
                  className="border-0"
                  internalData={[
                    {
                      data: [
                        <AdvanceEvaluationTable
                          key={"id25"}
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
                          key={"id26"}
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
        />,
        "10",
        consultancyScore,
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
        <AdvanceEvaluationTable
          key={"id27"}
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id28"}
                  className="border-0"
                  internalData={[
                    {
                      data: [
                        <AdvanceEvaluationTable
                          key={"id29"}
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
        />,
        "10",
        iprEffortScore,
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
        <AdvanceEvaluationTable
          key={"id30"}
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id31"}
                  className="border-0"
                  internalData={[
                    {
                      data: [
                        <AdvanceEvaluationTable
                          key={"id32"}
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
        />,
        "10",
        dutiesScore,
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
        <AdvanceEvaluationTable
          key={"id33"}
          className="border-0"
          internalData={[
            {
              data: [
                <AdvanceEvaluationTable
                  key={"id34"}
                  className="border-0"
                  internalData={[
                    {
                      data: [
                        <AdvanceEvaluationTable
                          key={"id35"}
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
        />,
        "10",
        activityScore,
      ],
    },
    {
      className: "bg-[#ffff66] font-bold text-left ",
      data: [
        "10",
        "Responsibilities Handled [5 Marks/Responsibility, Maximum 2 Responsibility] ",
        "[10]",
        responsibilityScore,
      ],
    },
    {
      className: "bg-[#8db3e2] font-bold text-left",
      data: [
        "",
        "Total:[A]",
        "[210]",
        averageResult +
          averageClassEngagement +
          averageStudentFeedback +
          averagePeerFeedback +
          effortsScore +
          journalScore +
          conferenceScore +
          bookScore +
          kepAttendedScore +
          kepOrganizedScore +
          reasearchScore +
          consultancyScore +
          iprEffortScore +
          dutiesScore +
          activityScore +
          responsibilityScore,
      ],
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
      data: ["", "Total:[B]", "[10]", achievementScore],
    },
    {
      className: "font-bold text-left",
      data: [
        "",
        "Total:[A]+[B]",
        "[220]",
        averageResult +
          averageClassEngagement +
          averageStudentFeedback +
          averagePeerFeedback +
          effortsScore +
          journalScore +
          conferenceScore +
          bookScore +
          kepAttendedScore +
          kepOrganizedScore +
          reasearchScore +
          consultancyScore +
          iprEffortScore +
          dutiesScore +
          activityScore +
          responsibilityScore +
          achievementScore,
      ],
    },
  ];
  return (
    <>
      <div id="printable" className="gap-4 flex flex-col">
        <HeaderText title="b) Books(s)/Article/Chapter(s) published" />
        <AdvanceEvaluationTable header={rowHeader} internalData={rowData} />
        <div className="html2pdf__page-break" />
        <AdvanceEvaluationTable header={rowHeader} internalData={array2} />
        <div className="html2pdf__page-break" />
        <AdvanceEvaluationTable header={rowHeader} internalData={array3} />
        <EvalutationFooter
          score={
            averageResult +
            averageClassEngagement +
            averageStudentFeedback +
            averagePeerFeedback +
            effortsScore +
            journalScore +
            conferenceScore +
            bookScore +
            kepAttendedScore +
            kepOrganizedScore +
            reasearchScore +
            consultancyScore +
            iprEffortScore +
            dutiesScore +
            activityScore +
            responsibilityScore +
            achievementScore
          }
        />
      </div>
    </>
  );
};

export default EvaluationForm;
