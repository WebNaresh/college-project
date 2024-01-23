// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { rigthStatusEnum } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();

    let patent = await prisma.patent.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      patent,
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
export interface patent {
  dateOfApplication: Date;
  isCommercialized: boolean;
  rightStatus: rigthStatusEnum;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let patent = (await req.json()) as patent;
    let form = await getForm();

    await prisma.patent.create({
      data: {
        ...patent,
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
