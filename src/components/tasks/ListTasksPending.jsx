import React from 'react'
import { TaskCard } from './TaskCard'

export const ListTasksPending = ({ tasks, setTasks }) => {

  const tasksPending = tasks.filter(task => task.status == false);
  let titleTareasPendientes = "Todavia no tienes tareas pendientes";
  if ( tasks.length > 0 ) {
    titleTareasPendientes = "Tareas Pendientes";
  }
  return (
    <>
      <h2>{titleTareasPendientes}</h2>
        {
          tasksPending.map((task) => (
            <TaskCard tasks={ tasks} setTasks={ setTasks } task={ task} key={ task.id} />
          ))
        }
    </>
  )
}
