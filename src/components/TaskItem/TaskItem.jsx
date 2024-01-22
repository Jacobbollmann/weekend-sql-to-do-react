import { deleteTask, updateTask } from "../../taskApi/taskApi";
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';


function TaskItem({taskData, refreshTask}) {
  const handleTaskDelete = (id) => {
    console.log('Delete:', id);
    deleteTask(id)
      .then((response) => {
        refreshTask();
      })
      .catch((error) => {
        console.error(error);
        alert('SOMETHING WENT WRONG IN DELETE');
      })
  }

  const handleTaskUpdate = (id) => {
    console.log('Update:', id);
    updateTask(id)
      .then((response) => {
        refreshTask();
      })
      .catch((error) => {
        console.error(error);
        alert('SOMETHING WENT WRONG IN UPDATE');
      });
  }   
  
  return (           
    <Grid 
      item 
      xs={12} sm={6} md={4}
      >
      <Box 
        border='1px solid black'
        backgroundColor={!taskData.completed ? 'white' : 'rgba(0, 255, 0, 0.2)'}
        padding={2}
      >
        <h3 className={taskData.completed ? 'completed' : 'normal'}>{taskData.task}</h3>
        <p className={taskData.completed ? 'completed' : 'normal'}>{taskData.description}</p>
        <p>{taskData.completed ? 'You did it!' : ''}</p>
        <button className="task-buttons" onClick={() => {handleTaskUpdate(taskData.id)}}>Completed</button>
        <button className="task-buttons delete" onClick={() => {handleTaskDelete(taskData.id)}}>Delete</button>
      </Box>
    </Grid>       
  );
}

export default TaskItem;