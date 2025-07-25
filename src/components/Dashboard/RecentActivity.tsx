import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { 
  FileText, 
  UserCheck, 
  Shield, 
  ArrowRightLeft,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const RecentActivity = () => {
  const { user } = useAuth();

  const getActivitiesForRole = () => {
    switch (user?.role) {
      case 'student':
        return [
          {
            id: '1',
            action: 'Grade Updated',
            description: 'Mathematics - Grade A recorded',
            timestamp: '2 hours ago',
            icon: FileText,
            color: 'text-green-600',
            bg: 'bg-green-50'
          },
          {
            id: '2',
            action: 'Attendance Marked',
            description: 'Physics class - Present',
            timestamp: '4 hours ago',
            icon: CheckCircle,
            color: 'text-blue-600',
            bg: 'bg-blue-50'
          },
          {
            id: '3',
            action: 'Profile Updated',
            description: 'Emergency contact information updated',
            timestamp: '1 day ago',
            icon: UserCheck,
            color: 'text-purple-600',
            bg: 'bg-purple-50'
          }
        ];
      
      case 'school':
        return [
          {
            id: '1',
            action: 'Transfer Request',
            description: 'New transfer request from Emma Johnson',
            timestamp: '1 hour ago',
            icon: ArrowRightLeft,
            color: 'text-orange-600',
            bg: 'bg-orange-50'
          },
          {
            id: '2',
            action: 'Record Verified',
            description: 'Academic record digitally signed',
            timestamp: '3 hours ago',
            icon: Shield,
            color: 'text-green-600',
            bg: 'bg-green-50'
          },
          {
            id: '3',
            action: 'Student Enrolled',
            description: 'New student registration completed',
            timestamp: '5 hours ago',
            icon: UserCheck,
            color: 'text-blue-600',
            bg: 'bg-blue-50'
          }
        ];
      
      case 'parent':
        return [
          {
            id: '1',
            action: 'Grade Alert',
            description: 'Emma received A in Mathematics',
            timestamp: '2 hours ago',
            icon: FileText,
            color: 'text-green-600',
            bg: 'bg-green-50'
          },
          {
            id: '2',
            action: 'Attendance Notice',
            description: 'John was absent from Chemistry',
            timestamp: '1 day ago',
            icon: AlertCircle,
            color: 'text-yellow-600',
            bg: 'bg-yellow-50'
          },
          {
            id: '3',
            action: 'Parent-Teacher Meeting',
            description: 'Meeting scheduled for next week',
            timestamp: '2 days ago',
            icon: Clock,
            color: 'text-purple-600',
            bg: 'bg-purple-50'
          }
        ];
      
      case 'admin':
        return [
          {
            id: '1',
            action: 'Security Alert',
            description: 'Suspicious login attempt detected',
            timestamp: '30 minutes ago',
            icon: Shield,
            color: 'text-red-600',
            bg: 'bg-red-50'
          },
          {
            id: '2',
            action: 'School Verified',
            description: 'Roosevelt Academy verification completed',
            timestamp: '2 hours ago',
            icon: CheckCircle,
            color: 'text-green-600',
            bg: 'bg-green-50'
          },
          {
            id: '3',
            action: 'System Backup',
            description: 'Daily backup completed successfully',
            timestamp: '6 hours ago',
            icon: Shield,
            color: 'text-blue-600',
            bg: 'bg-blue-50'
          }
        ];
      
      default:
        return [];
    }
  };

  const activities = getActivitiesForRole();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`${activity.bg} p-2 rounded-lg`}>
                <Icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;