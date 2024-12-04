'use server'

import { db } from '@/database/db'
import { todos } from '@/database/schema/todos'

export const getTodos = async () => {
  const result = await db.select().from(todos)
  return result
}
