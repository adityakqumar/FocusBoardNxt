import { Menu, Plus, Bell } from 'lucide-react';
import './Header.css';

function Header({ onMenuToggle, onNewTask }) {
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header__left">
        <button
          className="header__menu-btn"
          onClick={onMenuToggle}
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>
        <div className="header__info">
          <h1 className="header__title">Dashboard</h1>
          <p className="header__date">{dateStr}</p>
        </div>
      </div>

      <div className="header__right">
        <button className="header__icon-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="header__badge">3</span>
        </button>
        <button className="header__new-task" onClick={onNewTask}>
          <Plus size={18} />
          <span>New Task</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
