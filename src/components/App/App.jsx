import { useState, useEffect } from 'react';
import './App.css';
import { fetchTasks } from './taskApi/taskApi';

function App () {
  const [taskList, setTaskList] = useState();

  const refreshTask = () => {
    const taskPromise = fetchTasks();

    taskPromise
      .then((response) => {
        console.log('DATA FROM GET:', response.data);
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
    <div className='App'>
      <h1>JUST DO IT</h1>
    </div>
  );

}

export default App
