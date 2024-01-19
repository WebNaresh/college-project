import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
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
