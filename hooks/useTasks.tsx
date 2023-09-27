import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid';

type TarefasType = {
  id: string
  title: string
}

export function useTasks(){
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<TarefasType[]>([])

  useEffect(() => {
    const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks') as string) : [{
      id: '1',
      title: 'Bem-vindo'
    }]
    setTasks(taskList)
  }, [])

  function handleAddNewTask(event: ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value)
  }

  function addTask(event:  ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    const id = uuidv4()

    setTasks((tasks) => {

      return [{
        id,
        title: newTask
      }, ...tasks]
    })

    const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks') as string) : []
    localStorage.setItem('tasks', JSON.stringify([...taskList, {
      id,
      title: newTask
    }]))
    setNewTask('')
  }

  return {
    newTask,
    tasks,
    handleAddNewTask,
    addTask
  }
}
