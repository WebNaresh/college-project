"use client";
import DownloadButton from "@/app/confirmation/components/download-button";
import UserForm from "@/app/confirmation/form";
import { useParams } from "next/navigation";

interface TeacherData {
  personalInfo: {
    name: string;
    department: string;
    designation: string;
    dateOfJoining: string;
  };
  performance: {
    averageResult: number;
    classEngagement: number;
    studentFeedback: number;
    peerFeedback: number;
    totalScore: number;
  };
  publications: Array<{
    paperTitle: string;
    level: string;
    name: string;
    issnOrIssbnNo: string;
    indexedIn: string;
    mainAuthor: boolean;
  }>;
  research: Array<{
    scheme: string;
    agency: string;
    status: string;
    date: string;
    grantRecieved: string;
  }>;
  teaching: Array<{
    subjectName: string;
    level: string;
    courseHead: string;
    noOfHrsWeek: number;
    noOfClassesConducted: number;
    result: number;
    term: string;
    year: string;
  }>;
  feedback: {
    term_I_current_year_student_feedback: number;
    term_II_previous_year_student_feedback: number;
    term_I_current_year_peer_feedback: number;
    term_II_previous_year_peer_feedback: number;
  };
}

export default function TeacherReportPage() {
  const params = useParams();

  return (
    <div className="my-12 flex flex-col gap-8">
      <UserForm id={params.user_id as string} />
      <DownloadButton />
    </div>
  );
}
