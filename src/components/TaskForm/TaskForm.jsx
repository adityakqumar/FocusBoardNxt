import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CATEGORIES, STATUSES, PRIORITIES } from '../../data/constants';
import './TaskForm.css';

function TaskForm({ task, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: CATEGORIES[0],
    status: STATUSES[0],
    priority: PRIORITIES[1],
    dueDate: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        category: task.category || CATEGORIES[0],
        status: task.status || STATUSES[0],
        priority: task.priority || PRIORITIES[1],
        dueDate: task.dueDate || '',
      });
    }
  }, [task]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Task title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const submitData = {
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
    };

    if (task) {
      submitData.id = task.id;
      submitData.createdAt = task.createdAt;
    }

    onSubmit(submitData);
  };

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="task-form"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={task ? 'Edit Task' : 'Create New Task'}
      >
        <div className="task-form__header">
          <h2 className="task-form__heading">
            {task ? 'Edit Task' : 'Create New Task'}
          </h2>
          <button
            className="task-form__close"
            onClick={onClose}
            aria-label="Close form"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="task-form__body">
            {/* Title */}
            <div className={`task-form__field ${errors.title ? 'task-form__field--error' : ''}`}>
              <label htmlFor="task-title" className="task-form__label">
                Title <span className="task-form__required">*</span>
              </label>
              <input
                id="task-title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter task title"
                className="task-form__input"
                autoFocus
              />
              {errors.title && (
                <span className="task-form__error">{errors.title}</span>
              )}
            </div>

            {/* Description */}
            <div className="task-form__field">
              <label htmlFor="task-desc" className="task-form__label">
                Description
              </label>
              <textarea
                id="task-desc"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter task description"
                className="task-form__textarea"
                rows={3}
              />
            </div>

            {/* Two column row */}
            <div className="task-form__row">
              {/* Category */}
              <div className="task-form__field">
                <label htmlFor="task-category" className="task-form__label">
                  Category
                </label>
                <select
                  id="task-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="task-form__select"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div className="task-form__field">
                <label htmlFor="task-status" className="task-form__label">
                  Status
                </label>
                <select
                  id="task-status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="task-form__select"
                >
                  {STATUSES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Two column row */}
            <div className="task-form__row">
              {/* Priority */}
              <div className="task-form__field">
                <label htmlFor="task-priority" className="task-form__label">
                  Priority
                </label>
                <select
                  id="task-priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="task-form__select"
                >
                  {PRIORITIES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Due Date */}
              <div className="task-form__field">
                <label htmlFor="task-due" className="task-form__label">
                  Due Date
                </label>
                <input
                  id="task-due"
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="task-form__input"
                />
              </div>
            </div>
          </div>

          <div className="task-form__actions">
            <button
              type="button"
              className="task-form__btn task-form__btn--cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="task-form__btn task-form__btn--submit"
            >
              {task ? 'Update Task' : 'Create Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
