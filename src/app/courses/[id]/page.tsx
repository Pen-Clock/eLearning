// src/app/courses/[id]/page.tsx
"use client"

import { useParams, useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { ChevronLeft, Lock } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import ElearningPlatform from "~/components/elearning-platform"
import DashboardHeader from "~/components/dashboard-header"
import { api } from "~/trpc/react"

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useUser()
  const utils = api.useUtils()

  const { data: course, isLoading } = api.course.getById.useQuery({
    id: params.id as string,
    userId: user?.id,
  })

  const enrollMutation = api.course.enroll.useMutation({
    onSuccess: () => {
      utils.course.getById.invalidate()
    },
  })

  const handleEnroll = async () => {
    if (!course) return
    try {
      await enrollMutation.mutateAsync({ courseId: course.id })
    } catch (error) {
      console.error("Enrollment failed:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="container mx-auto py-6 px-4 md:px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="h-[60vh] bg-muted rounded"></div>
          </div>
        </main>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="container mx-auto py-6 px-4 md:px-6">
          <p>Course not found</p>
        </main>
      </div>
    )
  }

  // If user is not enrolled and course is not free, show enrollment page
  if (!course.isEnrolled && !course.isFree) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <main className="container mx-auto py-6 px-4 md:px-6">
          <div className="mb-6">
            <Button
              variant="ghost"
              size="sm"
              className="mb-4"
              onClick={() => router.push("/")}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-muted rounded-full w-fit">
                  <Lock className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <p className="text-muted-foreground">{course.description}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-3xl font-bold">${course.price}</div>
                <p className="text-sm text-muted-foreground">
                  One-time purchase • Lifetime access
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Level:</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Modules:</span>
                    <span>{course.modules.length} modules</span>
                  </div>
                </div>

                {user ? (
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleEnroll}
                    disabled={enrollMutation.isPending}
                  >
                    {enrollMutation.isPending 
                      ? "Enrolling..." 
                      : `Enroll Now - $${course.price}`
                    }
                  </Button>
                ) : (
                  <Button size="lg" className="w-full" asChild>
                    <a href="/sign-in">Sign in to Enroll</a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto py-6 px-4 md:px-6">
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => router.push("/")}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
        <ElearningPlatform course={course} />
      </main>
    </div>
  )
}