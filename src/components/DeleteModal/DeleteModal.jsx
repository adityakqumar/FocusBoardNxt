import { AlertTriangle } from 'lucide-react';
import './DeleteModal.css';

function DeleteModal({ taskTitle, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="delete-modal"
        onClick={(e) => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
        aria-label="Delete confirmation"
      >
        <div className="delete-modal__icon">
          <AlertTriangle size={28} color="#ef4444" />
        </div>
        <h3 className="delete-modal__title">Delete Task</h3>
        <p className="delete-modal__text">
          Are you sure you want to delete <strong>"{taskTitle}"</strong>? This action cannot be undone.
        </p>
        <div className="delete-modal__actions">
          <button
            className="delete-modal__btn delete-modal__btn--cancel"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="delete-modal__btn delete-modal__btn--delete"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
