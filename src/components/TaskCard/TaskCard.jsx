import {
  Calendar,
  Edit3,
  Trash2,
  Tag,
} from 'lucide-react';
import { STATUSES } from '../../data/constants';
import './TaskCard.css';

function TaskCard({ task, onEdit, onDelete, onStatusChange }) {
  const statusClass = task.status.toLowerCase().replace(/\s+/g, '-');
  const priorityClass = task.priority.toLowerCase();

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isOverdue = () => {
    if (!task.dueDate || task.status === 'Completed') return false;
    return new Date(task.dueDate) < new Date();
  };

  return (
    <article className={`task-card task-card--${statusClass}`} role="listitem">
      <div className="task-card__header">
        <div className="task-card__badges">
          <span className={`task-card__status task-card__status--${statusClass}`}>
            {task.status}
          </span>
          <span className={`task-card__priority task-card__priority--${priorityClass}`}>
            {task.priority}
          </span>
        </div>
        <div className="task-card__actions">
          <button
            className="task-card__action"
            onClick={() => onEdit(task)}
            aria-label={`Edit task: ${task.title}`}
          >
            <Edit3 size={15} />
          </button>
          <button
            className="task-card__action task-card__action--delete"
            onClick={() => onDelete(task.id)}
            aria-label={`Delete task: ${task.title}`}
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      <h3 className="task-card__title">{task.title}</h3>

      {task.description && (
        <p className="task-card__description">{task.description}</p>
      )}

      <div className="task-card__footer">
        <div className="task-card__meta">
          {task.category && (
            <span className="task-card__category">
              <Tag size={13} />
              {task.category}
            </span>
          )}
          {task.dueDate && (
            <span className={`task-card__date ${isOverdue() ? 'task-card__date--overdue' : ''}`}>
              <Calendar size={13} />
              {formatDate(task.dueDate)}
            </span>
          )}
        </div>

        <div className="task-card__status-select">
          <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value)}
            className="task-card__dropdown"
            aria-label={`Change status for ${task.title}`}
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
