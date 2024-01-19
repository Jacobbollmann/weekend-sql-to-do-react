
import AddTaskForm from '../TaskForm/TaskForm';

const FetchAndRender = ({taskList, refreshTask}) => {

  return (
    <div>
      <AddTaskForm taskRefresh={refreshTask}/>

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