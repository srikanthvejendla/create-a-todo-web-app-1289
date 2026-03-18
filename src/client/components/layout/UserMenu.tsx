import React from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UserMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="relative flex items-center gap-2">
      <span className="text-sm font-medium">{user.email}</span>
      <button
        className="ml-2 px-3 py-1 rounded bg-primary text-white hover:bg-primary/80 transition"
        onClick={handleLogout}
        aria-label="Sign out"
      >
        Sign out
      </button>
    </div>
  );
};

export default UserMenu;
