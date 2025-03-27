import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { journalId: string } }
) {
  try {
    let journals = await prisma.journals.delete({
      where: {
        id: params.journalId,
      },
    });

    return NextResponse.json({
      status: "success",
      journals,
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
