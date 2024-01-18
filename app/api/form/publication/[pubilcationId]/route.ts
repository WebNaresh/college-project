import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { pubilcationId: string } }
) {
  try {
    let publication = await prisma.teachingAndLearning.delete({
      where: {
        id: params.pubilcationId,
      },
    });

    return NextResponse.json({
      status: "success",
      publication,
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
