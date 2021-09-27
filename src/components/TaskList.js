import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  //Tambien podria usar useContext colocando const context = useContext(GlobalContext)
  //console.log(context);

  return (
    <div className='flex justify-center' >
      {tasks.map((task) => (
        <div className='bg- '>
          <h1>{task.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
