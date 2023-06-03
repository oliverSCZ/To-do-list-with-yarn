import React from 'react'

export const TaskCard = ({ tasks, task, setTasks }) => {

const handleChange = () => {
  task.status = !task.status
  const newArrayTasks = tasks.filter(taskItem => taskItem.id != task.id);
  setTasks([...newArrayTasks, task])
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
}

  return (
    <form
      className='w-full md:w-1/2 py-3 px-5 mb-5 rounded-xl flex gap-3 hover:scale-105 hover:shadow-lg transition-all'
    >
      <input
        type='checkbox'
        value={1}
        checked={ task.status }
        onChange={ handleChange }
      />
     <div>
      <h3>{task.title}</h3>
      <p className='font-light'>{task.description}</p>
     </div>
    </form>
  )
}
