import React from 'react';

const SearchBar: React.FC = () => (
  <form className="flex items-center w-full max-w-md" role="search">
    <input
      type="search"
      className="w-full px-4 py-2 rounded-md border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Search tasks..."
      aria-label="Search tasks"
    />
  </form>
);

export default SearchBar;
