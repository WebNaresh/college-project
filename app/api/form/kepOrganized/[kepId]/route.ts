import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { kepId: string } }
) {
  try {
    let kepOrganized = await prisma.kepOrganized.delete({
      where: {
        id: params.kepId,
      },
    });

    return NextResponse.json({
      status: "success",
      kepOrganized,
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
