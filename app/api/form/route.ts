// import { hash } from "bcrypt";
import { auth } from "@/lib/auth";
import { getForm } from "@/lib/functions";
import { prisma } from "@/lib/prisma";
import { PerformanceEvalutationForm } from "@prisma/client";
import { endOfYear, startOfYear } from "date-fns";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const session = await auth();
    let form: PerformanceEvalutationForm | null = null;
    if (
      session?.user !== null &&
      session?.user.professionalInfo?.id !== undefined
    ) {
      form = await prisma.performanceEvalutationForm.findFirst({
        where: {
          userId: session?.user?.id,
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
      if (form) {
      } else {
        form = await prisma.performanceEvalutationForm.create({
          data: {
            userId: session?.user.id as string,
            professtionalInfoId: session?.user.professionalInfo?.id as string,
          },
        });
      }
    }

    return NextResponse.json({
      status: "success",
      form,
    });
  } catch (error: any) {
    console.error(`🚀 ~ file: route.ts:47 ~ error:`, error);
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    let { averageResult, classEngagement } = (await req.json()) as {
      averageResult: number;
      classEngagement: number;
    };

    let form = await getForm();

    let updatedForm = await prisma.performanceEvalutationForm.update({
      where: {
        id: form.id,
      },
      data: {
        averageResult,
        classEngagement,
      },
    });

    return NextResponse.json({
      status: "success",
      updatedForm,
    });
  } catch (error: any) {
    console.error(`🚀 ~ file: route.ts:47 ~ error:`, error);
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
