import React from 'react';
import { useSelector } from 'react-redux'
import Task from '../../components/Task/Task';

const Home = () => {
  const tasks = useSelector(state => state.tasks);
  
  return (
    <div className='flex flex-wrap'>
    {tasks.map((task) => (
        <Task {...task}/>
    ))}
    </div>
    
  );
};

export default Home;