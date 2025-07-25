import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  AlertTriangle, 
  Info,
  CheckCircle,
  Clock,
  ArrowRightLeft,
  BookOpen,
  User,
  X,
  Filter,
  Search
} from 'lucide-react';

const StudentNotifications = () => {
  const [filter, setFilter] = useState<'all' | 'exam' | 'transfer' | 'announcement' | 'assignment'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNotification, setSelectedNotification] = useState<string | null>(null);

  const notifications = [
    {
      id: '1',
      type: 'exam',
      priority: 'high',
      title: 'Mathematics Final Exam Reminder',
      message: 'Your Mathematics final exam is scheduled for January 25th, 2024 at 9:00 AM in Room 101. Please bring your calculator and writing materials.',
      timestamp: '2024-01-20T10:00:00Z',
      read: false,
      actionRequired: true,
      details: {
        examDate: '2024-01-25',
        examTime: '9:00 AM',
        location: 'Room 101',
        duration: '2 hours',
        materials: ['Calculator', 'Pen/Pencil', 'Ruler']
      }
    },
    {
      id: '2',
      type: 'transfer',
      priority: 'medium',
      title: 'Transfer Request Update',
      message: 'Your transfer request to Roosevelt Academy has been approved. Please complete the enrollment process by January 30th.',
      timestamp: '2024-01-18T14:30:00Z',
      read: false,
      actionRequired: true,
      details: {
        transferTo: 'Roosevelt Academy',
        deadline: '2024-01-30',
        nextSteps: ['Complete enrollment form', 'Submit required documents', 'Attend orientation']
      }
    },
    {
      id: '3',
      type: 'announcement',
      priority: 'low',
      title: 'School Sports Day 2024',
      message: 'Annual Sports Day will be held on February 15th, 2024. All students are encouraged to participate in various sporting events.',
      timestamp: '2024-01-17T09:00:00Z',
      read: true,
      actionRequired: false,
      details: {
        eventDate: '2024-02-15',
        events: ['Track and Field', 'Football', 'Basketball', 'Swimming'],
        registration: 'Open until February 10th'
      }
    },
    {
      id: '4',
      type: 'assignment',
      priority: 'high',
      title: 'Physics Lab Report Due Soon',
      message: 'Your Physics lab report on Newton\'s Laws is due in 2 days. Make sure to include all required sections and data analysis.',
      timestamp: '2024-01-16T16:00:00Z',
      read: true,
      actionRequired: true,
      details: {
        subject: 'Physics',
        dueDate: '2024-01-22',
        requirements: ['Data collection', 'Analysis', 'Conclusion', 'References']
      }
    },
    {
      id: '5',
      type: 'announcement',
      priority: 'medium',
      title: 'Library Hours Extended',
      message: 'The school library will now be open until 8:00 PM on weekdays to support students during exam preparation.',
      timestamp: '2024-01-15T11:00:00Z',
      read: true,
      actionRequired: false,
      details: {
        newHours: 'Monday-Friday: 7:00 AM - 8:00 PM',
        effectiveDate: '2024-01-20',
        services: ['Study spaces', 'Computer access', 'Research assistance']
      }
    },
    {
      id: '6',
      type: 'exam',
      priority: 'medium',
      title: 'Chemistry Test Postponed',
      message: 'The Chemistry test originally scheduled for January 20th has been postponed to January 27th due to teacher illness.',
      timestamp: '2024-01-14T13:00:00Z',
      read: true,
      actionRequired: false,
      details: {
        originalDate: '2024-01-20',
        newDate: '2024-01-27',
        reason: 'Teacher illness',
        preparation: 'Continue studying as planned'
      }
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'exam':
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'transfer':
        return <ArrowRightLeft className="w-5 h-5 text-purple-500" />;
      case 'announcement':
        return <Info className="w-5 h-5 text-green-500" />;
      case 'assignment':
        return <Calendar className="w-5 h-5 text-orange-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500 bg-red-50';
      case 'medium':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'exam':
        return 'bg-blue-100 text-blue-800';
      case 'transfer':
        return 'bg-purple-100 text-purple-800';
      case 'announcement':
        return 'bg-green-100 text-green-800';
      case 'assignment':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesFilter = filter === 'all' || notification.type === filter;
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const unreadCount = notifications.filter(n => !n.read).length;
  const actionRequiredCount = notifications.filter(n => n.actionRequired && !n.read).length;

  const markAsRead = (notificationId: string) => {
    // In a real app, this would update the notification status
    console.log('Marking notification as read:', notificationId);
  };

  const markAllAsRead = () => {
    // In a real app, this would mark all notifications as read
    console.log('Marking all notifications as read');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
          <p className="text-gray-600 mt-1">Stay updated with important announcements and reminders</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={markAllAsRead}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Mark all as read
          </button>
        </div>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Notifications</p>
              <p className="text-2xl font-bold text-blue-600">{notifications.length}</p>
            </div>
            <Bell className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unread</p>
              <p className="text-2xl font-bold text-red-600">{unreadCount}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Action Required</p>
              <p className="text-2xl font-bold text-orange-600">{actionRequiredCount}</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-green-600">
                {notifications.filter(n => {
                  const notificationDate = new Date(n.timestamp);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return notificationDate > weekAgo;
                }).length}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="all">All Types</option>
                <option value="exam">Exams</option>
                <option value="transfer">Transfers</option>
                <option value="announcement">Announcements</option>
                <option value="assignment">Assignments</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Notifications ({filteredNotifications.length})
          </h3>
          
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`border-l-4 rounded-lg p-4 ${getPriorityColor(notification.priority)} ${
                  !notification.read ? 'shadow-md' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notification.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(notification.type)}`}>
                          {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                        </span>
                        {!notification.read && (
                          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        )}
                        {notification.actionRequired && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                            Action Required
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{notification.message}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {new Date(notification.timestamp).toLocaleString()}
                        </span>
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedNotification(
                              selectedNotification === notification.id ? null : notification.id
                            )}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            {selectedNotification === notification.id ? 'Hide Details' : 'View Details'}
                          </button>
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-green-600 hover:text-green-800 text-sm font-medium"
                            >
                              Mark as Read
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {/* Expanded Details */}
                      {selectedNotification === notification.id && (
                        <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-3">Additional Details</h5>
                          <div className="space-y-2 text-sm">
                            {Object.entries(notification.details).map(([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                                </span>
                                <span className="text-gray-900 font-medium">
                                  {Array.isArray(value) ? value.join(', ') : value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredNotifications.length === 0 && (
            <div className="text-center py-8">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No notifications found</p>
            </div>
          )}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Email Notifications</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Exam reminders</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Transfer updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">General announcements</span>
              </label>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Push Notifications</h4>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2 text-sm text-gray-700">Urgent notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Assignment deadlines</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-700">Daily summaries</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNotifications;