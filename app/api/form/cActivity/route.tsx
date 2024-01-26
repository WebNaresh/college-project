import { getForm } from "@/lib/functions";
import { prisma } from "@/lib/prisma";
import { activityType } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();

    let cActivity = await prisma.cActivity.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      cActivity,
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
export interface cActivityDetails {
  nameOfActivity: string;
  duration: string;
  type: activityType;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let cActivity = (await req.json()) as cActivityDetails;
    let form = await getForm();

    await prisma.cActivity.create({
      data: {
        ...cActivity,
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
