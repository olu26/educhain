import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { 
  Users, 
  School, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const DashboardStats = () => {
  const { user } = useAuth();

  const getStatsForRole = () => {
    switch (user?.role) {
      case 'student':
        return [
          { label: 'Current GPA', value: '3.8', icon: TrendingUp, color: 'bg-green-500', change: '+0.2 from last semester' },
          { label: 'Attendance', value: '95%', icon: CheckCircle, color: 'bg-green-500', change: '+2% this month' },
          { label: 'Subjects', value: '6', icon: BookOpen, color: 'bg-green-500', change: 'Active courses' },
          { label: 'Activities', value: '3', icon: Users, color: 'bg-green-500', change: 'Extracurricular' },
        ];
      
      case 'school':
        return [
          { label: 'Total Students', value: '1,247', icon: Users, color: 'bg-green-500', change: '+12 this month' },
          { label: 'Transfer Requests', value: '5', icon: School, color: 'bg-green-500', change: '2 pending approval' },
          { label: 'Verified Records', value: '98.5%', icon: Shield, color: 'bg-green-500', change: '+0.3% this week' },
          { label: 'System Uptime', value: '99.9%', icon: Clock, color: 'bg-green-500', change: 'Last 30 days' },
        ];
      
      case 'parent':
        return [
          { label: 'Children', value: '2', icon: Users, color: 'bg-green-500', change: 'Active students' },
          { label: 'Avg. GPA', value: '3.6', icon: TrendingUp, color: 'bg-green-500', change: 'Combined average' },
          { label: 'Attendance', value: '92%', icon: CheckCircle, color: 'bg-green-500', change: 'This semester' },
          { label: 'Notifications', value: '3', icon: AlertTriangle, color: 'bg-green-500', change: 'Unread messages' },
        ];
      
      case 'admin':
        return [
          { label: 'Active Schools', value: '23', icon: School, color: 'bg-green-500', change: '+1 this quarter' },
          { label: 'Total Students', value: '15,421', icon: Users, color: 'bg-green-500', change: '+234 this month' },
          { label: 'System Health', value: '99.9%', icon: Shield, color: 'bg-green-500', change: 'All systems operational' },
          { label: 'Response Time', value: '1.2s', icon: Clock, color: 'bg-green-500', change: 'Average API response' },
        ];
      
      default:
        return [];
    }
  };

  const stats = getStatsForRole();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1 hidden sm:block">{stat.change}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;