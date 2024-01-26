import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { kepId: string } }
) {
  try {
    let kepAttended = await prisma.kepAttended.delete({
      where: {
        id: params.kepId,
      },
    });

    return NextResponse.json({
      status: "success",
      kepAttended,
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
