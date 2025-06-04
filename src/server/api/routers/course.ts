// src/server/api/routers/course.ts
import { z } from "zod";
import { eq, and } from "drizzle-orm";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";
import { userCourseEnrollments } from "~/server/db/schema";
import { courseData } from "~/lib/course-data";

export const courseRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ userId: z.string().optional() }))
    .query(async ({ ctx, input }) => {
      // If user is provided, check their enrollments
      let userEnrollments: string[] = [];
      
      if (input.userId) {
        try {
          const enrollments = await ctx.db
            .select({ courseId: userCourseEnrollments.courseId })
            .from(userCourseEnrollments)
            .where(eq(userCourseEnrollments.userId, input.userId));
          
          userEnrollments = enrollments.map(e => e.courseId);
        } catch (error) {
          // If table doesn't exist or query fails, continue without enrollments
          console.error("Failed to fetch user enrollments:", error);
          userEnrollments = [];
        }
      }

      // Add enrollment status to course data
      return courseData.map(course => ({
        ...course,
        isEnrolled: userEnrollments.includes(course.id) || course.isFree,
      }));
    }),

  getById: publicProcedure
    .input(z.object({ 
      id: z.string(),
      userId: z.string().optional()
    }))
    .query(async ({ ctx, input }) => {
      const course = courseData.find(c => c.id === input.id);
      if (!course) {
        throw new Error("Course not found");
      }

      let isEnrolled = course.isFree;

      if (input.userId && !course.isFree) {
        try {
          const enrollment = await ctx.db
            .select()
            .from(userCourseEnrollments)
            .where(
              and(
                eq(userCourseEnrollments.userId, input.userId),
                eq(userCourseEnrollments.courseId, input.id)
              )
            )
            .limit(1);
          
          isEnrolled = enrollment.length > 0;
        } catch (error) {
          // If table doesn't exist, treat as not enrolled
          console.error("Failed to check enrollment:", error);
          isEnrolled = course.isFree;
        }
      }

      return {
        ...course,
        isEnrolled,
      };
    }),

  enroll: protectedProcedure
    .input(z.object({ courseId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const course = courseData.find(c => c.id === input.courseId);
      if (!course) {
        throw new Error("Course not found");
      }

      try {
        // Check if already enrolled
        const existingEnrollment = await ctx.db
          .select()
          .from(userCourseEnrollments)
          .where(
            and(
              eq(userCourseEnrollments.userId, ctx.auth.userId),
              eq(userCourseEnrollments.courseId, input.courseId)
            )
          )
          .limit(1);

        if (existingEnrollment.length > 0) {
          throw new Error("Already enrolled in this course");
        }

        // Create enrollment
        await ctx.db.insert(userCourseEnrollments).values({
          userId: ctx.auth.userId,
          courseId: input.courseId,
          price: course.price,
        });

        return { success: true };
      } catch (error) {
        console.error("Enrollment failed:", error);
        throw new Error("Failed to enroll in course. Please try again.");
      }
    }),

  getUserEnrollments: protectedProcedure
    .query(async ({ ctx }) => {
      try {
        const enrollments = await ctx.db
          .select()
          .from(userCourseEnrollments)
          .where(eq(userCourseEnrollments.userId, ctx.auth.userId));

        return enrollments;
      } catch (error) {
        console.error("Failed to fetch user enrollments:", error);
        return [];
      }
    }),

  // Get all enrollments (admin view)
  getAllEnrollments: protectedProcedure
    .query(async ({ ctx }) => {
      try {
        const enrollments = await ctx.db
          .select({
            id: userCourseEnrollments.id,
            userId: userCourseEnrollments.userId,
            courseId: userCourseEnrollments.courseId,
            enrolledAt: userCourseEnrollments.enrolledAt,
            price: userCourseEnrollments.price,
          })
          .from(userCourseEnrollments)
          .orderBy(userCourseEnrollments.enrolledAt);

        // Add course titles to the enrollments
        return enrollments.map(enrollment => {
          const course = courseData.find(c => c.id === enrollment.courseId);
          return {
            ...enrollment,
            courseTitle: course?.title ?? 'Unknown Course',
          };
        });
      } catch (error) {
        console.error("Failed to fetch all enrollments:", error);
        return [];
      }
    }),

  // Check if specific user is enrolled in specific course
  checkUserEnrollment: protectedProcedure
    .input(z.object({ 
      courseId: z.string(),
      userId: z.string().optional() 
    }))
    .query(async ({ ctx, input }) => {
      const userId = input.userId ?? ctx.auth.userId;
      
      try {
        const enrollment = await ctx.db
          .select()
          .from(userCourseEnrollments)
          .where(
            and(
              eq(userCourseEnrollments.userId, userId),
              eq(userCourseEnrollments.courseId, input.courseId)
            )
          )
          .limit(1);

        return {
          isEnrolled: enrollment.length > 0,
          enrollment: enrollment[0] ?? null,
        };
      } catch (error) {
        console.error("Failed to check user enrollment:", error);
        return {
          isEnrolled: false,
          enrollment: null,
        };
      }
    }),
});