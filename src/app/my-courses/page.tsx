// src/app/my-courses/page.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import DashboardHeader from "~/components/dashboard-header";
import { api } from "~/trpc/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { Calendar, DollarSign } from "lucide-react";

export default function MyCoursesPage() {
  const { user } = useUser();
  
  const { data: enrollments = [], isLoading } = api.course.getUserEnrollments.useQuery();
  const { data: allCourses = [] } = api.course.getAll.useQuery({
    userId: user?.id,
  });

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

  // Get course details for enrolled courses
  const enrolledCoursesWithDetails = enrollments.map(enrollment => {
    const course = allCourses.find(c => c.id === enrollment.courseId);
    return {
      ...enrollment,
      course,
    };
  }).filter(item => item.course);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
          <p className="text-muted-foreground mt-1">
            Courses you have enrolled in
          </p>
        </div>

        {enrolledCoursesWithDetails.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">No courses yet</h3>
              <p className="text-muted-foreground mb-4">
                You haven&apos;t enrolled in any courses yet. Start learning today!
              </p>
              <Button asChild>
                <Link href="/">Browse Courses</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCoursesWithDetails.map(({ course, enrolledAt, price }) => (
              <Card key={course!.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={course!.thumbnail}
                    alt={course!.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{course!.category}</Badge>
                    <Badge className="bg-green-500">Enrolled</Badge>
                  </div>
                  <CardTitle className="line-clamp-1">{course!.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course!.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Enrolled: {new Date(enrolledAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>Paid: ${price}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/courses/${course!.id}`}>
                      {course!.progress > 0 ? "Continue Learning" : "Start Course"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}