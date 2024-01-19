import React from 'react';
import  { useState, useEffect } from 'react';
import { fetchTasks } from '../../taskApi/taskApi';
import FetchAndRender from '../RenderTaskList/RenderTaskList';
import Header from '../Header/Header';

import './App.css';

function App () {

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
    <>
      <Header />

      <FetchAndRender taskList={taskList} refreshTask={refreshTask}/>     
    </>
  );

}

export default App
