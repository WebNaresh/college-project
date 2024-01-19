import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { achievementsId: string } }
) {
  try {
    let achievements = await prisma.achievements.delete({
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
