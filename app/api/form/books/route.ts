// import { hash } from "bcrypt";
import { getForm } from "@/lib/functions";
import { prisma } from "@/lib/prisma";
import { bookSchema } from "@/lib/zObject";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Import necessary modules and types

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    let form = await getForm();

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

export async function PUT(req: NextRequest, res: NextApiResponse) {
  try {
    let bookDetail = (await req.json()) as z.infer<typeof bookSchema>;
    let form = await getForm();

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
