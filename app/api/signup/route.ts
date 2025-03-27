import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
// import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
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
    } = await req.json();

    // Validate required fields
    if (!name || !email || !password || !role || !dateOfJoining ||
      !departmentName || !facaultyName || !contact || !designation || !profileImage) {
      return NextResponse.json(
        {
          status: "error",
          message: "All input fields are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Check for existing user
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (existingUser) {
      if (!existingUser.verified) {
        return NextResponse.json(
          {
            status: "error",
            message: "Your Application is in Waiting stage",
          },
          { status: 400 }
        );
      }
      return NextResponse.json(
        {
          status: "error",
          message: "Email already in use",
        },
        { status: 400 }
      );
    }

    // Hash password and create user
    const hashedPassword = await hash(password, 12);
    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role,
        contact,
        profileImage,
        verified: false,
      },
      select: {
        name: true,
        email: true,
        role: true,
        contact: true,
        profileImage: true,
        verified: true,
        professionalInfo: true,
        id: true,
      },
    });

    // Create professional info
    await prisma.professtionalInfo.create({
      data: {
        facaultyName,
        dateOfJoining: new Date(dateOfJoining),
        departmentName,
        designation,
        userId: user.id,
      },
    });

    // Fetch complete user data
    const userWithInfo = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        professionalInfo: {
          select: {
            dateOfJoining: true,
            facaultyName: true,
            departmentName: true,
            designation: true,
          },
        },
      },
    });

    return NextResponse.json({
      status: "success",
      message: "User successfully created waiting for approval",
      user: userWithInfo,
    });

  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: error.message || "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
