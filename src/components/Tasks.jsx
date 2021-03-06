import { Task } from '../components/Task';
import { useLocation } from 'react-router-dom';

// {`task ${task.reminder ? 'reminder' : ''}`}
const Tasks = ({ tasks, onDelete, onToggle }) => {
  console.log(useLocation());
  return (
    <div className="tasks">
      {tasks.length > 0 ? (
        tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>)
      ) : (
        <h3>'No task'</h3>
      )}
    </div>
  );
};

export default Tasks;
