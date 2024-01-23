import { auth } from "@/lib/auth";
import { User } from "@/lib/next-auth";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log(`🚀 ~ file: middleware.ts:7 ~ request:`, request);
  const session = await auth();
  console.log(`🚀 ~ file: middleware.ts:8 ~ session:`, session);
  if (session && session.user !== null) {
    return (request.user = session.user as User);
  } else {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: "User is not authenticate please login first",
      }),
      { status: 404 }
    );
  }
}

export const config = {
  matcher: ["/form/:path*", "/academic-evaluation"],
};
