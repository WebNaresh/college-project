import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { cActivityId: string } }
) {
  try {
    let cActivity = await prisma.cActivity.delete({
      where: {
        id: params.cActivityId,
      },
    });

    return NextResponse.json({
      status: "success",
      cActivity,
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
