import "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string | null;
      emailVerified: Date | null;
      image: string | null;
      password: string | null;
      role: "Teacher" | "Student" | "Principle" | "HOD";
      academics: {
        designation: string;
        dateOfJoining: Date;
        facultyName: string;
        departmentName: string;
      } | null;
      personalInfo: {
        mobile1: string;
      } | null;
      createdAt: Date;
      updatedAt: Date;
    } | null;
  }
}
