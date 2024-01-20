// import { hash } from "bcrypt";
import { auth } from "@/lib/auth";
import { User } from "@/lib/next-auth";
import { prisma } from "@/lib/prisma";
import { PerformanceEvalutationForm } from "@prisma/client";
import { endOfYear, startOfYear } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// Import necessary modules and types

export async function GET(req: NextApiRequest, res: NextApiResponse) {
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
        },
      });
      if (form) {
      } else {
        form = await prisma.performanceEvalutationForm.create({
          data: {
            userId: session?.user.id,
            professtionalInfoId: session?.user.professionalInfo?.id,
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

// Rest of your code
export const getForm = async (
  user: User
): Promise<PerformanceEvalutationForm> => {
  let form = await prisma.performanceEvalutationForm.findFirst({
    where: {
      userId: user?.id,
      createdAt: {
        gte: startOfYear(new Date()), // Start of the current year
        lt: endOfYear(new Date()), // End of the current year
      },
      isSubmitted: false,
    },
  });
  if (!form) {
    form = await prisma.performanceEvalutationForm.create({
      data: {
        userId: user?.id,
        professtionalInfoId: user.professionalInfo?.id,
      },
    });
  }
  return form;
};
