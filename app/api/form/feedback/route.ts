import { getForm } from "@/lib/functions";
import { prisma } from "@/lib/prisma";
import { FeedbackDetails, PerformanceEvalutationForm } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();
    if (!form) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "No form found",
        }),
        { status: 404 }
      );
    }
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

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    let feedbackDetails = (await req.json()) as FeedbackDetails;

    // First verify that the form exists
    const form = await prisma.performanceEvalutationForm.findUnique({
      where: { id: feedbackDetails.formId }
    });

    if (!form) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "Form not found",
        }),
        { status: 404 }
      );
    }

    const feedback = await updateFeedback(feedbackDetails);
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

const getFeedback = async (
  form: PerformanceEvalutationForm
): Promise<FeedbackDetails | null> => {
  let feedbackDetails = await prisma.feedbackDetails.findFirst({
    where: {
      formId: form.id,
    },
  });

  if (!feedbackDetails) {
    feedbackDetails = await prisma.feedbackDetails.create({
      data: {
        formId: form.id,
        term_I_current_year_student_feedback: 0,
        term_II_previous_year_student_feedback: 0,
        term_I_current_year_peer_feedback: 0,
        term_II_previous_year_peer_feedback: 0,
      },
    });

    await prisma.performanceEvalutationForm.update({
      where: {
        id: form.id,
      },
      data: {
        feedbackDetailsId: feedbackDetails.id,
      },
    });
  }

  return feedbackDetails;
};

const updateFeedback = async (
  feedback: FeedbackDetails
): Promise<FeedbackDetails | null> => {
  const feedbackDetails = await prisma.feedbackDetails.update({
    where: {
      id: feedback.id,
    },
    data: {
      term_I_current_year_student_feedback: feedback.term_I_current_year_student_feedback,
      term_II_previous_year_student_feedback: feedback.term_II_previous_year_student_feedback,
      term_I_current_year_peer_feedback: feedback.term_I_current_year_peer_feedback,
      term_II_previous_year_peer_feedback: feedback.term_II_previous_year_peer_feedback,
    },
  });

  return feedbackDetails;
};
