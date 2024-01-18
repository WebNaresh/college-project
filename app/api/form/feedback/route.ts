import { prisma } from "@/lib/prisma";
import { FeedbackDetails, PerformanceEvalutationForm } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../teaching-learning/route";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm(req?.user);
    const feedback = await getFeedback(form);
    return NextResponse.json({
      status: "success",
      feedback,
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
export const getFeedback = async (
  form: PerformanceEvalutationForm
): Promise<FeedbackDetails> => {
  let feedbackDetails = await prisma.feedbackDetails.findFirst({
    where: {
      formId: form.id,
    },
  });
  if (!feedbackDetails) {
    feedbackDetails = await prisma.feedbackDetails.create({
      data: {
        formId: form.id,
      },
    });
  }
  return feedbackDetails;
};
