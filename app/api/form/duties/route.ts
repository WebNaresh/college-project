// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { dutyEnum } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm(req?.user);

    let duties = await prisma.duties.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      duties,
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
export interface duties {
  ifsDuty: dutyEnum;
  esDuty: dutyEnum;
  qpsDuty: dutyEnum;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let duties = (await req.json()) as duties;
    let form = await getForm(req?.user);

    await prisma.duties.create({
      data: {
        ...duties,
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
