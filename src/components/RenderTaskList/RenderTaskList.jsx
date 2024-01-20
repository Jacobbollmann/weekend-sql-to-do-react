import AddTaskForm from '../TaskForm/TaskForm';
import TaskItem from '../TaskItem/TaskItem';

const FetchAndRender = ({taskList, refreshTask}) => {

  return (
    <div>
      <AddTaskForm taskRefresh={refreshTask}/>

      {taskList.map((taskData) => {
        return (

          <TaskItem key={taskData.id} taskData={taskData} refreshTask={refreshTask} />

        );
      })}
    </div>
  );
};

export default FetchAndRender;