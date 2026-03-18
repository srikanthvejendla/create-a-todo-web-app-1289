import React from 'react';

const Fab: React.FC = () => (
  <button
    className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-white shadow-md flex items-center justify-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary"
    aria-label="Add Task"
  >
    +
  </button>
);

export default Fab;
