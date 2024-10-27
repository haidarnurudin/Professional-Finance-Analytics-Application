import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Financial Analytics
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/settings"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/settings'
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Settings
            </Link>
            <Link
              to="/reports"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/reports'
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Generate Report
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};