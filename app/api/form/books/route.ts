// import { hash } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { monthEnum } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getForm } from "../route";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm(req?.user);

    let books = await prisma.books.findMany({
      where: {
        formId: form.id,
      },
    });

    return NextResponse.json({
      status: "success",
      books,
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
export interface booksDetails {
  bookTitle: string;
  titleWithPageNo: string;
  publisherName: string;
  editorName: string;
  issnOrIssbnNo: string;
  detailOfCoAuthors: string;
  publishingMonth: monthEnum;
  publishingYear: string;
}

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let bookDetail = (await req.json()) as booksDetails;
    let form = await getForm(req?.user);

    await prisma.books.create({
      data: {
        ...bookDetail,
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
