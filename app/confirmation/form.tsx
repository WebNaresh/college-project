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
  feedbackDetails: FeedbackDetails[];
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
  return (
    <div className="flex flex-col gap-4 px-8 flex-1">
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
      <EvaluationForm />
    </div>
  );
};

export default UserForm;
