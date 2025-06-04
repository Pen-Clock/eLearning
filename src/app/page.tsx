// src/app/page.tsx
"use client";

import type { Metadata } from "next"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { Button } from "~/components/ui/button"
import CourseGrid from "~/components/course-grid"
import DashboardHeader from "~/components/dashboard-header"
import { api } from "~/trpc/react"

export default function Dashboard() {
  const { user } = useUser();
  
  const { data: courses = [], isLoading } = api.course.getAll.useQuery({
    userId: user?.id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="container mx-auto py-6 px-4 md:px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-80 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  const enrolledCourses = courses.filter(course => course.isEnrolled && course.progress > 0);
  const freeCourses = courses.filter(course => course.isFree);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Learning Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Continue learning or explore new courses to enhance your skills
            </p>
          </div>
          <Button asChild>
            <Link href="/explore">Explore All Courses</Link>
          </Button>
        </div>

        <div className="space-y-8">
          {enrolledCourses.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold tracking-tight">Continue Learning</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/my-courses">View All</Link>
                </Button>
              </div>
              <CourseGrid courses={enrolledCourses.slice(0, 3)} viewType="continue" />
            </section>
          )}

          {freeCourses.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold tracking-tight">Free Courses</h2>
              </div>
              <CourseGrid courses={freeCourses} viewType="all" />
            </section>
          )}

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold tracking-tight">All Courses</h2>
            </div>
            <CourseGrid courses={courses} viewType="all" />
          </section>
        </div>
      </main>
    </div>
  );
}