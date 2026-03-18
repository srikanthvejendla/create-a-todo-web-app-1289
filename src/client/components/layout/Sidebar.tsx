import React from 'react';
import { NavLink } from 'react-router-dom';
import CategoryList from '../tasks/CategoryList';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-56 bg-surface border-r border-border flex flex-col">
      <div className="p-4 text-lg font-bold tracking-tight">Todo</div>
      <nav className="flex-1 overflow-y-auto">
        <CategoryList />
      </nav>
      <div className="p-4 border-t border-border text-xs text-muted">
        <NavLink to="/categories" className={({ isActive }) => isActive ? 'font-bold text-primary' : ''}>
          Manage Categories
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
