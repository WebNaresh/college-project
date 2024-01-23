// import { hash } from "bcrypt";
import { step1formSchema } from "@/app/academic-evaluation/components/steps/step1/components/mini-form";
import { prisma } from "@/lib/prisma";
import { termEnum, yearEnum } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();

    let termIIPreviousData = await prisma.teachingAndLearning.findMany({
      where: {
        term: "II",
        year: "Previous",
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      termIIPreviousData,
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

export async function POST(req: NextRequest, res: NextApiResponse) {
  try {
    let { term, year } = (await req.json()) as {
      term: termEnum;
      year: yearEnum;
    };
    let form = await getForm();

    let termIIPreviousData = await prisma.teachingAndLearning.findMany({
      where: {
        term: term,
        year: year,
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      termIIPreviousData,
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
    let {
      subjectName,
      level,
      courseHead,
      noOfHrsWeek,
      noOfClassesConducted,
      result,
      term,
      year,
    } = (await req.json()) as z.infer<typeof step1formSchema>;
    let form = await getForm();

    await prisma.teachingAndLearning.create({
      data: {
        subjectName,
        level,
        courseHead,
        noOfHrsWeek,
        noOfClassesConducted,
        result,
        term,
        year,
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      message: "Data Added Successfully",
      term,
      year,
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
