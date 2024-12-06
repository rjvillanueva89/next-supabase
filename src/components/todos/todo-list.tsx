'use client'

import { deleteTodo } from '@/actions/delete-todo'
import { getTodos } from '@/actions/get-todos'
import { updateTodo } from '@/actions/update-todo'
import { type Todo } from '@/database/schema/todos'
import { useQueryClient } from '@/hooks/use-query-client'
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
    <div className="flex flex-col divide-y divide-dashed">
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
  const { refetch } = useQueryClient()

  const handleComplete = () => {
    startTransition(async () => {
      await updateTodo(id, { completed: !completed })
      refetch(['todos'])
    })
  }

  const handleDelete = () => {
    startTransition(async () => {
      await deleteTodo(id)
      refetch(['todos'])
    })
  }

  return (
    <div
      className={cn(
        'flex items-center gap-4 py-2',
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
