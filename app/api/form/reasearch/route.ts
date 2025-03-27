// import { hash } from "bcrypt";
import { getForm } from "@/lib/functions";
import { prisma } from "@/lib/prisma";
import { statusEnum } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();

    let reasearch = await prisma.reasearch.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      reasearch,
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
export interface reasearch {
  scheme: string;
  agency: string;
  status: statusEnum;
  date: Date;
  grantRecieved: string;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let reasearch = (await req.json()) as reasearch;
    let form = await getForm();

    await prisma.reasearch.create({
      data: {
        ...reasearch,
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
