import React from 'react';
import { 
  User, 
  School, 
  Calendar,
  TrendingUp,
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail
} from 'lucide-react';

const ChildOverview = () => {
  const children = [
    {
      id: '1',
      name: 'Emma Johnson',
      studentId: 'STU-2024-001',
      school: 'Lincoln High School',
      grade: 'JSS 3',
      age: 14,
      photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=150&h=150&fit=crop&crop=face',
      currentGPA: 3.8,
      attendance: 95,
      subjects: 6,
      activities: ['Debate Club', 'Mathematics Club'],
      recentGrades: [
        { subject: 'Mathematics', grade: 'A', score: 85 },
        { subject: 'English', grade: 'A-', score: 82 },
        { subject: 'Physics', grade: 'B+', score: 78 }
      ],
      upcomingEvents: [
        { event: 'Mathematics Test', date: '2024-01-20', type: 'exam' },
        { event: 'Parent-Teacher Meeting', date: '2024-01-25', type: 'meeting' }
      ],
      alerts: [
        { type: 'info', message: 'Excellent performance in Mathematics this term' }
      ]
    },
    {
      id: '2',
      name: 'John Johnson',
      studentId: 'STU-2024-002',
      school: 'Lincoln High School',
      grade: 'JSS 1',
      age: 12,
      photo: 'https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg?w=150&h=150&fit=crop&crop=face',
      currentGPA: 3.4,
      attendance: 88,
      subjects: 5,
      activities: ['Football Team'],
      recentGrades: [
        { subject: 'English', grade: 'B', score: 75 },
        { subject: 'Mathematics', grade: 'B-', score: 72 },
        { subject: 'Science', grade: 'C+', score: 68 }
      ],
      upcomingEvents: [
        { event: 'Science Project Due', date: '2024-01-22', type: 'assignment' },
        { event: 'Football Match', date: '2024-01-24', type: 'activity' }
      ],
      alerts: [
        { type: 'warning', message: 'Attendance below 90% - needs improvement' },
        { type: 'info', message: 'Showing improvement in Mathematics' }
      ]
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A':
        return 'bg-green-100 text-green-800';
      case 'A-':
        return 'bg-green-100 text-green-700';
      case 'B+':
        return 'bg-blue-100 text-blue-800';
      case 'B':
        return 'bg-blue-100 text-blue-700';
      case 'B-':
        return 'bg-blue-100 text-blue-600';
      case 'C+':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'exam':
        return <BookOpen className="w-4 h-4 text-red-500" />;
      case 'meeting':
        return <User className="w-4 h-4 text-blue-500" />;
      case 'assignment':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'activity':
        return <Award className="w-4 h-4 text-purple-500" />;
      default:
        return <Calendar className="w-4 h-4 text-gray-500" />;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">My Children</h2>
          <p className="text-gray-600 mt-1">Overview of your children's academic progress and activities</p>
        </div>
      </div>

      {/* Children Overview Cards */}
      <div className="space-y-8">
        {children.map((child) => (
          <div key={child.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Child Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
              <div className="flex items-center space-x-4">
                <img
                  src={child.photo}
                  alt={child.name}
                  className="w-16 h-16 rounded-full border-4 border-white/20"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{child.name}</h3>
                  <p className="text-purple-100">Student ID: {child.studentId}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <span className="flex items-center space-x-1">
                      <School className="w-4 h-4" />
                      <span>{child.school}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{child.grade} • Age {child.age}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{child.currentGPA}</div>
                  <div className="text-sm text-blue-800">Current GPA</div>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{child.attendance}%</div>
                  <div className="text-sm text-green-800">Attendance</div>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <BookOpen className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">{child.subjects}</div>
                  <div className="text-sm text-purple-800">Subjects</div>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Award className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">{child.activities.length}</div>
                  <div className="text-sm text-orange-800">Activities</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Grades */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recent Grades</h4>
                  <div className="space-y-3">
                    {child.recentGrades.map((grade, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{grade.subject}</div>
                          <div className="text-sm text-gray-500">{grade.score}%</div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(grade.grade)}`}>
                          {grade.grade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Events */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Upcoming Events</h4>
                  <div className="space-y-3">
                    {child.upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        {getEventIcon(event.type)}
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{event.event}</div>
                          <div className="text-sm text-gray-500">
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities & Alerts */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Activities</h4>
                  <div className="space-y-2 mb-4">
                    {child.activities.map((activity, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-800 mr-2"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-3">Alerts</h4>
                  <div className="space-y-2">
                    {child.alerts.map((alert, index) => (
                      <div key={index} className="flex items-start space-x-2 p-2 bg-gray-50 rounded-lg">
                        {getAlertIcon(alert.type)}
                        <p className="text-sm text-gray-700">{alert.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  View Full Report
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Message Teacher</span>
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Schedule Meeting</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Calendar className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">View Calendar</h4>
            <p className="text-sm text-gray-500">See all upcoming events and deadlines</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Progress Reports</h4>
            <p className="text-sm text-gray-500">Download detailed academic reports</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Mail className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Communication</h4>
            <p className="text-sm text-gray-500">Message teachers and school staff</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildOverview;