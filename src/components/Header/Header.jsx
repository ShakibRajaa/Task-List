import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  return (
    <div className='w-full h-15 bg-teal-500 p-3 px-5 flex justify-between items-center'>
      <Link to="/">
      <h1 className="font-semibold text-xl tracking-tight text-white">Home</h1>
      </Link>
      <Link to='form'>
      <button
      className='inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white'
      >Create Task</button>
      </Link>
    </div>
  )
}

export default Header
