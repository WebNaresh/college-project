"use client";
import {
  Books,
  Conferences,
  Efforts,
  FeedbackDetails,
  Journals,
  PerformanceEvalutationForm,
  ProfesstionalInfo,
  TeachingAndLearning,
  achievements,
  cActivity,
  copyRight,
  duties,
  irg,
  kepAttended,
  kepOrganized,
  patent,
  reasearch,
  responsibilityDepartment,
  responsibilityInsitute,
  tradeMark,
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import AcademicAppraisel from "./components/academic/academic-appraisel";
import AchievementsForm from "./components/achievement/achievement";
import BooksForm from "./components/books/books";
import CActivityForm from "./components/cActivities/cActivities";
import DutyForm from "./components/duties/duties";
import EffortsForm from "./components/efforts/efforts";
import EvaluationForm from "./components/evaluation-form/evaluation-form";
import Feedback from "./components/feedback/feedback-info";
import Header from "./components/header/header";
import IRGForm from "./components/irg/irg";
import KepAttendedForm from "./components/kms-organized/kms-organized";
import PatentForm from "./components/patents/patents";
import PersonalInfo from "./components/personal/personal-info";
import PublicationForm from "./components/publication/publication";
import SponsorReasearchForm from "./components/reasearch/reasearch";
import ResponsibilityForm from "./components/responsibility/responsibilty";

type Props = {};
export interface PerformanceEvalutationFormDetails
  extends PerformanceEvalutationForm {
  teachingAndLearning: TeachingAndLearning[];
  feedbackDetails: FeedbackDetails;
  efforts: Efforts[];
  conferences: Conferences[];
  journals: Journals[];
  books: Books[];
  kepAttended: kepAttended[];
  kepOrganized: kepOrganized[];
  iRG: irg[];
  copyRight: copyRight[];
  tradeMark: tradeMark[];
  patent: patent[];
  duties: duties[];
  responsibilityDepartment: responsibilityDepartment[];
  responsibilityInsitute: responsibilityInsitute[];
  reasearch: reasearch[];
  cActivity: cActivity[];
  professtionalInfo: ProfesstionalInfo;
  achievements: achievements[];
}

const UserForm = (p: Props) => {
  const fetchFormDetails = async () => {
    const config = { headers: { "Content-Type": "application/json" } };
    let data: AxiosResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_ROUTE}/api/form`,
      config
    );
    return data.data.form as PerformanceEvalutationFormDetails;
  };
  const { data } = useQuery({
    queryKey: ["form-details"],
    queryFn: fetchFormDetails,
  });
  console.log(
    `🚀 ~ filex: form.tsx:121 ~ data?.feedbackDetails?.term_II_previous_year_peer_feedback:`,
    data?.cActivity
  );

  return (
    <div id="printable" className="flex flex-col gap-4 px-8 flex-1">
      <Header data={data} />
      <PersonalInfo data={data} />
      <AcademicAppraisel data={data} />
      <Feedback data={data} />
      <EffortsForm data={data} />
      <PublicationForm
        data={data?.journals || []}
        data2={data?.conferences || []}
      />
      <BooksForm data={data?.books || []} />
      <KepAttendedForm data={data?.kepAttended || []} />
      <SponsorReasearchForm data={data?.reasearch || []} />
      <IRGForm data={data?.iRG || []} />
      <PatentForm
        tradeMark={data?.tradeMark || []}
        copyRight={data?.copyRight || []}
        patents={data?.patent || []}
      />
      <DutyForm data={data?.duties || []} />
      <CActivityForm data={data?.cActivity || []} />
      <ResponsibilityForm
        instituteResponsibility={data?.responsibilityInsitute || []}
        departmentResponsibility={data?.responsibilityDepartment || []}
      />
      <AchievementsForm data={data?.achievements || []} />
      {data && (
        <EvaluationForm
          averageClassEngagement={getMark(
            data.classEngagement,
            markClassRanges
          )}
          averageResult={getMark(data.averageResult, markPgRanges)}
          averagePeerFeedback={getMark(
            (data?.feedbackDetails?.term_II_previous_year_peer_feedback +
              data?.feedbackDetails?.term_I_current_year_peer_feedback) /
              2,
            peerFeddbackRanges
          )}
          averageStudentFeedback={getMark(
            (data?.feedbackDetails?.term_II_previous_year_student_feedback +
              data?.feedbackDetails?.term_I_current_year_student_feedback) /
              2,
            peerFeddbackRanges
          )}
          effortsScore={
            (data?.efforts.length || 0) > 1
              ? 10
              : data?.efforts.length === 1
              ? 5
              : 0
          }
          journalScore={
            data?.journals.some((item) => ["No Index"].includes(item.indexedIn))
              ? 10
              : 20
          }
          conferenceScore={
            data?.journals.some((item) => ["No Index"].includes(item.indexedIn))
              ? 10
              : 20
          }
          bookScore={
            data?.books.some((item) => item.type.includes("Book")) ? 10 : 5
          }
          kepAttendedScore={
            data?.kepAttended.some((item) => parseInt(item.duration) > 6)
              ? 10
              : 5
          }
          kepOrganizedScore={
            data?.kepOrganized.some((item) => item.formId) ? 10 : 5
          }
          reasearchScore={
            data?.reasearch.some((item) => item.status === "Submitted")
              ? 20
              : 10
          }
          consultancyScore={determineValue(data.iRG)}
          iprEffortScore={returnCount(data)}
          dutiesScore={
            data?.duties[0]?.ifsDuty?.includes("Institute") ||
            data?.duties[0]?.esDuty?.includes("Institute") ||
            data?.duties[0]?.qpsDuty?.includes("Institute")
              ? 10
              : 5
          }
          activityScore={
            data?.cActivity.length > 2 ? 10 : data?.cActivity.length > 2 ? 5 : 0
          }
          responsibilityScore={
            [...data?.responsibilityDepartment, data.responsibilityInsitute]
              .length > 2
              ? 10
              : [...data?.responsibilityDepartment, data.responsibilityInsitute]
                  .length > 2
              ? 5
              : 0
          }
          achievementScore={
            data?.achievements.length > 2
              ? 10
              : data?.achievements.length > 1
              ? 5
              : 0
          }
        />
      )}
    </div>
  );
};

export default UserForm;

const markPgRanges: any[] = [
  { range: 6, min: 96, max: 100 },
  { range: 5, min: 90, max: 95 },
  { range: 4, min: 80, max: 89 },
  { range: 3, min: 70, max: 79 },
  { range: 2, min: 60, max: 69 },
  { range: 1, min: 55, max: 59 },
];
const markClassRanges: any = [
  { range: 7, min: 96, max: 100 },
  { range: 6, min: 90, max: 95 },
  { range: 5, min: 85, max: 89 },
  { range: 4, min: 80, max: 84 },
  { range: 3, min: 75, max: 79 },
  { range: 2, min: 70, max: 74 },
  { range: 1, min: 65, max: 69 },
];
const peerFeddbackRanges = [
  { range: 6, min: 96, max: 100 },
  { range: 5, min: 90, max: 95 },
  { range: 4, min: 80, max: 89 },
  { range: 3, min: 75, max: 79 },
  { range: 2, min: 70, max: 74 },
  { range: 1, min: 60, max: 69 },
];

function getMark(totalMark: number, array: any[]): number {
  for (const { range, min, max } of array) {
    if (totalMark >= min && totalMark <= max) {
      return range;
    }
  }

  // Default case (if totalMark doesn't fall into any range)
  return 0;
}
function determineValue(array: irg[]) {
  // Check if any item has amountRecieved greater than 200000 (2 lakh)
  const greaterThan2Lakh = array.some(
    (item) => parseInt(item.amountRecieved) > 200000
  );

  // Check if any item has amountRecieved greater than 100000 (1 lakh)
  const greaterThan1Lakh = array.some(
    (item) => parseInt(item.amountRecieved) > 100000
  );

  // Check if any item has amountRecieved greater than 50000
  const greaterThan50K = array.some(
    (item) => parseInt(item.amountRecieved) > 50000
  );

  // Return the appropriate value based on the conditions
  if (greaterThan2Lakh) {
    return 10;
  } else if (greaterThan1Lakh) {
    return 5;
  } else if (greaterThan50K) {
    return 3;
  } else {
    return 2;
  }
}
const returnCount = (data: PerformanceEvalutationFormDetails) => {
  let count: number = 0;

  if (data.patent.length > 0) {
    count = count + 20;
  }
  if (data.copyRight.length > 0) {
    count = count + 10;
  }
  if (data.tradeMark.length > 0) {
    count = count + 10;
  }

  return count;
};
