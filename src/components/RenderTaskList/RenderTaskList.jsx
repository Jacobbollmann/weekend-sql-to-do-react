import AddTaskForm from '../TaskForm/TaskForm';
import TaskItem from '../TaskItem/TaskItem';
import Grid from '@mui/material/Grid';


const FetchAndRender = ({taskList, refreshTask}) => {

  return (
    <div>
      <AddTaskForm taskRefresh={refreshTask}/>

    <Grid container spacing={2} className='task-container'>
      {taskList.map((taskData) => {
        return (
            <TaskItem key={taskData.id} taskData={taskData} refreshTask={refreshTask} />          
            );
          })}            
      </Grid>
    </div>
  ); 
};

export default FetchAndRender;