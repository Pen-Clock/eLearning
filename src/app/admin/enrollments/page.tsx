// src/app/admin/enrollments/page.tsx
"use client";

import DashboardHeader from "~/components/dashboard-header";
import { api } from "~/trpc/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Calendar, DollarSign, Users } from "lucide-react";

interface Enrollment {
  id: number;
  userId: string;
  courseId: string;
  enrolledAt: Date;
  price: number;
  courseTitle: string;
}

interface CourseEnrollmentData {
  courseTitle: string;
  enrollments: Enrollment[];
  totalRevenue: number;
}

export default function AdminEnrollmentsPage() {
  const { data: enrollments = [], isLoading } = api.course.getAllEnrollments.useQuery();

  // Group enrollments by course with proper typing
  const enrollmentsByCourse = enrollments.reduce((acc, enrollment) => {
    // Use nullish coalescing assignment operator
    acc[enrollment.courseId] ??= {
      courseTitle: enrollment.courseTitle,
      enrollments: [],
      totalRevenue: 0,
    };
    
    // Store reference to the course data to avoid undefined access
    const courseData = acc[enrollment.courseId];
    if (courseData) {
      courseData.enrollments.push(enrollment);
      courseData.totalRevenue += enrollment.price;
    }
    
    return acc;
  }, {} as Record<string, CourseEnrollmentData>);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="container mx-auto py-6 px-4 md:px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-64 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Course Enrollments</h1>
          <p className="text-muted-foreground mt-1">
            Track who has enrolled in each course
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Enrollments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enrollments.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses with Enrollments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Object.keys(enrollmentsByCourse).length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${enrollments.reduce((sum, e) => sum + e.price, 0).toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enrollments by Course */}
        <div className="space-y-6">
          {Object.entries(enrollmentsByCourse).map(([courseId, data]) => (
            <Card key={courseId}>
              <CardHeader>
                <CardTitle>{data.courseTitle}</CardTitle>
                <div className="flex gap-4">
                  <Badge variant="outline">
                    {data.enrollments.length} student{data.enrollments.length !== 1 ? 's' : ''}
                  </Badge>
                  <Badge variant="outline">
                    ${data.totalRevenue.toFixed(2)} revenue
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {data.enrollments.map((enrollment: Enrollment) => (
                    <div 
                      key={enrollment.id} 
                      className="flex items-center justify-between p-2 bg-muted rounded"
                    >
                      <div>
                        <span className="font-medium">User ID: {enrollment.userId}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Enrolled: {new Date(enrollment.enrolledAt).toLocaleDateString()}</span>
                        <span>Paid: ${enrollment.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {enrollments.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">No enrollments yet</h3>
              <p className="text-muted-foreground">
                When users start enrolling in courses, they&apos;ll appear here.
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}