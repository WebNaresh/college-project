import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        // Get current year's performance evaluations
        const currentYear = new Date().getFullYear();
        const startOfYear = new Date(currentYear, 0, 1);
        const endOfYear = new Date(currentYear, 11, 31);

        const performanceData = await prisma.performanceEvalutationForm.findMany({
            where: {
                createdAt: {
                    gte: startOfYear,
                    lte: endOfYear,
                },
                User: {
                    role: "Teacher",
                },
            },
            include: {
                User: true,
                professtionalInfo: true,
                feedbackDetails: true,
                publication: true,
                reasearch: true,
            },
        });

        // Transform the data for the frontend
        const transformedData = performanceData.map((form) => {
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

            // Calculate total score (weighted average)
            const totalScore = Math.round(
                (form.averageResult * 0.3 +
                    form.classEngagement * 0.2 +
                    studentFeedback * 0.2 +
                    peerFeedback * 0.2 +
                    (form.publication.length * 5) * 0.1) /
                (0.3 + 0.2 + 0.2 + 0.2 + 0.1)
            );

            return {
                teacherName: form.User.name,
                department: form.professtionalInfo?.departmentName || "N/A",
                designation: form.professtionalInfo?.designation || "N/A",
                averageResult: form.averageResult,
                classEngagement: form.classEngagement,
                studentFeedback,
                peerFeedback,
                publications: form.publication.length,
                researchProjects: form.reasearch.length,
                totalScore,
                id: form.User.id
            };
        });

        return NextResponse.json(transformedData);
    } catch (error: any) {
        console.error("Error fetching performance data:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
} 