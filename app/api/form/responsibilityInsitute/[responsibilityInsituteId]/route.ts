import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { responsibilityInsituteId: string } }
) {
  try {
    let responsibilityInsitute = await prisma.responsibilityInsitute.delete({
      where: {
        id: params.responsibilityInsituteId,
      },
    });

    return NextResponse.json({
      status: "success",
      responsibilityInsitute,
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
