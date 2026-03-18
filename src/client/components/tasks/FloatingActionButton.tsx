import React from 'react';

interface FloatingActionButtonProps {
  onClick: () => void;
  label: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onClick, label }) => (
  <button
    className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-white shadow-md flex items-center justify-center text-2xl hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-primary z-50"
    onClick={onClick}
    aria-label={label}
  >
    +
  </button>
);

export default FloatingActionButton;
