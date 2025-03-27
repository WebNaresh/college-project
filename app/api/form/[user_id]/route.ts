// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { PerformanceEvalutationForm } from "@prisma/client";
import { endOfYear, startOfYear } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

// Import necessary modules and types

export async function GET(req: NextRequest, { params }: { params: { user_id: string } }) {
    try {
        let form: PerformanceEvalutationForm | null = null;
        const userId = params.user_id;
        console.log(`🚀 ~ userId:`, userId)

        if (!userId) {
            return NextResponse.json(
                { message: "User ID is required" },
                { status: 400 }
            );
        }

        form = await prisma.performanceEvalutationForm.findFirst({
            where: {
                userId: userId,
                createdAt: {
                    gte: startOfYear(new Date()), // Start of the current year
                    lt: endOfYear(new Date()), // End of the current year
                },
                isSubmitted: false,
            },
            include: {
                teachingAndLearning: true,
                feedbackDetails: true,
                efforts: true,
                publication: true,
                books: true,
                kepAttended: true,
                kepOrganized: true,
                iRG: true,
                copyRight: true,
                tradeMark: true,
                patent: true,
                duties: true,
                responsibilityDepartment: true,
                responsibilityInsitute: true,
                achievements: true,
                professtionalInfo: true,
                reasearch: true,
                cActivity: true,
                conferences: true,
                journals: true,
            },
        });

        if (!form) {
            form = await prisma.performanceEvalutationForm.create({
                data: {
                    userId: userId,
                    professtionalInfoId: userId,
                },
            });
        }

        return NextResponse.json({
            status: "success",
            form,
        });
    } catch (error: any) {
        console.error("Error in form route:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

