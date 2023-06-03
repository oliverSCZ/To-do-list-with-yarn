import React from 'react'
import { TaskCard } from './TaskCard'

export const ListTasksCompleted = ({ tasks, setTasks }) => {

  const tasksCompleted = tasks.filter(task => task.status == true);
  console.log(tasksCompleted)
  return (
    <>
    <h2>Tareas Completadas</h2>
      {
        tasksCompleted.map((task) => (
          <TaskCard tasks={ tasks} setTasks={ setTasks } task={ task} key={ task.id }/>
        ))
      }
  </>
  )
}
