"use client";
import {
  Books,
  Efforts,
  FeedbackDetails,
  PerformanceEvalutationForm,
  ProfesstionalInfo,
  Publication,
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
  publication: Publication[];
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
    data?.feedbackDetails
  );

  return (
    <div id="printable" className="flex flex-col gap-4 px-8 flex-1">
      <Header data={data} />
      <PersonalInfo data={data} />
      <AcademicAppraisel data={data} />
      <Feedback data={data} />
      <EffortsForm data={data} />
      <PublicationForm data={data?.publication || []} />
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
          journalScore={10}
          conferenceScore={10}
          bookScore={10}
          kepAttendedScore={10}
          kepOrganizedScore={10}
          reasearchScore={10}
          consultancyScore={10}
          iprEffortScore={10}
          dutiesScore={10}
          activityScore={10}
          responsibilityScore={10}
          achievementScore={10}

          // averageStudentFeedback={getMark(data.feedbackDetails., markPgRanges)}
          // averagePeerFeedback={getMark(data.averageResult, markPgRanges)}
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
