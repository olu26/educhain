import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Eye,
  Edit,
  Trash2,
  Shield,
  School,
  User,
  UserCheck,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MoreVertical
} from 'lucide-react';

const UserDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | 'student' | 'school' | 'parent' | 'admin'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive' | 'suspended'>('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const users = [
    {
      id: '1',
      name: 'Emma Johnson',
      email: 'emma.johnson@email.com',
      role: 'student',
      status: 'active',
      school: 'Lincoln High School',
      joinDate: '2022-09-01',
      lastLogin: '2024-01-15',
      phone: '+234-801-234-5678',
      location: 'Lagos, Nigeria'
    },
    {
      id: '2',
      name: 'Dr. Michael Brown',
      email: 'admin@lincolnhigh.edu',
      role: 'school',
      status: 'active',
      school: 'Lincoln High School',
      joinDate: '2020-01-01',
      lastLogin: '2024-01-15',
      phone: '+234-803-567-8901',
      location: 'Lagos, Nigeria'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      role: 'parent',
      status: 'active',
      school: 'Lincoln High School',
      joinDate: '2022-09-01',
      lastLogin: '2024-01-14',
      phone: '+234-805-123-4567',
      location: 'Lagos, Nigeria'
    },
    {
      id: '4',
      name: 'Admin User',
      email: 'admin@educhain.com',
      role: 'admin',
      status: 'active',
      school: 'Platform Admin',
      joinDate: '2020-01-01',
      lastLogin: '2024-01-15',
      phone: '+234-807-890-1234',
      location: 'Abuja, Nigeria'
    },
    {
      id: '5',
      name: 'John Doe',
      email: 'john.doe@email.com',
      role: 'student',
      status: 'inactive',
      school: 'Roosevelt Academy',
      joinDate: '2023-01-15',
      lastLogin: '2023-12-20',
      phone: '+234-809-345-6789',
      location: 'Abuja, Nigeria'
    }
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'student':
        return <User className="w-5 h-5 text-blue-500" />;
      case 'school':
        return <School className="w-5 h-5 text-green-500" />;
      case 'parent':
        return <Users className="w-5 h-5 text-purple-500" />;
      case 'admin':
        return <Shield className="w-5 h-5 text-red-500" />;
      default:
        return <User className="w-5 h-5 text-gray-500" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student':
        return 'bg-blue-100 text-blue-800';
      case 'school':
        return 'bg-green-100 text-green-800';
      case 'parent':
        return 'bg-purple-100 text-purple-800';
      case 'admin':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-yellow-100 text-yellow-800';
      case 'suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.school.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const userStats = {
    total: users.length,
    students: users.filter(u => u.role === 'student').length,
    schools: users.filter(u => u.role === 'school').length,
    parents: users.filter(u => u.role === 'parent').length,
    admins: users.filter(u => u.role === 'admin').length,
    active: users.filter(u => u.status === 'active').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">User Directory</h1>
          <p className="text-gray-600 mt-1">Manage all platform users and their access</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Total Users</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">{userStats.total}</p>
            </div>
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Students</p>
              <p className="text-lg sm:text-xl font-bold text-blue-600">{userStats.students}</p>
            </div>
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Schools</p>
              <p className="text-lg sm:text-xl font-bold text-green-600">{userStats.schools}</p>
            </div>
            <School className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Parents</p>
              <p className="text-lg sm:text-xl font-bold text-purple-600">{userStats.parents}</p>
            </div>
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Admins</p>
              <p className="text-lg sm:text-xl font-bold text-red-600">{userStats.admins}</p>
            </div>
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-600">Active</p>
              <p className="text-lg sm:text-xl font-bold text-green-600">{userStats.active}</p>
            </div>
            <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
        <div className="flex flex-col space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users by name, email, or school..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Mobile Filter Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Filter Options */}
          <div className={`flex flex-col sm:flex-row gap-4 ${showMobileFilters ? 'block' : 'hidden sm:flex'}`}>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400 hidden sm:block" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none"
              >
                <option value="all">All Roles</option>
                <option value="student">Students</option>
                <option value="school">Schools</option>
                <option value="parent">Parents</option>
                <option value="admin">Admins</option>
              </select>
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table/Cards */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Users ({filteredUsers.length})
          </h2>
          
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    School/Organization
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            {getRoleIcon(user.role)}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Mail className="w-3 h-3 mr-1" />
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.school}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.lastLogin).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {getRoleIcon(user.role)}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  <p className="flex items-center">
                    <School className="w-4 h-4 mr-2" />
                    {user.school}
                  </p>
                  <p className="flex items-center mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Last login: {new Date(user.lastLogin).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button className="flex items-center space-x-1 text-red-600 hover:text-red-800 text-sm">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDirectory;