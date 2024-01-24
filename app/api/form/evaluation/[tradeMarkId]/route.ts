import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { tradeMarkId: string } }
) {
  try {
    let tradeMark = await prisma.tradeMark.delete({
      where: {
        id: params.tradeMarkId,
      },
    });

    return NextResponse.json({
      status: "success",
      tradeMark,
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
