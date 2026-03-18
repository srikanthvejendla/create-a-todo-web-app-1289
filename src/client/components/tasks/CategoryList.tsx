import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../../lib/api';

const CategoryList: React.FC = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  return (
    <ul className="space-y-1 px-2">
      <li>
        <NavLink to="/" end className={({ isActive }) =>
          'block px-3 py-2 rounded hover:bg-primary/10 ' + (isActive ? 'font-bold text-primary' : '')
        }>
          All Tasks
        </NavLink>
      </li>
      {isLoading && <li className="text-muted px-3">Loading...</li>}
      {categories?.map((cat: any) => (
        <li key={cat.id}>
          <NavLink to={`/?category=${cat.id}`} className={({ isActive }) =>
            'block px-3 py-2 rounded hover:bg-primary/10 ' + (isActive ? 'font-bold text-primary' : '')
          }>
            {cat.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
