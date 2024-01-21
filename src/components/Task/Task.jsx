import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTask, taskStatus} from '../../features/taskSlice';
import { useNavigate } from 'react-router-dom';

function Task({id,title,description,dueDate,completed}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onDelete = (id)=>{
      console.log(id);
      dispatch(removeTask(id))
  }
  const handleCheckbox = (id) =>{
    completed = !completed;
    dispatch(taskStatus(id))
    console.log(completed)
  }
  const onEdit = (id) =>
  {
    navigate(`edit/${id}`)
  }
  return (
      <div className="max-w-md mx-10 bg-white p-6 my-4 rounded-lg shadow-md">
      
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

      
      <p className="text-gray-600 mb-4">{description}</p>

      
      <p className="text-sm text-gray-500 mb-4">{dueDate}</p>

      
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={completed}
          onChange={() => handleCheckbox(id)}
          className="mr-2 leading-tight"
        />
        <label htmlFor="completed" className="text-gray-700 font-semibold">
          Completed
        </label>
      </div>
      <div className='flex justify-between'>
      <button
        onClick={() => onEdit(id)}
        className="bg-blue-500 mx-5 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Edit Task
      </button>
      <button
        onClick={() => onDelete(id)}
        className="bg-blue-500 mx-5 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Delete
      </button>
      </div>
    
    </div>
  )
}

export default Task
