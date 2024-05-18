import { relations, sql } from "drizzle-orm";
import { index, pgSchema, pgTableCreator, timestamp, varchar, uuid } from "drizzle-orm/pg-core";

const supabaseAuthUsers = pgSchema("auth").table("users", {
  id: uuid("id").primaryKey().notNull(),
});

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `${name}`);

export const users = createTable(
  "users",
  {
    id: uuid("id")
      .primaryKey()
      .notNull()
      .references(() => supabaseAuthUsers.id, { onDelete: "cascade" }),
    name: varchar("name", { length: 255 }),
  },
  (table) => ({
    nameIndex: index().on(table.name),
  }),
);

export const posts = createTable(
  "posts",
  {
    id: uuid("id")
      .primaryKey()
      .notNull()
      .$defaultFn(() => crypto.randomUUID()),
    authorId: uuid("authorId")
      .notNull()
      .references(() => supabaseAuthUsers.id), // TODO: we need to change this to public.users later
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("createdAt", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (table) => ({
    authorIdIndex: index().on(table.authorId),
    nameIndex: index().on(table.name),
  }),
);

export const usersRelations = relations(users, ({ many }) => ({
  post: many(posts),
}));
