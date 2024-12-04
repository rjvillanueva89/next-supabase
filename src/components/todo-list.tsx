'use client'

import { getTodos } from '@/actions/get-todos'
import { Todo } from '@/database/schema/todos'
import { cn } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { Square, SquareCheck, Trash } from 'lucide-react'
import { useTransition } from 'react'

export const TodoList = () => {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  return (
    <div className="flex flex-col">
      {data?.map((item) => (
        <TodoItem key={item.id} data={item} />
      ))}
    </div>
  )
}

interface Props {
  data: Todo
}

export const TodoItem = ({ data }: Props) => {
  const { id, title, completed } = data
  const [isPending, startTransition] = useTransition()

  const handleComplete = () => {
    startTransition(async () => {
      // await updateTodo(id, { completed: !completed })
    })
  }

  const handleDelete = () => {
    startTransition(async () => {
      // await deleteTodo(id)
    })
  }

  return (
    <div
      className={cn(
        'flex items-center gap-4',
        isPending && 'opacity-25 pointer-events-none'
      )}
    >
      <button type="button" onClick={handleComplete}>
        {completed ? (
          <SquareCheck className="size-5" />
        ) : (
          <Square className="size-5" />
        )}
      </button>
      <p className={cn('grow', !completed || 'line-through')}>{title}</p>
      <button type="button" onClick={handleDelete}>
        <Trash className="size-5" />
      </button>
    </div>
  )
}
