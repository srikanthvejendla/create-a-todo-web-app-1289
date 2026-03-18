import React from 'react';

const UserMenu: React.FC = () => (
  <div className="flex items-center gap-2">
    {/* TODO: Add avatar, dropdown, dark mode toggle */}
    <button className="px-3 py-2 rounded-md bg-primary text-white font-bold">User</button>
  </div>
);

export default UserMenu;
