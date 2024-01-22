import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Task from '../../components/Task/Task';
import { useEffect } from 'react';

const Home = () => {
  let tasks = useSelector(state => state.tasks)

  return (
    <div className='flex flex-wrap justify-center'>
    {tasks.map((task) => (
        <Task {...task}/>
    ))}
    </div>
    
  );
};

export default Home;