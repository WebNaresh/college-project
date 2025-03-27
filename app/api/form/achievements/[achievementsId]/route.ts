import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { achievementsId: string } }
) {
  try {
    const achievements = await prisma.achievements.delete({
      where: {
        id: params.achievementsId,
      },
    });

    return NextResponse.json({
      status: "success",
      achievements,
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
