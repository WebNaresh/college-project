import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { reasearchId: string } }
) {
  try {
    let reasearch = await prisma.reasearch.delete({
      where: {
        id: params.reasearchId,
      },
    });

    return NextResponse.json({
      status: "success",
      reasearch,
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
