import React from 'react';
import CategoryList from './categories/CategoryList';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-56 bg-surface border-r border-border h-full">
      <div className="flex-1 overflow-y-auto">
        <CategoryList />
      </div>
    </aside>
  );
};

export default Sidebar;
