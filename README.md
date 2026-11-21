# FocusBoard 📋

A fully functional, responsive task management web application built with **React.js**, **Vite**, **JavaScript**, **CSS3**, and **Lucide React**.

![FocusBoard](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### Dashboard
- **Statistics Overview**: Total tasks, To Do, In Progress, Completed counts, and completion percentage
- **Dynamic Calculations**: All stats update in real-time as tasks are modified

### Task Management (CRUD)
- **Create**: Add new tasks with title, description, category, status, priority, and due date
- **Read**: View all tasks in a clean, organized list
- **Edit**: Modify existing tasks using the same form
- **Delete**: Remove tasks with a confirmation dialog

### Search & Filtering
- **Search**: Case-insensitive, partial title search with instant results
- **Status Filters**: All, To Do, In Progress, Completed tabs
- **Priority Filter**: Filter by Low, Medium, or High priority
- **Combined Filtering**: Search and filters work together

### Focus Notes Carousel
- **Three motivational slides** with auto-advance
- **Previous/Next navigation** arrows
- **Clickable dot indicators** for direct slide access

### Data Persistence
- **localStorage**: Tasks are saved and restored automatically
- **Sample Data**: 8 pre-loaded tasks on first visit
- **No data loss**: Existing saved data is never overwritten

### Responsive Design
- **Desktop**: 1440px optimized layout with sidebar
- **Tablet**: 768px with collapsible sidebar
- **Mobile**: 390px with full mobile optimization

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI components & state management |
| Vite 6 | Build tool & dev server |
| JavaScript (ES6+) | Application logic |
| CSS3 | Styling & responsive layouts |
| Lucide React | Icon library |
| localStorage | Client-side data persistence |

## 📁 Project Structure

```
FocusBoard/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── StatCard/
│   │   │   ├── StatCard.jsx
│   │   │   └── StatCard.css
│   │   ├── FocusNotes/
│   │   │   ├── FocusNotes.jsx
│   │   │   └── FocusNotes.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   ├── FilterTabs/
│   │   │   ├── FilterTabs.jsx
│   │   │   └── FilterTabs.css
│   │   ├── TaskList/
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskList.css
│   │   ├── TaskCard/
│   │   │   ├── TaskCard.jsx
│   │   │   └── TaskCard.css
│   │   ├── TaskForm/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskForm.css
│   │   └── DeleteModal/
│   │       ├── DeleteModal.jsx
│   │       └── DeleteModal.css
│   ├── data/
│   │   ├── sampleTasks.js
│   │   └── constants.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── AI_USAGE.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ installed
- **npm** 9+ installed

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd FocusBoard

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel
1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Framework preset will auto-detect as Vite
4. Click Deploy

### Netlify
1. Push your code to GitHub
2. Import the repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click Deploy

## 🧩 Components Overview

| Component | Description |
|---|---|
| `Sidebar` | Fixed navigation sidebar with branding and user profile |
| `Header` | Top bar with page title, date, notifications, and "New Task" button |
| `StatCard` | Individual statistic card with icon, value, and label |
| `FocusNotes` | Three-slide carousel with productivity tips |
| `SearchBar` | Real-time task search input with clear button |
| `FilterTabs` | Status tabs and priority dropdown for filtering |
| `TaskList` | Container rendering filtered task cards or empty state |
| `TaskCard` | Individual task display with status, priority, actions |
| `TaskForm` | Modal form for creating and editing tasks |
| `DeleteModal` | Confirmation dialog before task deletion |

## ⚡ React Hooks Used

- **`useState`**: Task state, form data, filters, search, modals, sidebar
- **`useEffect`**: localStorage persistence, keyboard handlers, carousel auto-advance
- **`useCallback`**: Memoized carousel navigation handlers

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 1024px | Full sidebar + main content |
| 768px – 1024px | Collapsible sidebar overlay |
| 480px – 768px | Stacked layout, 2-column stats |
| < 480px | Single column, compact UI |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
