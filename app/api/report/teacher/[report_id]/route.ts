import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { report_id: string } }
) {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const form = await prisma.performanceEvalutationForm.findUnique({
            where: {
                id: params.report_id,
            },
            include: {
                User: true,
                professtionalInfo: true,
                feedbackDetails: true,
                publication: true,
                reasearch: true,
                teachingAndLearning: true,
            },
        });

        if (!form) {
            return NextResponse.json(
                { message: "Performance evaluation not found" },
                { status: 404 }
            );
        }

        // Calculate feedback averages
        const studentFeedback = form.feedbackDetails
            ? (form.feedbackDetails.term_I_current_year_student_feedback +
                form.feedbackDetails.term_II_previous_year_student_feedback) /
            2
            : 0;

        const peerFeedback = form.feedbackDetails
            ? (form.feedbackDetails.term_I_current_year_peer_feedback +
                form.feedbackDetails.term_II_previous_year_peer_feedback) /
            2
            : 0;

        // Transform the data for the frontend
        const transformedData = {
            personalInfo: {
                name: form.User.name,
                department: form.professtionalInfo?.departmentName || "N/A",
                designation: form.professtionalInfo?.designation || "N/A",
                dateOfJoining: form.professtionalInfo?.dateOfJoining || new Date(),
            },
            performance: {
                averageResult: form.averageResult,
                classEngagement: form.classEngagement,
                studentFeedback,
                peerFeedback,
                totalScore: Math.round(
                    (form.averageResult * 0.3 +
                        form.classEngagement * 0.2 +
                        studentFeedback * 0.2 +
                        peerFeedback * 0.2 +
                        (form.publication.length * 5) * 0.1) /
                    (0.3 + 0.2 + 0.2 + 0.2 + 0.1)
                ),
            },
            publications: form.publication.map((pub) => ({
                paperTitle: pub.paperTitle,
                level: pub.level,
                name: pub.name,
                issnOrIssbnNo: pub.issnOrIssbnNo,
                indexedIn: pub.indexedIn,
                mainAuthor: pub.mainAuthor,
            })),
            research: form.reasearch.map((res) => ({
                scheme: res.scheme,
                agency: res.agency,
                status: res.status,
                date: res.date,
                grantRecieved: res.grantRecieved,
            })),
            teaching: form.teachingAndLearning.map((teach) => ({
                subjectName: teach.subjectName,
                level: teach.level,
                courseHead: teach.courseHead,
                noOfHrsWeek: teach.noOfHrsWeek,
                noOfClassesConducted: teach.noOfClassesConducted,
                result: teach.result,
                term: teach.term,
                year: teach.year,
            })),
            feedback: form.feedbackDetails || {
                term_I_current_year_student_feedback: 0,
                term_II_previous_year_student_feedback: 0,
                term_I_current_year_peer_feedback: 0,
                term_II_previous_year_peer_feedback: 0,
            },
        };

        return NextResponse.json(transformedData);
    } catch (error: any) {
        console.error("Error fetching teacher data:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
} 