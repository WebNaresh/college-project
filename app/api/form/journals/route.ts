// import { hash } from "bcrypt";
import { getForm } from "@/lib/functions";
import { prisma } from "@/lib/prisma";
import { indexLevel } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();

    let journals = await prisma.journals.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      journals,
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
export interface journalsFormDetails {
  nameOfJournal: string;
  issnOrIssbnNo: string;
  indexedIn: indexLevel;
  mainAuthor: boolean;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let { nameOfJournal, issnOrIssbnNo, indexedIn, mainAuthor } =
      (await req.json()) as journalsFormDetails;
    let form = await getForm();

    await prisma.journals.create({
      data: {
        nameOfJournal,
        issnOrIssbnNo,
        indexedIn,
        mainAuthor,
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
