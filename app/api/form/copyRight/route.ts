// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { rigthStatusEnum } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm(req?.user);

    let copyRight = await prisma.copyRight.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      copyRight,
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
export interface copyRight {
  dateOfApplication: Date;
  isCommercialized: boolean;
  rightStatus: rigthStatusEnum;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let copyRight = (await req.json()) as copyRight;
    let form = await getForm(req?.user);

    await prisma.copyRight.create({
      data: {
        ...copyRight,
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
