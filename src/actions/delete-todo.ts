'use server'

import { db } from '@/database/db'
import { todos } from '@/database/schema/todos'
import { eq } from 'drizzle-orm'

export const deleteTodo = async (id: string) => {
  const result = await db.delete(todos).where(eq(todos.id, id)).returning()
  return result
}
