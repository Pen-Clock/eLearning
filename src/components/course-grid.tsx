import Link from "next/link"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Progress } from "~/components/ui/progress"

interface CourseGridProps {
  courses: any[]
  viewType: "all" | "continue"
}

export default function CourseGrid({ courses, viewType }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Link href={`/courses/${course.id}`} key={course.id} className="block group">
          <Card className="h-full overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <img
                src={course.thumbnail || "/placeholder.svg"}
                alt={course.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline">{course.category}</Badge>
                <div className="text-sm text-muted-foreground">{course.duration}</div>
              </div>
              <CardTitle className="line-clamp-1 text-xl mt-2">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              {course.progress > 0 && (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" variant={viewType === "continue" ? "default" : "outline"}>
                {course.progress > 0 ? "Continue Learning" : "Start Course"}
              </Button>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
