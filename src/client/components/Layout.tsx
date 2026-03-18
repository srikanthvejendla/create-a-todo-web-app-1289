import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout: React.FC = () => (
  <div className="flex h-screen bg-surface">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <TopBar />
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
