"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function AcademicDutiesPage() {
  const router = useRouter();

  const steps = [
    {
      title: "Teaching Duties",
      description: "Record your teaching responsibilities",
      path: "/academic-duties/step1",
      dummyData: {
        courseName: "Python Programming",
        semester: "3rd",
        totalClasses: 45,
        completedClasses: 42,
        attendanceRate: "93%",
      },
    },
    {
      title: "Examination Duties",
      description: "Manage examination-related responsibilities",
      path: "/academic-duties/step2",
      dummyData: {
        examType: "End Semester",
        subject: "Python Programming",
        date: "2024-03-15",
        duration: "3 hours",
        students: 45,
      },
    },
    {
      title: "Department Duties",
      description: "Track department-level responsibilities",
      path: "/academic-duties/step3",
      dummyData: {
        dutyType: "Department Coordinator",
        academicYear: "2023-24",
        startDate: "2023-06-01",
        endDate: "2024-05-31",
        status: "Active",
      },
    },
    {
      title: "Research Supervision",
      description: "Document research supervision activities",
      path: "/academic-duties/step4",
      dummyData: {
        studentName: "John Doe",
        researchTopic: "Machine Learning Applications",
        startDate: "2023-09-01",
        status: "In Progress",
        meetings: 12,
      },
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Academic Duties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                Step {index + 1}: {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{step.description}</p>
              <div className="space-y-2 mb-4">
                {Object.entries(step.dummyData).map(([key, value]) => (
                  <div key={key} className="text-sm">
                    <span className="font-medium">{key}:</span> {value}
                  </div>
                ))}
              </div>
              <Button onClick={() => router.push(step.path)}>
                Manage {step.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
