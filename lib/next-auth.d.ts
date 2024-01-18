import "next-auth";
import "next-auth/jwt";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      contact: string;
      verified: boolean;
      profileImage: string;
      role: $Enums.Role;
      createdAt: Date;
      updatedAt: Date;
      professionalInfo: {
        id: string;
        dateOfJoining: Date;
        facaultyName: string;
        designation: string;
        departmentName: string;
        userId: string;
      } | null;
    } | null;
  }
  interface User {
    id: string;
    name: string;
    email: string;
    contact: string;
    verified: boolean;
    profileImage: string;
    role: "HOD" | "Teacher";
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }
}
declare module "next/server" {
  interface NextRequest {
    [INTERNALS]: {
      cookies: RequestCookies;
      geo: RequestData["geo"];
      ip?: string;
      url: string;
      nextUrl: NextURL;
    };
    constructor(input: URL | RequestInfo, init?: RequestInit);
    get cookies(): RequestCookies;
    get geo():
      | {
          city?: string | undefined;
          country?: string | undefined;
          region?: string | undefined;
          latitude?: string | undefined;
          longitude?: string | undefined;
        }
      | undefined;
    get ip(): string | undefined;
    get nextUrl(): NextURL;
    /**
     * @deprecated
     * `page` has been deprecated in favour of `URLPattern`.
     * Read more: https://nextjs.org/docs/messages/middleware-request-page
     */
    get page(): void;
    /**
     * @deprecated
     * `ua` has been removed in favour of \`userAgent\` function.
     * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
     */
    get ua(): void;
    get url(): string;
    user: {
      id: string;
      name: string;
      email: string;
      contact: string;
      verified: boolean;
      profileImage: string;
      role: "Teacher" | "HOD";
      createdAt: Date;
      updatedAt: Date;
      professionalInfo: {
        id: string;
        dateOfJoining: Date;
        facaultyName: string;
        designation: string;
        departmentName: string;
        userId: string;
      };
    };
  }
}
interface User {
  id: string;
  name: string;
  email: string;
  contact: string;
  verified: boolean;
  profileImage: string;
  role: $Enums.Role;
  createdAt: Date;
  updatedAt: Date;
  professionalInfo: {
    id: string;
    dateOfJoining: Date;
    facaultyName: string;
    designation: string;
    departmentName: string;
    userId: string;
  };
}
