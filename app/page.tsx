'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle } from 'lucide-react';

import Task from "@/components/task"
import { useTasks } from "@/hooks/useTasks";



export default function IndexPage() {
  const {addTask, newTask ,handleAddNewTask ,tasks} = useTasks()

  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-3">
        <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Crie tarefas de maneira<br className="hidden sm:inline" />
          <span className="text-gradient bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">eficiente e flexível</span>.
        </h1>
        <p className="max-w-[700px] text-center text-lg text-muted-foreground">
          O <span className="font-bold">Tasker</span> é uma ferramenta de gerenciamento de tarefas que permite que você crie, edite e exclua tarefas de maneira fácil e rápida.
        </p>
      </div>
      <form onSubmit={addTask} className="mt-5 flex w-3/4 items-center gap-5">
        <Input type="text" placeholder="Crie um novo grupo de tarefas." className="text-center" onChange={handleAddNewTask} value={newTask}/>
        <Button className="gap-1" type="submit">
          Criar
          <PlusCircle size={15} />
        </Button>
      </form>
      <section className="flex w-3/4  flex-wrap justify-center gap-3">
        {
          tasks.map(task => {
            return (
              <Task title={task.title} key={task.id}/>
            )
          })
        }
      </section>
    </section>
  )
}
