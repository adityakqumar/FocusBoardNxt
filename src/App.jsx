import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import StatCard from './components/StatCard/StatCard';
import FocusNotes from './components/FocusNotes/FocusNotes';
import SearchBar from './components/SearchBar/SearchBar';
import FilterTabs from './components/FilterTabs/FilterTabs';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import DeleteModal from './components/DeleteModal/DeleteModal';
import SAMPLE_TASKS from './data/sampleTasks';
import {
  ListTodo,
  Clock,
  Loader,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('focusboard-tasks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return SAMPLE_TASKS;
      }
    }
    return SAMPLE_TASKS;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [deleteTask, setDeleteTask] = useState(null);

  // Persist tasks to localStorage
  useEffect(() => {
    localStorage.setItem('focusboard-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Calculate statistics
  const totalTasks = tasks.length;
  const todoCount = tasks.filter((t) => t.status === 'To Do').length;
  const inProgressCount = tasks.filter((t) => t.status === 'In Progress').length;
  const completedCount = tasks.filter((t) => t.status === 'Completed').length;
  const completionPercent =
    totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'All' || task.status === statusFilter;
    const matchesPriority =
      priorityFilter === 'All' || task.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // CRUD Operations
  const handleCreateTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
    setShowTaskForm(false);
  };

  const handleUpdateTask = (taskData) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskData.id ? { ...t, ...taskData } : t))
    );
    setEditingTask(null);
    setShowTaskForm(false);
  };

  const handleDeleteTask = (taskId) => {
    setDeleteTask(tasks.find((t) => t.id === taskId));
  };

  const confirmDelete = () => {
    if (deleteTask) {
      setTasks((prev) => prev.filter((t) => t.id !== deleteTask.id));
      setDeleteTask(null);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  const handleCloseForm = () => {
    setShowTaskForm(false);
    setEditingTask(null);
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  const stats = [
    {
      label: 'Total Tasks',
      value: totalTasks,
      icon: ListTodo,
      color: '#6366f1',
      bgColor: '#eef2ff',
    },
    {
      label: 'To Do',
      value: todoCount,
      icon: Clock,
      color: '#f59e0b',
      bgColor: '#fffbeb',
    },
    {
      label: 'In Progress',
      value: inProgressCount,
      icon: Loader,
      color: '#3b82f6',
      bgColor: '#eff6ff',
    },
    {
      label: 'Completed',
      value: completedCount,
      icon: CheckCircle2,
      color: '#10b981',
      bgColor: '#ecfdf5',
    },
    {
      label: 'Completion',
      value: `${completionPercent}%`,
      icon: TrendingUp,
      color: '#8b5cf6',
      bgColor: '#f5f3ff',
    },
  ];

  return (
    <div className="app-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          className="sidebar-overlay active"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <main className="main-content">
        <Header
          onMenuToggle={() => setSidebarOpen((prev) => !prev)}
          onNewTask={() => {
            setEditingTask(null);
            setShowTaskForm(true);
          }}
        />

        <div className="page-content">
          {/* Dashboard Stats */}
          <section className="stats-grid" aria-label="Dashboard statistics">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </section>

          {/* Focus Notes */}
          <FocusNotes />

          {/* Search & Filters */}
          <section className="tasks-section">
            <div className="tasks-header">
              <h2 className="tasks-title">My Tasks</h2>
              <button
                className="btn-add-task"
                onClick={() => {
                  setEditingTask(null);
                  setShowTaskForm(true);
                }}
              >
                + Add Task
              </button>
            </div>

            <div className="tasks-controls">
              <SearchBar
                query={searchQuery}
                onChange={setSearchQuery}
              />
              <FilterTabs
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                priorityFilter={priorityFilter}
                onPriorityChange={setPriorityFilter}
              />
            </div>

            {/* Task List */}
            <TaskList
              tasks={filteredTasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onStatusChange={handleStatusChange}
            />
          </section>
        </div>
      </main>

      {/* Task Form Modal */}
      {showTaskForm && (
        <TaskForm
          task={editingTask}
          onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
          onClose={handleCloseForm}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deleteTask && (
        <DeleteModal
          taskTitle={deleteTask.title}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTask(null)}
        />
      )}
    </div>
  );
}

export default App;
