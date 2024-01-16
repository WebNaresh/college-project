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
