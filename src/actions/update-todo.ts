'use server'

import { db } from '@/database/db'
import { Todo, todos } from '@/database/schema/todos'
import { eq } from 'drizzle-orm'

export const updateTodo = async (id: string, data: Partial<Todo>) => {
  const result = await db
    .update(todos)
    .set(data)
    .where(eq(todos.id, id))
    .returning()

  return result
}
