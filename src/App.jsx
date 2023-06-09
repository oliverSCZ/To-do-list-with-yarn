import { useEffect, useState } from 'react'
import { MainLayout } from './layouts/MainLayout'
import { FormTask, ListTasksCompleted, ListTasksPending, TaskCard } from './components'

const App = () => {

  const [tasks, setTasks] = useState([])

  useEffect( () => {
    const getAllTasksFromLS = () => {
      const tasksLocalStorage = JSON.parse(localStorage.getItem('tasks')) ?? [];
      setTasks(tasksLocalStorage)
    }
    getAllTasksFromLS();
  }, [] );

  return (
   <MainLayout>
    { /* FORMULARIO PARA AGREGAR TAREAS */}
    <FormTask tasks={ tasks} setTasks = { setTasks } />
    { /* LISTADO DE TAREAS PENDIENTES */}
    <ListTasksPending setTasks = { setTasks } tasks={ tasks }/>
    { /* LISTADO DE TAREAS COMPLETADAS */}
    <ListTasksCompleted setTasks = { setTasks } tasks={ tasks }/>
   </MainLayout>
  )
}

export default App