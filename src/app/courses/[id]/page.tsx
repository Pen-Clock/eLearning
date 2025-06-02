"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Button } from "~/components/ui/button"
import ElearningPlatform from "~/components/elearning-platform"
import DashboardHeader from "~/components/dashboard-header"
import { courseData } from "~/lib/course-data"

interface Quiz {
  title: string
  questions: {
    id: number
    question: string
    options: string[]
    correctAnswer: number
  }[]
}

interface Module {
  id: number
  title: string
  videoUrl: string
  textContent: string
  quiz: Quiz
}

interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  duration: string
  level: string
  progress: number
  modules: Module[]
}

export default function CoursePage() {
  const params = useParams()
  const router = useRouter()
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const id = params.id as string
      const foundCourse = courseData.find((c) => c.id === id)
      if (foundCourse) {
        setCourse(foundCourse)
      } else {
        router.push("/")
      }
      setLoading(false)
    }
  }, [params.id, router])

  if (loading) {
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

  if (!course) return null

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
