import React from 'react'
import { TaskCard } from './TaskCard'

export const ListTasksCompleted = ({ tasks, setTasks }) => {

  const tasksCompleted = tasks.filter(task => task.status == true);
  const deleteTask = (id) => {
    const nuevoListado = tasks.filter( item => item.id !== id )
    localStorage.setItem('tasks', JSON.stringify(nuevoListado));
    setTasks(nuevoListado)
  }
  let titleTasksCompleted ="";
  if ( tasksCompleted.length > 0 ) {
    titleTasksCompleted = "Tareas Completadas";
  }
  return (
    <>
    <h2>{titleTasksCompleted}</h2>
    <div className='grid grid-cols-2 w-3/4 items-stretch gap-2'>
        {
          tasksCompleted.map((task) => (
            <>
              <TaskCard tasks={ tasks} setTasks={ setTasks } task={ task} key={ task.id }/>
              <button onClick={()=> deleteTask(task.id)} className='w-2/4 px-4 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded'>Borrar Tarea</button>
            </>
          ))
        }
    </div>
    </>
  )
}
