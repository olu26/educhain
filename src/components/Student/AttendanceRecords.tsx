import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, Filter, Download } from 'lucide-react';

const AttendanceRecords = () => {
  const [selectedMonth, setSelectedMonth] = useState('current');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const attendanceData = [
    { date: '2024-01-15', subject: 'Mathematics', status: 'present', time: '08:00 AM' },
    { date: '2024-01-15', subject: 'Physics', status: 'present', time: '09:30 AM' },
    { date: '2024-01-15', subject: 'English', status: 'late', time: '11:15 AM' },
    { date: '2024-01-16', subject: 'Mathematics', status: 'present', time: '08:00 AM' },
    { date: '2024-01-16', subject: 'Chemistry', status: 'absent', time: '10:00 AM' },
    { date: '2024-01-16', subject: 'Biology', status: 'present', time: '02:00 PM' },
    { date: '2024-01-17', subject: 'History', status: 'present', time: '09:00 AM' },
    { date: '2024-01-17', subject: 'Physics', status: 'present', time: '10:30 AM' },
    { date: '2024-01-18', subject: 'Mathematics', status: 'present', time: '08:00 AM' },
    { date: '2024-01-18', subject: 'English', status: 'present', time: '11:00 AM' },
  ];

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

  const calculateAttendanceStats = () => {
    const total = attendanceData.length;
    const present = attendanceData.filter(a => a.status === 'present').length;
    const late = attendanceData.filter(a => a.status === 'late').length;
    const absent = attendanceData.filter(a => a.status === 'absent').length;
    
    return {
      total,
      present,
      late,
      absent,
      percentage: ((present + late) / total * 100).toFixed(1)
    };
  };

  const stats = calculateAttendanceStats();

  // Generate calendar view data
  const generateCalendarData = () => {
    const calendar = [];
    const daysInMonth = 31;
    const startDay = 1; // Monday
    
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `2024-01-${i.toString().padStart(2, '0')}`;
      const dayAttendance = attendanceData.filter(a => a.date === dateStr);
      
      calendar.push({
        day: i,
        date: dateStr,
        attendance: dayAttendance,
        hasClasses: dayAttendance.length > 0
      });
    }
    
    return calendar;
  };

  const calendarData = generateCalendarData();

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Attendance Records</h2>
          <p className="text-gray-600 mt-1">Track your daily attendance and punctuality</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
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
          </div>
          
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
              <p className="text-2xl font-bold text-blue-600">{stats.percentage}%</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Present Days</p>
              <p className="text-2xl font-bold text-green-600">{stats.present}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.late}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Absent Days</p>
              <p className="text-2xl font-bold text-red-600">{stats.absent}</p>
            </div>
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Calendar View</h3>
        <div className="grid grid-cols-7 gap-2">
          {/* Calendar Headers */}
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
          
          {/* Calendar Days */}
          {calendarData.slice(0, 28).map((day) => {
            const hasAbsent = day.attendance.some(a => a.status === 'absent');
            const hasLate = day.attendance.some(a => a.status === 'late');
            const allPresent = day.attendance.length > 0 && day.attendance.every(a => a.status === 'present');
            
            let bgColor = 'bg-gray-50';
            if (hasAbsent) bgColor = 'bg-red-100';
            else if (hasLate) bgColor = 'bg-yellow-100';
            else if (allPresent) bgColor = 'bg-green-100';
            
            return (
              <div
                key={day.day}
                className={`p-2 text-center text-sm rounded-lg ${bgColor} ${
                  day.hasClasses ? 'cursor-pointer hover:opacity-80' : ''
                }`}
              >
                <div className="font-medium">{day.day}</div>
                {day.hasClasses && (
                  <div className="text-xs mt-1">
                    {day.attendance.length} classes
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Attendance Log */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Attendance Log</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(record.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(record.status)}
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subject-wise Attendance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject-wise Attendance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Mathematics', 'Physics', 'English', 'Chemistry', 'Biology', 'History'].map((subject) => {
            const subjectAttendance = attendanceData.filter(a => a.subject === subject);
            const subjectPresent = subjectAttendance.filter(a => a.status === 'present' || a.status === 'late').length;
            const subjectPercentage = subjectAttendance.length > 0 ? (subjectPresent / subjectAttendance.length * 100).toFixed(1) : '0';
            
            return (
              <div key={subject} className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">{subject}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{subjectPercentage}%</span>
                  <span className="text-sm text-gray-500">
                    {subjectPresent}/{subjectAttendance.length} classes
                  </span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${subjectPercentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AttendanceRecords;