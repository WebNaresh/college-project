// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();

    let responsibilityInsitute = await prisma.responsibilityInsitute.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      responsibilityInsitute,
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
export interface responsibilityInsitute {
  responsibility: string;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let responsibilityInsitute = (await req.json()) as responsibilityInsitute;
    let form = await getForm();

    await prisma.responsibilityInsitute.create({
      data: {
        ...responsibilityInsitute,
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
