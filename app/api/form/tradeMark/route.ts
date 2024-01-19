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

    let tradeMark = await prisma.tradeMark.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      tradeMark,
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
export interface tradeMark {
  dateOfApplication: Date;
  isCommercialized: boolean;
  rightStatus: rigthStatusEnum;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let tradeMark = (await req.json()) as tradeMark;
    let form = await getForm(req?.user);

    await prisma.tradeMark.create({
      data: {
        ...tradeMark,
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
