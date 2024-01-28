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

    let conferences = await prisma.conferences.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      conferences,
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
export interface conferencesFormDetails {
  nameOfConference: string;
  indexedIn: indexLevel;
  mainAuthor: boolean;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let { nameOfConference, indexedIn, mainAuthor } =
      (await req.json()) as conferencesFormDetails;
    let form = await getForm();

    await prisma.conferences.create({
      data: {
        nameOfConference,
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
