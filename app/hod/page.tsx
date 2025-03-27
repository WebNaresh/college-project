"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  CheckCircle2,
  ClipboardList,
  FileText,
  Users,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function HODPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const cards = [
    {
      title: "Applications",
      description: "Review and manage teacher applications",
      icon: <FileText className="h-8 w-8" />,
      link: "/hod",
      color: "bg-blue-500",
    },
    {
      title: "Reports",
      description: "View and generate department reports",
      icon: <BarChart className="h-8 w-8" />,
      link: "/report",
      color: "bg-green-500",
    },

    {
      title: "Department Overview",
      description: "View department statistics and status",
      icon: <Users className="h-8 w-8" />,
      link: "/department-overview",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Welcome, {session?.user?.name}
          </h1>
          <p className="text-muted-foreground mt-2">
            Department Head Dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => router.push(card.link)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">
                  {card.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${card.color} text-white`}>
                  {card.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-2"
              onClick={() => router.push("/hod")}
            >
              <ClipboardList className="h-6 w-6" />
              <span>Review Applications</span>
            </Button>
            <Button
              variant="outline"
              className="h-24 flex flex-col items-center justify-center gap-2"
              onClick={() => router.push("/report")}
            >
              <CheckCircle2 className="h-6 w-6" />
              <span>Generate Reports</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
