import { prisma } from "@/lib/prisma";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function DELETE(
  req: NextApiRequest,
  { params }: { params: { bookId: string } }
) {
  try {
    let book = await prisma.books.delete({
      where: {
        id: params.bookId,
      },
    });

    return NextResponse.json({
      status: "success",
      book,
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
