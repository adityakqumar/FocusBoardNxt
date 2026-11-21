import { Search, X } from 'lucide-react';
import './SearchBar.css';

function SearchBar({ query, onChange }) {
  return (
    <div className="search-bar">
      <Search size={18} className="search-bar__icon" />
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search tasks by title..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search tasks"
      />
      {query && (
        <button
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
