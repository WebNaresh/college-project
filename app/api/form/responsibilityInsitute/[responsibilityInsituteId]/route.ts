import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
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
