import { deleteTask, updateTask } from "../../taskApi/taskApi";

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
    <div>
      <h3>{taskData.task}</h3>
      <p>{taskData.description}</p>
      <p>{taskData.completed ? 'You did it!' : ''}</p>
      <button onClick={() => {handleTaskDelete(taskData.id)}}>Delete</button>
      <button onClick={() => {handleTaskUpdate(taskData.id)}}>Completed</button>
    </div>
  );
}

export default TaskItem;