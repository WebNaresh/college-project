"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function AcademicAssetsPage() {
  const router = useRouter();

  const steps = [
    {
      title: "Teaching Materials",
      description: "Document your teaching resources and materials",
      path: "/academic-assets/step1",
      dummyData: {
        materialName: "Python Programming Lab Manual",
        type: "Digital Resource",
        description: "Comprehensive lab manual with practical exercises",
        lastUpdated: "2024-02-15",
        usageCount: 150,
      },
    },
    {
      title: "Course Content",
      description: "Manage your course content and curriculum",
      path: "/academic-assets/step2",
      dummyData: {
        courseName: "Advanced Python Programming",
        semester: "3rd",
        totalModules: 8,
        totalStudents: 45,
        completionRate: "92%",
      },
    },
    {
      title: "Learning Resources",
      description: "Share additional learning materials",
      path: "/academic-assets/step3",
      dummyData: {
        resourceName: "Python Project Templates",
        category: "Project Resources",
        totalFiles: 12,
        totalSize: "256MB",
        downloads: 89,
      },
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Academic Assets</h1>
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
