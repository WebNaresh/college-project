import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { conferenceId: string } }
) {
  try {
    let conference = await prisma.conferences.delete({
      where: {
        id: params.conferenceId,
      },
    });

    return NextResponse.json({
      status: "success",
      conference,
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
