"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HODPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (session?.user?.role !== "HOD") {
      router.push("/");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">HOD Dashboard</h1>
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
            <CardTitle>Teacher Evaluations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Review and approve teacher performance evaluations.
            </p>
            <Button onClick={() => router.push("/hod/evaluations")}>
              View Evaluations
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              View department statistics and performance metrics.
            </p>
            <Button onClick={() => router.push("/hod/department")}>
              View Overview
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Teacher Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Manage teacher profiles and department assignments.
            </p>
            <Button onClick={() => router.push("/hod/teachers")}>
              Manage Teachers
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Academic Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Generate and view department academic reports.
            </p>
            <Button onClick={() => router.push("/hod/get-report")}>
              View Reports
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Monitor department resources and assets.
            </p>
            <Button onClick={() => router.push("/hod/assets")}>
              Manage Assets
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department Duties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Assign and track department responsibilities.
            </p>
            <Button onClick={() => router.push("/hod/duties")}>
              Manage Duties
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
