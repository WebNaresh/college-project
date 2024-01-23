// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();

    let effort = await prisma.efforts.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      effort,
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

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let { effort } = (await req.json()) as {
      effort: string;
    };
    let form = await getForm();

    await prisma.efforts.create({
      data: {
        formId: form.id,
        efforts: effort,
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

// Rest of your code
