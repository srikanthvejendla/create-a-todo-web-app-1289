import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="search"
        className="border border-border rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Search tasks..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        aria-label="Search tasks"
      />
      <button
        type="submit"
        className="px-3 py-2 rounded bg-primary text-white hover:bg-primary/80 transition"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
