import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {

  return (
    < div className='h-screen bg-indigo-100'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
