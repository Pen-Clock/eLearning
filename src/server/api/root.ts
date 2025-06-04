// src/server/api/root.ts
import { postRouter } from "~/server/api/routers/post";
import { courseRouter } from "./routers/course";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  course: courseRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);