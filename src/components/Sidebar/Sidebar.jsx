import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  X,
  Target,
} from 'lucide-react';
import './Sidebar.css';

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: CheckSquare, label: 'My Tasks' },
  { icon: Calendar, label: 'Calendar' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <div className="sidebar__logo-icon">
            <Target size={22} color="#fff" />
          </div>
          <span className="sidebar__logo-text">FocusBoard</span>
        </div>
        <button
          className="sidebar__close"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="sidebar__nav" aria-label="Main navigation">
        <ul className="sidebar__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <button
                className={`sidebar__link ${item.active ? 'sidebar__link--active' : ''}`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__user">
          <div className="sidebar__avatar">AK</div>
          <div className="sidebar__user-info">
            <span className="sidebar__user-name">Aditya Kumar</span>
            <span className="sidebar__user-email">aditya@example.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
