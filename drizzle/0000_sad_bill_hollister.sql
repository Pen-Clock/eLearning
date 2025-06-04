CREATE TABLE `e_learning_course` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`price` real DEFAULT 0 NOT NULL,
	`is_free` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `e_learning_post` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256),
	`createdAt` integer DEFAULT (unixepoch()) NOT NULL,
	`updatedAt` integer
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `e_learning_post` (`name`);--> statement-breakpoint
CREATE TABLE `e_learning_user_course_enrollment` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`course_id` text NOT NULL,
	`enrolled_at` integer DEFAULT (unixepoch()) NOT NULL,
	`price` real DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE INDEX `user_course_idx` ON `e_learning_user_course_enrollment` (`user_id`,`course_id`);--> statement-breakpoint
CREATE INDEX `user_enrollments_idx` ON `e_learning_user_course_enrollment` (`user_id`);