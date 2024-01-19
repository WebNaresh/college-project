import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { responsibilityDepartmentId: string } }
) {
  try {
    let responsibilityDepartment = await prisma.responsibilityDepartment.delete(
      {
        where: {
          id: params.responsibilityDepartmentId,
        },
      }
    );

    return NextResponse.json({
      status: "success",
      responsibilityDepartment,
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
