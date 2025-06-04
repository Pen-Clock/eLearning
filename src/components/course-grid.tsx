// src/components/course-grid.tsx
"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Lock, DollarSign } from "lucide-react";
import { api } from "~/trpc/react";
import type { Course } from "~/types/course";

interface CourseGridProps {
  courses: Course[];
  viewType: "all" | "continue";
}

export default function CourseGrid({ courses, viewType }: CourseGridProps) {
  const { user } = useUser();
  const utils = api.useUtils();
  
  const enrollMutation = api.course.enroll.useMutation({
    onSuccess: () => {
      utils.course.getAll.invalidate();
    },
  });

  const handleEnroll = async (courseId: string) => {
    try {
      await enrollMutation.mutateAsync({ courseId });
    } catch (error) {
      console.error("Enrollment failed:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="h-full overflow-hidden transition-all hover:shadow-md">
          <div className="aspect-video w-full overflow-hidden bg-muted relative">
            <img
              src={course.thumbnail ?? "/placeholder.svg"}
              alt={course.title}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            {!course.isEnrolled && !course.isFree && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
            )}
          </div>
          <CardHeader className="p-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline">{course.category}</Badge>
              <div className="text-sm text-muted-foreground">{course.duration}</div>
            </div>
            <CardTitle className="line-clamp-1 text-xl mt-2">{course.title}</CardTitle>
            <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            
            {/* Price Display */}
            <div className="flex items-center gap-2">
              {course.isFree ? (
                <Badge className="bg-green-500">Free</Badge>
              ) : (
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  <span className="font-semibold">${course.price}</span>
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="p-4 pt-0">
            {course.progress > 0 && course.isEnrolled && (
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
            {course.isEnrolled || course.isFree ? (
              <Link href={`/courses/${course.id}`} className="w-full">
                <Button className="w-full" variant={viewType === "continue" ? "default" : "outline"}>
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </Button>
              </Link>
            ) : (
              <Button
                className="w-full"
                onClick={() => handleEnroll(course.id)}
                disabled={enrollMutation.isPending || !user}
              >
                {enrollMutation.isPending 
                  ? "Enrolling..." 
                  : user 
                    ? `Enroll - $${course.price}` 
                    : "Sign in to Enroll"
                }
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}