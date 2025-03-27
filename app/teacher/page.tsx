"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TeacherPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session?.user?.role !== "Teacher") {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Welcome, {session?.user?.name}
          </span>
          <Button
            variant="outline"
            onClick={() => router.push("/api/auth/signout")}
          >
            Sign Out
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Academic Evaluation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Complete your academic performance evaluation.
            </p>
            <Button onClick={() => router.push("/academic-evaluation")}>
              Start Evaluation
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Manage your academic assets and resources.
            </p>
            <Button onClick={() => router.push("/academic-assets")}>
              View Assets
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Duties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Record and manage your academic responsibilities.
            </p>
            <Button onClick={() => router.push("/academic-duties")}>
              Manage Duties
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Intuitiveness</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Track your innovative teaching methods and initiatives.
            </p>
            <Button onClick={() => router.push("/academic-intutivenes")}>
              Record Initiatives
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Innovation Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Document your innovative teaching resources and materials.
            </p>
            <Button onClick={() => router.push("/academic-intutivenes-assets")}>
              View Resources
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              View and update your professional information.
            </p>
            <Button onClick={() => router.push("/teacher/profile")}>
              View Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
