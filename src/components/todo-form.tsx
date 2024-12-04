'use client'

import { createTodo } from '@/actions/create-todo'
import { useQueryClient } from '@/hooks/use-query-client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const { refetch } = useQueryClient()

  const handleClick = async () => {
    await createTodo({ title: todo })
    setTodo('')
    refetch(['todos'])
  }

  return (
    <div className="flex gap-2 items-center">
      <Input
        placeholder="Add a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button disabled={!todo} onClick={handleClick}>
        Add
      </Button>
    </div>
  )
}
