import { FaTimes } from 'react-icons/fa';

export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h3 style={{ color: task.reminder ? 'red' : 'blue' }}>
        {task.text}_{task.day}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)}></FaTimes>
      </h3>
    </div>
  );
};
