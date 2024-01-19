// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm(req?.user);

    let responsibilityDepartment =
      await prisma.responsibilityDepartment.findMany({
        where: {
          formId: form.id,
        },
      });

    return NextResponse.json({
      status: "success",
      responsibilityDepartment,
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
export interface responsibilityDepartment {
  responsibility: string;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let responsibilityDepartment =
      (await req.json()) as responsibilityDepartment;
    let form = await getForm(req?.user);

    await prisma.responsibilityDepartment.create({
      data: {
        ...responsibilityDepartment,
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Data Added Successfully",
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
