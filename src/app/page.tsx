import { TodoForm } from '@/components/todos/todo-form'
import { TodoList } from '@/components/todos/todo-list'

export default async function HomePage() {
  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <main className="w-96 flex flex-col gap-4 bg-gray-50 p-8 rounded-sm">
        <h1 className="text-2xl">My Todos</h1>
        <TodoForm />
        <TodoList />
      </main>
    </div>
  )
}
