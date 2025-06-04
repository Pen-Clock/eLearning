// src/components/course-status.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { api } from "~/trpc/react";
import { Badge } from "~/components/ui/badge";
import { CheckCircle, Clock, Lock } from "lucide-react";

interface CourseStatusProps {
  courseId: string;
}

export default function CourseStatus({ courseId }: CourseStatusProps) {
  const { user } = useUser();
  
  const { data: enrollment } = api.course.checkUserEnrollment.useQuery({
    courseId,
    userId: user?.id,
  });

  if (!enrollment) return null;

  if (enrollment.isEnrolled) {
    return (
      <div className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-green-500" />
        <Badge className="bg-green-500">
          Enrolled {enrollment.enrollment?.enrolledAt && 
            `• ${new Date(enrollment.enrollment.enrolledAt).toLocaleDateString()}`
          }
        </Badge>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Lock className="h-4 w-4 text-muted-foreground" />
      <Badge variant="outline">Not Enrolled</Badge>
    </div>
  );
}