import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { patentId: string } }
) {
  try {
    let patent = await prisma.patent.delete({
      where: {
        id: params.patentId,
      },
    });

    return NextResponse.json({
      status: "success",
      patent,
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
