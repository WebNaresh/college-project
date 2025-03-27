import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
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
