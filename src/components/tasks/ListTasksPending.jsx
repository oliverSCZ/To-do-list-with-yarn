import React from 'react'
import { TaskCard } from './TaskCard'

export const ListTasksPending = ({ tasks, setTasks }) => {

  const tasksPending = tasks.filter(task => task.status == false);

  return (
    <>
      <h2>Tareas Pendientes</h2>
        {
          tasksPending.map((task) => (
            <TaskCard tasks={ tasks} setTasks={ setTasks } task={ task} key={ task.id} />
          ))
        }
    </>
  )
}
