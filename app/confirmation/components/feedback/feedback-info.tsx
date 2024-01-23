import { PerformanceEvalutationFormDetails } from "../../form";
import HeaderText from "../header-text";
import FeedbackBottom from "./components/bottom";
import FeedbackHeader from "./components/header";
import FeedbackRow from "./components/row";

type Props = {
  data: PerformanceEvalutationFormDetails | undefined;
};

const Feedback = ({ data }: Props) => {
  let averagePeerFeedback: number;
  let averageStudentFeedback: number;
  averagePeerFeedback = data?.feedbackDetails[0]
    ?.term_II_previous_year_peer_feedback
    ? (data?.feedbackDetails[0]?.term_II_previous_year_student_feedback +
        data?.feedbackDetails[0]?.term_I_current_year_student_feedback) /
      2
    : 0;
  averageStudentFeedback = data?.feedbackDetails[0]
    ?.term_II_previous_year_peer_feedback
    ? (data?.feedbackDetails[0]?.term_II_previous_year_peer_feedback +
        data?.feedbackDetails[0]?.term_I_current_year_peer_feedback) /
      2
    : 0;
  return (
    <div className="w-full">
      <HeaderText title="b).Average Feedback Score:" className=" mb-2" />
      <div className="w-full border border-black grid grid-cols-4 text-sm text-center">
        <FeedbackHeader />
        <FeedbackRow
          header="Average % Student Feedback Score"
          firstValue={
            data?.feedbackDetails[0]?.term_II_previous_year_student_feedback
          }
          secondValue={
            data?.feedbackDetails[0]?.term_I_current_year_student_feedback
          }
        />
        <FeedbackRow
          header="Average % Student Feedback Score"
          firstValue={
            data?.feedbackDetails[0]?.term_II_previous_year_student_feedback
          }
          secondValue={
            data?.feedbackDetails[0]?.term_I_current_year_student_feedback
          }
        />
        <FeedbackBottom
          averagePeerFeedback={averagePeerFeedback}
          averageStudentFeedback={averageStudentFeedback}
        />
      </div>
    </div>
  );
};

export default Feedback;
