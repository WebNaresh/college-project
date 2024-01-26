import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { effortId: string } }
) {
  try {
    let effort = await prisma.efforts.delete({
      where: {
        id: params.effortId,
      },
    });

    return NextResponse.json({
      status: "success",
      effort: effort,
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
