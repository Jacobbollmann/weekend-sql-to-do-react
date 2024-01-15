import  { useState, useEffect } from 'react';
import { fetchTasks } from '../App/taskApi/taskApi';

const FetchAndRender = () => {

  const [taskList, setTaskList] = useState([]);
  
  const refreshTask = () => {
    const taskPromise = fetchTasks();
    
    taskPromise
    .then((response) => {
      console.log('DATA FROM GET:', response.data);
      setTaskList(response.data);
    })
    .catch((error) => {
      console.error('SOMETING WRONG IN GET:', error);
      alert('SOMETHING WENT WRONG. CHECK CONSOLE');
    });
  };
  
  useEffect(() => {
    console.log('Initial Page Load');
    refreshTask();
  }, []);
  
  return (
    <div>
      {taskList.map((taskData) => {
        return (

          <div key={taskData.id}>
          <h3>{taskData.task}</h3>
          <p>{taskData.description}</p>
          </div>

        );
      })}
    </div>
  );
};

export default FetchAndRender;