import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import CourseGrid from "~/components/course-grid"
import DashboardHeader from "~/components/dashboard-header"
import { courseData } from "~/lib/course-data"

export const metadata: Metadata = {
  title: "Learning Dashboard",
  description: "Modern e-learning platform with interactive courses and quizzes",
}

export default function Dashboard() {
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
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold tracking-tight">Continue Learning</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/in-progress">View All</Link>
              </Button>
            </div>
            <CourseGrid courses={courseData.filter((course) => course.progress > 0).slice(0, 3)} viewType="continue" />
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold tracking-tight">All Courses</h2>
            </div>
            <CourseGrid courses={courseData} viewType="all" />
          </section>
        </div>
      </main>
    </div>
  )
}
