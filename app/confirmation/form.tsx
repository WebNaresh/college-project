"use client";
import {
  Books,
  Efforts,
  FeedbackDetails,
  PerformanceEvalutationForm,
  ProfesstionalInfo,
  Publication,
  TeachingAndLearning,
  copyRight,
  duties,
  irg,
  kepAttended,
  kepOrganized,
  patent,
  responsibilityDepartment,
  responsibilityInsitute,
  tradeMark,
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import AcademicAppraisel from "./components/academic/academic-appraisel";
import EffortsForm from "./components/efforts/efforts";
import Feedback from "./components/feedback/feedback-info";
import Header from "./components/header/header";
import PersonalInfo from "./components/personal/personal-info";

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
  professtionalInfo: ProfesstionalInfo;
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
    <div className="flex flex-col gap-4 items-center px-8">
      <Header data={data} />
      <PersonalInfo data={data} />
      <AcademicAppraisel data={data} />
      <Feedback data={data} />
      <EffortsForm data={data} />
    </div>
  );
};

export default UserForm;
