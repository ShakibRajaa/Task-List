import React from 'react'
import { useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import TaskForm from '../TaskForm/TaskForm';
function Edit() {
  const {taskid} = useParams()
  const task = useSelector ((state) => state.tasks.find((t) => t.id == taskid)) ||{};
  console.log(task)
  return (
    <div>
      <TaskForm task={task}/>
    </div>
  )
}

export default Edit
