CREATE TYPE "public"."generation_status" AS ENUM('completed', 'processing', 'failed');--> statement-breakpoint
CREATE TYPE "public"."subject_type" AS ENUM('person', 'pet', 'other');--> statement-breakpoint
CREATE TABLE "generations" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"original_image" text NOT NULL,
	"plushie_image" text NOT NULL,
	"subject_type" "subject_type" NOT NULL,
	"status" "generation_status" DEFAULT 'processing' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "credits" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "generations" ADD CONSTRAINT "generations_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;