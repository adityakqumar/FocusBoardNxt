import TaskCard from '../TaskCard/TaskCard';
import { ClipboardList } from 'lucide-react';
import './TaskList.css';

function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list__empty">
        <ClipboardList size={48} className="task-list__empty-icon" />
        <h3 className="task-list__empty-title">No tasks found</h3>
        <p className="task-list__empty-text">
          Try adjusting your search or filters, or create a new task.
        </p>
      </div>
    );
  }

  return (
    <div className="task-list" role="list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

export default TaskList;
