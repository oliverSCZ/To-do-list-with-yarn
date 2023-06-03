import React from 'react'

export const MainLayout = ({children}) => {
  return (
    <main className='min-h-screen p-5 md:p-8 flex flex-col justify-center items-center'>
      <h1 className='text-4xl'>Mi listado de tareas</h1>
      {children}
    </main>
  )
}
