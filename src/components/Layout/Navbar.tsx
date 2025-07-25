import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { 
  Shield, 
  Bell, 
  Settings, 
  LogOut, 
  User,
  ChevronDown,
  School,
  Users,
  BookOpen
} from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();

  const getRoleIcon = () => {
    switch (user?.role) {
      case 'student':
        return <BookOpen className="w-5 h-5" />;
      case 'school':
        return <School className="w-5 h-5" />;
      case 'parent':
        return <Users className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  const getRoleColor = () => {
    switch (user?.role) {
      case 'student':
        return 'bg-green-100 text-green-800';
      case 'school':
        return 'bg-green-100 text-green-800';
      case 'parent':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Shield className="w-8 h-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EduChain</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Role Badge */}
            <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getRoleColor()}`}>
              {getRoleIcon()}
              <span className="capitalize">{user?.role}</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
            </button>

            {/* Settings */}
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="w-6 h-6" />
            </button>

            {/* User Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.avatar}
                  alt={user?.name}
                />
                <span className="hidden md:block text-gray-700 font-medium">{user?.name}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </a>
                <button
                  onClick={logout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;