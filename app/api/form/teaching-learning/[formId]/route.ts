import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { formId: string } }
) {
  try {
    let form = await prisma.teachingAndLearning.delete({
      where: {
        id: params.formId,
      },
    });

    return NextResponse.json({
      status: "success",
      term: form.term,
      year: form.year,
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
