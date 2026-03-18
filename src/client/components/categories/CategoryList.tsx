import React from 'react';

const CategoryList: React.FC = () => {
  // TODO: Fetch categories from API and render
  return (
    <nav aria-label="Categories" className="p-4">
      <h2 className="font-bold text-lg mb-2">Categories</h2>
      <ul className="space-y-1">
        <li className="text-muted">(No categories yet)</li>
      </ul>
    </nav>
  );
};

export default CategoryList;
