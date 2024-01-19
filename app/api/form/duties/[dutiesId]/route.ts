import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { dutiesId: string } }
) {
  try {
    let duties = await prisma.duties.delete({
      where: {
        id: params.dutiesId,
      },
    });

    return NextResponse.json({
      status: "success",
      duties,
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
