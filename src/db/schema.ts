import { relations } from 'drizzle-orm';
import {
  serial,
  pgTable,
  varchar,
  text,
  date,
  timestamp,
  integer,
  boolean,
  primaryKey,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }).unique(),
  email: varchar('email', { length: 255 }).unique(),
  passwordHash: text('password_hash'),
  firstName: varchar('first_name'),
  lastName: varchar('last_name'),
  bio: text('bio'),
  createdAt: timestamp('created_at', {
    mode: 'date',
    precision: 6,
    withTimezone: true,
  }).defaultNow(),
  profileImage: text('profile_image'),
});

export const usersRelation = relations(users, ({ many }) => ({
  projects: many(projectTable),
}));

export const projectTable = pgTable('projects', {
  id: serial('id').primaryKey(),
  userId: integer('user_id'),
  title: text('title'),
  description: text('description'),
  isPublic: boolean('is_public').default(true),
  address: text('address'),
  city: varchar('city', { length: 255 }),
  postalCode: varchar('postal_code'),
  state: varchar('state'),
  country: varchar('country'),
  createdAt: timestamp('created_at', {
    mode: 'date',
    precision: 6,
    withTimezone: true,
  }).defaultNow(),
});

export const projectRelation = relations(projectTable, ({ many }) => ({
  users: many(users),
}));

export const usersToGroups = pgTable(
  'users_to_project',
  {
    userId: integer('user_id')
      .notNull()
      .references(() => users.id),
    projectId: integer('project_id')
      .notNull()
      .references(() => projectTable.id),
  },
  (t) => ({
    pk: primaryKey(t.userId, t.projectId),
  })
);

export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
  group: one(projectTable, {
    fields: [usersToGroups.projectId],
    references: [projectTable.id],
  }),
  user: one(users, {
    fields: [usersToGroups.userId],
    references: [users.id],
  }),
}));

export const progressTable = pgTable('progress', {
  id: serial('id').primaryKey(),
  projectId: integer('project_id'),
  headline: varchar('headline', { length: 255 }),
  description: text('description'),
  labourCost: integer('labour_cost'),
  materialCost: integer('material_cost'),
  createdDate: date('created_date'),
  progressImage: integer('progress_image'),
});

export const projectProgressRelation = relations(projectTable, ({ many }) => ({
  progress: many(progressTable),
}));
