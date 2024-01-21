import { useState } from 'react';
import { postTask } from '../../taskApi/taskApi';

function AddTaskForm(props) {
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  //Handle New Tasks
  const handleNewTask = (event) => {
    setNameValue(event.target.value);
  };

  const handleNewTaskDescription = (event) => {
    setDescriptionValue(event.target.value);
  };

  //Handle Form Submit
  const submitNewtask = (event) => {
    event.preventDefault();
    console.log('Submit Values:', nameValue);
    //Post New Task
    postTask({
      task: nameValue,
      description: descriptionValue,
    })  
    .then((response) => {
      //After successful post
      props.taskRefresh();
      
      //clear inputs
      setNameValue('');
      setDescriptionValue('');
    })
    .catch((error) => {
      console.error('ERROR IN POST:', error);
      alert('Something Went Wrong! Check console.');
    })
  };
    
  return (
    <div className='form'>
      <form onSubmit={submitNewtask}>
        <label>
          <span>Task: </span>
          <input id='name' onChange={handleNewTask} value={nameValue}/>
        </label>
        <label> 
          <span>Description: </span>
          <input id='description' onChange={handleNewTaskDescription} value={descriptionValue}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddTaskForm;