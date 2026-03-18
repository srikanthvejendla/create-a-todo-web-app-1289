import React from 'react';
import SearchBar from '../tasks/SearchBar';
import UserMenu from './UserMenu';

const TopBar: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-surface border-b border-border h-16">
      <SearchBar />
      <UserMenu />
    </header>
  );
};

export default TopBar;
