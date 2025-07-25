import React, { useState } from 'react';
import { 
  Shield, 
  Users, 
  Key, 
  Lock,
  Unlock,
  Eye,
  Edit,
  Trash2,
  Plus,
  Settings,
  UserCheck,
  AlertTriangle
} from 'lucide-react';

const AccessControl = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: '1',
      name: 'Super Admin',
      description: 'Full system access and control',
      users: 2,
      permissions: ['all'],
      color: 'red',
      level: 'system'
    },
    {
      id: '2',
      name: 'School Administrator',
      description: 'Manage school data and students',
      users: 25,
      permissions: ['school_management', 'student_records', 'staff_management'],
      color: 'green',
      level: 'school'
    },
    {
      id: '3',
      name: 'Teacher',
      description: 'Access to assigned classes and grading',
      users: 150,
      permissions: ['class_management', 'grading', 'attendance'],
      color: 'blue',
      level: 'school'
    },
    {
      id: '4',
      name: 'Student',
      description: 'View personal records and assignments',
      users: 12000,
      permissions: ['view_records', 'submit_assignments'],
      color: 'purple',
      level: 'user'
    },
    {
      id: '5',
      name: 'Parent',
      description: 'Monitor children\'s academic progress',
      users: 8000,
      permissions: ['view_child_records', 'communication'],
      color: 'orange',
      level: 'user'
    }
  ];

  const permissions = [
    { id: 'all', name: 'All Permissions', category: 'system' },
    { id: 'school_management', name: 'School Management', category: 'administration' },
    { id: 'student_records', name: 'Student Records', category: 'administration' },
    { id: 'staff_management', name: 'Staff Management', category: 'administration' },
    { id: 'class_management', name: 'Class Management', category: 'academic' },
    { id: 'grading', name: 'Grading System', category: 'academic' },
    { id: 'attendance', name: 'Attendance Tracking', category: 'academic' },
    { id: 'view_records', name: 'View Records', category: 'basic' },
    { id: 'submit_assignments', name: 'Submit Assignments', category: 'basic' },
    { id: 'view_child_records', name: 'View Child Records', category: 'basic' },
    { id: 'communication', name: 'Communication', category: 'basic' }
  ];

  const recentActivity = [
    {
      id: '1',
      action: 'Role Created',
      details: 'New "Assistant Principal" role created',
      user: 'Admin User',
      timestamp: '2024-01-15T14:30:00Z'
    },
    {
      id: '2',
      action: 'Permission Modified',
      details: 'Teacher role permissions updated',
      user: 'Super Admin',
      timestamp: '2024-01-15T12:15:00Z'
    },
    {
      id: '3',
      action: 'User Access Revoked',
      details: 'Access revoked for inactive user',
      user: 'Admin User',
      timestamp: '2024-01-15T10:45:00Z'
    }
  ];

  const getRoleColor = (color: string) => {
    const colors = {
      red: 'bg-red-100 text-red-800 border-red-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'system':
        return <Shield className="w-5 h-5 text-red-500" />;
      case 'school':
        return <Settings className="w-5 h-5 text-green-500" />;
      case 'user':
        return <UserCheck className="w-5 h-5 text-blue-500" />;
      default:
        return <Users className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Access Control</h1>
          <p className="text-gray-600 mt-1">Manage user roles, permissions, and system access</p>
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Role</span>
        </button>
      </div>

      {/* Access Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Roles</p>
              <p className="text-2xl font-bold text-blue-600">{roles.length}</p>
            </div>
            <Shield className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-green-600">
                {roles.reduce((sum, role) => sum + role.users, 0).toLocaleString()}
              </p>
            </div>
            <Users className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Permissions</p>
              <p className="text-2xl font-bold text-purple-600">{permissions.length}</p>
            </div>
            <Key className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Security Level</p>
              <p className="text-2xl font-bold text-orange-600">High</p>
            </div>
            <Lock className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Roles Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">User Roles</h2>
          
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`border rounded-lg p-6 ${getRoleColor(role.color)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getLevelIcon(role.level)}
                    <div>
                      <h3 className="font-semibold text-lg">{role.name}</h3>
                      <p className="text-sm opacity-80">{role.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm">
                        <span>{role.users.toLocaleString()} users</span>
                        <span>•</span>
                        <span>{role.permissions.length} permissions</span>
                        <span>•</span>
                        <span className="capitalize">{role.level} level</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setSelectedRole(role.id)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Edit className="w-5 h-5" />
                    </button>
                    {role.level !== 'system' && (
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Permissions Preview */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {role.permissions.slice(0, 3).map((permission) => {
                      const perm = permissions.find(p => p.id === permission);
                      return (
                        <span
                          key={permission}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/50"
                        >
                          {perm?.name || permission}
                        </span>
                      );
                    })}
                    {role.permissions.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/50">
                        +{role.permissions.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Permissions Matrix */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Permissions Matrix</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Permission
                  </th>
                  {roles.map((role) => (
                    <th key={role.id} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {role.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {permissions.map((permission) => (
                  <tr key={permission.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{permission.name}</div>
                        <div className="text-sm text-gray-500 capitalize">{permission.category}</div>
                      </div>
                    </td>
                    {roles.map((role) => (
                      <td key={role.id} className="px-6 py-4 whitespace-nowrap text-center">
                        {role.permissions.includes(permission.id) || role.permissions.includes('all') ? (
                          <div className="w-5 h-5 bg-green-500 rounded-full mx-auto"></div>
                        ) : (
                          <div className="w-5 h-5 bg-gray-300 rounded-full mx-auto"></div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Access Control Activity</h2>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{activity.action}</h4>
                    <span className="text-sm text-gray-500">
                      {new Date(activity.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
                  <p className="text-xs text-gray-500 mt-1">by {activity.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Recommendations</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800">Review Inactive Users</h4>
              <p className="text-sm text-yellow-700">23 users haven't logged in for over 90 days</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-800">Enable Two-Factor Authentication</h4>
              <p className="text-sm text-blue-700">Enhance security for admin accounts</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <Key className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-800">Regular Permission Audits</h4>
              <p className="text-sm text-green-700">Schedule monthly reviews of user permissions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessControl;