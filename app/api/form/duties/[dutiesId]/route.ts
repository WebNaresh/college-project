import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { dutiesId: string } }
) {
  try {
    let duties = await prisma.duties.delete({
      where: {
        id: params.dutiesId,
      },
    });

    return NextResponse.json({
      status: "success",
      duties,
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
