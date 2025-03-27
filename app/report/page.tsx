"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PerformanceData {
  teacherName: string;
  department: string;
  designation: string;
  averageResult: number;
  classEngagement: number;
  studentFeedback: number;
  peerFeedback: number;
  publications: number;
  researchProjects: number;
  totalScore: number;
  id: string;
}

export default function ReportPage() {
  const { data: session } = useSession();
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const response = await fetch("/api/report/performance");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setPerformanceData(data);
      } catch (error) {
        console.error("Error fetching performance data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Performance Evaluation Report</h1>
          <p className="text-muted-foreground">
            Current Year Performance Overview
          </p>
        </div>
        <Button variant="outline">Export Report</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Teachers</CardTitle>
            <CardDescription>Active Faculty Members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{performanceData.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Score</CardTitle>
            <CardDescription>Overall Performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {Math.round(
                performanceData.reduce(
                  (acc, curr) => acc + curr.totalScore,
                  0
                ) / performanceData.length
              )}
              %
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Performer</CardTitle>
            <CardDescription>Highest Score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {Math.max(...performanceData.map((p) => p.totalScore))}%
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Research Projects</CardTitle>
            <CardDescription>Total Active Projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {performanceData.reduce(
                (acc, curr) => acc + curr.researchProjects,
                0
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Performance Analysis</CardTitle>
          <CardDescription>Individual Teacher Performance</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Teacher</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Designation</TableHead>
                  <TableHead>Average Result</TableHead>
                  <TableHead>Class Engagement</TableHead>
                  <TableHead>Student Feedback</TableHead>
                  <TableHead>Peer Feedback</TableHead>
                  <TableHead>Publications</TableHead>
                  <TableHead>Research Projects</TableHead>
                  <TableHead>Total Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {performanceData.map((teacher, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <Link
                        href={`/report/${teacher.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {teacher.teacherName}
                      </Link>
                    </TableCell>
                    <TableCell>{teacher.department}</TableCell>
                    <TableCell>{teacher.designation}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={teacher.averageResult}
                          className="w-[100px]"
                        />
                        <span>{teacher.averageResult}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={teacher.classEngagement}
                          className="w-[100px]"
                        />
                        <span>{teacher.classEngagement}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={teacher.studentFeedback}
                          className="w-[100px]"
                        />
                        <span>{teacher.studentFeedback}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={teacher.peerFeedback}
                          className="w-[100px]"
                        />
                        <span>{teacher.peerFeedback}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{teacher.publications}</TableCell>
                    <TableCell>{teacher.researchProjects}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          teacher.totalScore >= 80 ? "default" : "secondary"
                        }
                      >
                        {teacher.totalScore}%
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
