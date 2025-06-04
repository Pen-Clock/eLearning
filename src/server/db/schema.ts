// src/server/db/schema.ts
import { sql } from "drizzle-orm";
import { index, sqliteTableCreator } from "drizzle-orm/sqlite-core";

export const createTable = sqliteTableCreator((name) => `e_learning_${name}`);

export const posts = createTable(
  "post",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    name: d.text({ length: 256 }),
    createdAt: d
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)],
);

// New tables for course access control
export const courses = createTable(
  "course",
  (d) => ({
    id: d.text("id").primaryKey(),
    title: d.text("title").notNull(),
    description: d.text("description").notNull(),
    price: d.real("price").notNull().default(0),
    isFree: d.integer("is_free", { mode: "boolean" }).notNull().default(false),
    createdAt: d
      .integer("created_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: d
      .integer("updated_at", { mode: "timestamp" })
      .$onUpdate(() => new Date()),
  })
);

export const userCourseEnrollments = createTable(
  "user_course_enrollment",
  (d) => ({
    id: d.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    userId: d.text("user_id").notNull(),
    courseId: d.text("course_id").notNull(),
    enrolledAt: d
      .integer("enrolled_at", { mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    price: d.real("price").notNull().default(0),
  }),
  (t) => [
    index("user_course_idx").on(t.userId, t.courseId),
    index("user_enrollments_idx").on(t.userId),
  ]
);