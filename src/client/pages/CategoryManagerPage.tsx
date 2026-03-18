import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../lib/api';

const CategoryManagerPage: React.FC = () => {
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Manage Categories</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div className="text-danger">Error loading categories</div>}
      <ul className="space-y-2">
        {categories?.map((cat: any) => (
          <li key={cat.id} className="flex items-center justify-between px-4 py-2 bg-surface rounded border border-border">
            <span>{cat.name}</span>
            <div className="flex gap-2">
              <button className="text-primary hover:underline">Edit</button>
              <button className="text-danger hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-6 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition">Add Category</button>
    </div>
  );
};

export default CategoryManagerPage;
