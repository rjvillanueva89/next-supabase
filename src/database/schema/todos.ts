import { InferInsertModel, InferSelectModel, sql } from 'drizzle-orm'
import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: uuid('id')
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  title: text('title').notNull(),
  completed: boolean('completed').default(false).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' })
    .default(sql`null`)
    .$onUpdate(() => sql`now()`),
})

export type Todo = InferSelectModel<typeof todos>
export type InsertTodo = InferInsertModel<typeof todos>
