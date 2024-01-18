// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { indexLevel, publicationLevel } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm(req?.user);

    let publications = await prisma.publication.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      publications,
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
export interface publicationFormDetails {
  paperTitle: string;
  level: publicationLevel;
  nameOfJournal: string;
  issnOrIssbnNo: string;
  indexedIn: indexLevel;
  mainAuthor: boolean;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let {
      paperTitle,
      level,
      nameOfJournal,
      issnOrIssbnNo,
      indexedIn,
      mainAuthor,
    } = (await req.json()) as publicationFormDetails;
    let form = await getForm(req?.user);

    await prisma.publication.create({
      data: {
        paperTitle,
        level,
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
