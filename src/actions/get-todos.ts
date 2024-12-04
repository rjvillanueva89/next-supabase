'use server'

import { db } from '@/database/db'
import { todos } from '@/database/schema/todos'
import { desc } from 'drizzle-orm'

export const getTodos = async () => {
  const result = await db.select().from(todos).orderBy(desc(todos.completed))
  return result
}
