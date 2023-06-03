import React, { useState } from 'react'

export const FormTask = ({ tasks, setTasks }) => {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  setTasks([...tasks, {title, description, status:false, id: new Date}]);
  setTitle('');
  setDescription('');
}


  return (
    <form onSubmit={ handleSubmit } className='mt-5'>
        <div className='grid'>
          <label>Titulo</label>
          <input
            type='text'
            className='border border-gray-400 rounded-xl px-5 py-2' 
            value={ title }
            onChange={ e => setTitle(e.target.value)}
          />
        </div>
        <div className='grid'>
          <label>Descripcion</label>
          <textarea 
          className='border border-gray-400 rounded-xl px-5 py-2'
          value={ description }
          onChange={ e => setDescription(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value='Agregar tarea'
          className='bg-indigo-600 text-white p-3 w-full mt-4 rounded-xl cursor-pointer hover:bg-indigo-800 transition-all'
        />
    </form>
  )
}
