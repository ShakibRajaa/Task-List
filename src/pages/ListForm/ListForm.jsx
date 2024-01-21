import React, { useState } from 'react';
import { addTask } from '../../features/taskSlice';
import {useDispatch } from 'react-redux';
import Home from '../Home/Home';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description, dueDate, completed }))
    console.log('Task submitted:', { title, description, dueDate, completed });
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 my-10 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-gray-700 font-bold mb-2">
            Due Date:
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min={today}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/*
        <div className="mb-4">
          <input
            type="checkbox"
            id="completed"
            name="completed"
            checked={completed}
            onChange={() => setCompleted(!completed)}
            className="mr-2 leading-tight"
          />
          <label htmlFor="completed" className="text-gray-700 font-bold">
            Completed
          </label>
        </div>
       */} 
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
    
  );
};

export default TaskForm;