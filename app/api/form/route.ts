// import { hash } from "bcrypt";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { $Enums, PerformanceEvalutationForm } from "@prisma/client";
import { endOfYear, startOfYear } from "date-fns";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
interface User {
  id: string;
  name: string;
  email: string;
  contact: string;
  verified: boolean;
  profileImage: string;
  role: $Enums.roleEnum;
  createdAt: Date;
  updatedAt: Date;
  professionalInfo: {
    id: string;
    dateOfJoining: Date;
    facaultyName: string;
    designation: string;
    departmentName: string;
    userId: string;
  } | null;
}

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
          reasearch: true,
          cActivity: true,
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
// Rest of your code
export const getForm = async (): Promise<PerformanceEvalutationForm> => {
  const session = await auth();
  console.log(`🚀 ~ file: route.ts:131 ~ session:`, session?.user);
  if (!session) {
    throw new NextResponse(
      JSON.stringify({
        status: "error",
        message: "User is not authenticate please login first",
      }),
      { status: 404 }
    );
  }
  let form = await prisma.performanceEvalutationForm.findFirst({
    where: {
      userId: session?.user?.id,
      createdAt: {
        gte: startOfYear(new Date()), // Start of the current year
        lt: endOfYear(new Date()), // End of the current year
      },
      isSubmitted: false,
    },
  });
  console.log(`🚀 ~ file: route.ts:151 ~ form:`, form);
  if (!form) {
    form = await prisma.performanceEvalutationForm.create({
      data: {
        userId: session?.user?.id as string,
        professtionalInfoId: session?.user?.professionalInfo?.id as string,
      },
    });
  }
  return form;
};
