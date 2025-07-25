import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Clock,
  Filter,
  Download,
  TrendingUp,
  User
} from 'lucide-react';

const ChildAttendanceRecords = () => {
  const [selectedChild, setSelectedChild] = useState('emma');
  const [selectedMonth, setSelectedMonth] = useState('current');

  const children = [
    { id: 'emma', name: 'Emma Johnson', grade: 'JSS 3' },
    { id: 'john', name: 'John Johnson', grade: 'JSS 1' }
  ];

  const attendanceData = {
    emma: {
      overall: 95,
      thisMonth: 97,
      trend: 'up',
      totalDays: 120,
      presentDays: 114,
      absentDays: 4,
      lateDays: 2,
      records: [
        { date: '2024-01-15', status: 'present', subjects: ['Math', 'English', 'Physics', 'Chemistry'] },
        { date: '2024-01-16', status: 'present', subjects: ['Biology', 'History', 'Math', 'English'] },
        { date: '2024-01-17', status: 'late', subjects: ['Math', 'English', 'Physics'], arrivalTime: '8:15 AM' },
        { date: '2024-01-18', status: 'present', subjects: ['Chemistry', 'Biology', 'History', 'Math'] },
        { date: '2024-01-19', status: 'absent', subjects: [], reason: 'Sick' },
        { date: '2024-01-22', status: 'present', subjects: ['Math', 'English', 'Physics', 'Chemistry'] },
        { date: '2024-01-23', status: 'present', subjects: ['Biology', 'History', 'Math', 'English'] }
      ],
      monthlyStats: [
        { month: 'Sep', attendance: 94 },
        { month: 'Oct', attendance: 96 },
        { month: 'Nov', attendance: 93 },
        { month: 'Dec', attendance: 95 },
        { month: 'Jan', attendance: 97 }
      ]
    },
    john: {
      overall: 88,
      thisMonth: 85,
      trend: 'down',
      totalDays: 100,
      presentDays: 88,
      absentDays: 8,
      lateDays: 4,
      records: [
        { date: '2024-01-15', status: 'present', subjects: ['Math', 'English', 'Science'] },
        { date: '2024-01-16', status: 'late', subjects: ['Social Studies', 'Math', 'English'], arrivalTime: '8:20 AM' },
        { date: '2024-01-17', status: 'absent', subjects: [], reason: 'Family event' },
        { date: '2024-01-18', status: 'present', subjects: ['Science', 'Math', 'English'] },
        { date: '2024-01-19', status: 'present', subjects: ['Social Studies', 'Basic Tech', 'Math'] },
        { date: '2024-01-22', status: 'absent', subjects: [], reason: 'Sick' },
        { date: '2024-01-23', status: 'late', subjects: ['Math', 'English'], arrivalTime: '8:25 AM' }
      ],
      monthlyStats: [
        { month: 'Sep', attendance: 92 },
        { month: 'Oct', attendance: 89 },
        { month: 'Nov', attendance: 87 },
        { month: 'Dec', attendance: 90 },
        { month: 'Jan', attendance: 85 }
      ]
    }
  };

  const selectedChildData = attendanceData[selectedChild as keyof typeof attendanceData];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'absent':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'late':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 95) return 'text-green-600';
    if (percentage >= 85) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Attendance Records</h2>
          <p className="text-gray-600 mt-1">Monitor your children's daily attendance and punctuality</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {children.map((child) => (
                <option key={child.id} value={child.id}>
                  {child.name} ({child.grade})
                </option>
              ))}
            </select>
          </div>
          
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="current">Current Month</option>
            <option value="january">January 2024</option>
            <option value="december">December 2023</option>
            <option value="november">November 2023</option>
          </select>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall Attendance</p>
              <p className={`text-2xl font-bold ${getAttendanceColor(selectedChildData.overall)}`}>
                {selectedChildData.overall}%
              </p>
              <p className="text-xs text-gray-500 flex items-center mt-1">
                <TrendingUp className={`w-3 h-3 mr-1 ${selectedChildData.trend === 'up' ? 'text-green-500' : 'text-red-500 rotate-180'}`} />
                {selectedChildData.trend === 'up' ? 'Improving' : 'Needs attention'}
              </p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Present Days</p>
              <p className="text-2xl font-bold text-green-600">{selectedChildData.presentDays}</p>
              <p className="text-xs text-gray-500">out of {selectedChildData.totalDays} days</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Absent Days</p>
              <p className="text-2xl font-bold text-red-600">{selectedChildData.absentDays}</p>
              <p className="text-xs text-gray-500">This term</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
              <p className="text-2xl font-bold text-yellow-600">{selectedChildData.lateDays}</p>
              <p className="text-xs text-gray-500">This term</p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Monthly Attendance Trend */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Attendance Trend</h3>
        <div className="grid grid-cols-5 gap-4">
          {selectedChildData.monthlyStats.map((month, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">{month.month}</div>
              <div className={`text-2xl font-bold ${getAttendanceColor(month.attendance)}`}>
                {month.attendance}%
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    month.attendance >= 95 ? 'bg-green-500' :
                    month.attendance >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${month.attendance}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Attendance Records */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Attendance Records</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subjects Attended
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedChildData.records.map((record, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(record.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(record.status)}
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {record.subjects.map((subject, subIndex) => (
                          <span
                            key={subIndex}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {subject}
                          </span>
                        ))}
                        {record.subjects.length === 0 && (
                          <span className="text-sm text-gray-500">No classes attended</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.status === 'late' && record.arrivalTime && (
                        <span>Arrived at {record.arrivalTime}</span>
                      )}
                      {record.status === 'absent' && record.reason && (
                        <span>Reason: {record.reason}</span>
                      )}
                      {record.status === 'present' && (
                        <span className="text-green-600">Full day attendance</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Attendance Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedChildData.overall >= 95 ? (
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Excellent Attendance</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Consistently present for classes</li>
                <li>• Rarely late or absent</li>
                <li>• Good attendance habits established</li>
                <li>• Keep up the excellent work!</li>
              </ul>
            </div>
          ) : selectedChildData.overall >= 85 ? (
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">Good Attendance</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Generally good attendance pattern</li>
                <li>• Some room for improvement</li>
                <li>• Monitor for consistent patterns</li>
                <li>• Encourage punctuality</li>
              </ul>
            </div>
          ) : (
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">Attendance Needs Attention</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Below recommended attendance level</li>
                <li>• May impact academic performance</li>
                <li>• Consider discussing with school</li>
                <li>• Address any underlying issues</li>
              </ul>
            </div>
          )}
          
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Recommendations</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {selectedChildData.overall >= 95 ? (
                <>
                  <li>• Maintain current routine</li>
                  <li>• Continue healthy sleep schedule</li>
                  <li>• Plan ahead for known absences</li>
                  <li>• Set a positive example for peers</li>
                </>
              ) : (
                <>
                  <li>• Establish consistent morning routine</li>
                  <li>• Ensure adequate sleep schedule</li>
                  <li>• Communicate with school about challenges</li>
                  <li>• Set attendance goals and rewards</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <User className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Contact Teacher</h4>
            <p className="text-sm text-gray-500">Discuss attendance concerns</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Calendar className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Request Leave</h4>
            <p className="text-sm text-gray-500">Submit absence request</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Download className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Download Certificate</h4>
            <p className="text-sm text-gray-500">Get attendance certificate</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildAttendanceRecords;