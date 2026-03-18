import React from 'react';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const TopBar: React.FC = () => (
  <header className="flex items-center justify-between px-4 py-2 bg-surface border-b border-border">
    <SearchBar />
    <UserMenu />
  </header>
);

export default TopBar;
