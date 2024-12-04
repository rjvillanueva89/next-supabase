'use server'

import { db } from '@/database/db'
import { InsertTodo, todos } from '@/database/schema/todos'

export const createTodo = async (data: InsertTodo) => {
  const response = await db.insert(todos).values(data).returning()
  console.log(response)
}
