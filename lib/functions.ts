import { PerformanceEvalutationForm } from "@prisma/client";
import { endOfYear, startOfYear } from "date-fns";
import { NextResponse } from "next/server";
import { auth } from "./auth";
import { prisma } from "./prisma";

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
