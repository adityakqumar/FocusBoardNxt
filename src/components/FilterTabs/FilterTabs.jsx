import { PRIORITIES } from '../../data/constants';
import './FilterTabs.css';

const STATUS_TABS = ['All', 'To Do', 'In Progress', 'Completed'];

function FilterTabs({ statusFilter, onStatusChange, priorityFilter, onPriorityChange }) {
  return (
    <div className="filter-tabs">
      <div className="filter-tabs__status" role="tablist" aria-label="Filter by status">
        {STATUS_TABS.map((status) => (
          <button
            key={status}
            role="tab"
            aria-selected={statusFilter === status}
            className={`filter-tabs__tab ${statusFilter === status ? 'filter-tabs__tab--active' : ''}`}
            onClick={() => onStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="filter-tabs__priority">
        <label htmlFor="priority-filter" className="filter-tabs__label">
          Priority:
        </label>
        <select
          id="priority-filter"
          className="filter-tabs__select"
          value={priorityFilter}
          onChange={(e) => onPriorityChange(e.target.value)}
        >
          <option value="All">All</option>
          {PRIORITIES.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterTabs;
