"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function AcademicEvaluationPage() {
  const router = useRouter();

  const steps = [
    {
      title: "Teaching & Learning",
      description: "Record your teaching activities and student performance",
      path: "/academic-evaluation/step1",
      dummyData: {
        subjectName: "Python Programming",
        level: "PG",
        courseHead: "TH",
        noOfHrsWeek: 10,
        noOfClassesConducted: 10,
        result: 85,
        term: "II",
        year: "Previous",
      },
    },
    {
      title: "Research & Publications",
      description: "Document your research work and publications",
      path: "/academic-evaluation/step2",
      dummyData: {
        researchTitle: "Machine Learning Applications",
        publicationType: "Journal",
        publicationName: "International Journal of Computing",
        impactFactor: 2.5,
        year: "2023",
      },
    },
    {
      title: "Academic Duties",
      description: "List your academic responsibilities and duties",
      path: "/academic-evaluation/step3",
      dummyData: {
        dutyType: "Examination",
        description: "Question Paper Setting",
        duration: "2 weeks",
        academicYear: "2023-24",
      },
    },
    {
      title: "Innovation & Initiatives",
      description: "Share your innovative teaching methods",
      path: "/academic-evaluation/step4",
      dummyData: {
        initiativeName: "Project-Based Learning",
        description: "Implemented project-based learning in Python course",
        impact: "Improved student engagement by 40%",
        year: "2023",
      },
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Academic Evaluation</h1>
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
                Start {step.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
