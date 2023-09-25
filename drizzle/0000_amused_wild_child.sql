CREATE TABLE IF NOT EXISTS "progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer,
	"headline" varchar(255),
	"description" text,
	"labour_cost" integer,
	"material_cost" integer,
	"created_date" date,
	"progress_image" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"title" text,
	"description" text,
	"is_public" boolean DEFAULT true,
	"address" text,
	"city" varchar(255),
	"postal_code" varchar,
	"state" varchar,
	"country" varchar,
	"created_at" timestamp (6) with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(255),
	"email" varchar(255),
	"password_hash" text,
	"first_name" varchar,
	"last_name" varchar,
	"bio" text,
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"profile_image" text,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_to_project" (
	"user_id" integer NOT NULL,
	"project_id" integer NOT NULL,
	CONSTRAINT users_to_project_user_id_project_id PRIMARY KEY("user_id","project_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_project" ADD CONSTRAINT "users_to_project_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users_to_project" ADD CONSTRAINT "users_to_project_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
