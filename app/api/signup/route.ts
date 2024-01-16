import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
// import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let {
    name,
    email,
    password,
    role,
    facaultyName,
    dateOfJoining,
    departmentName,
    designation,
    profileImage,
    contact,
  } = (await req.json()) as {
    name: string;
    email: string;
    password: string;
    role: "Teacher" | "HOD";
    dateOfJoining: Date;
    departmentName: string;
    facaultyName: string;
    contact: string;
    designation: string;
    profileImage: string;
  };

  if (
    !name ||
    !email ||
    !password ||
    !role ||
    !dateOfJoining ||
    !departmentName ||
    !facaultyName ||
    !contact ||
    !designation ||
    !profileImage
  ) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "All input fields are required",
      }),
      { status: 400 }
    );
  }
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
  });

  if (existingUser) {
    // User with this email already exists, return an error response
    if (!existingUser.verified) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "Your Application is Waiting stage",
        }),
        { status: 400 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: "Email already in use",
        }),
        { status: 400 }
      );
    }
  }
  try {
    password = await hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password,
        role: role,
        contact,
        profileImage,
        verified: false,
      },
      select: {
        name: true,
        email: true,
        password: false,
        role: true,
        contact: true,
        profileImage: true,
        verified: true,
        professionalInfo: true,
        id: true,
      },
    });
    await prisma.professtionalInfo.create({
      data: {
        facaultyName,
        dateOfJoining,
        departmentName,
        designation,
        userId: user.id,
      },
    });
    let user2 = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      include: {
        professionalInfo: {
          select: {
            dateOfJoining: true,
            facaultyName: true,
            departmentName: true,
            designation: true,
            userId: false,
            id: false,
          },
        },
      },
    });
    return NextResponse.json({
      status: "success",
      user: user2,
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
