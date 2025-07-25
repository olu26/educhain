import React, { useState } from 'react';
import { Clock, MapPin, User, Calendar, Filter } from 'lucide-react';

const ClassTimetable = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');

  const timetableData = {
    Monday: [
      { time: '08:00 - 08:45', subject: 'Mathematics', teacher: 'Dr. Smith', room: 'Room 101', type: 'core' },
      { time: '08:45 - 09:30', subject: 'Physics', teacher: 'Prof. Davis', room: 'Lab 1', type: 'core' },
      { time: '09:30 - 09:45', subject: 'Break', teacher: '', room: '', type: 'break' },
      { time: '09:45 - 10:30', subject: 'English', teacher: 'Ms. Wilson', room: 'Room 205', type: 'core' },
      { time: '10:30 - 11:15', subject: 'Chemistry', teacher: 'Dr. Johnson', room: 'Lab 2', type: 'core' },
      { time: '11:15 - 12:00', subject: 'Biology', teacher: 'Prof. Brown', room: 'Lab 3', type: 'core' },
      { time: '12:00 - 13:00', subject: 'Lunch Break', teacher: '', room: '', type: 'break' },
      { time: '13:00 - 13:45', subject: 'History', teacher: 'Ms. Taylor', room: 'Room 301', type: 'elective' },
      { time: '13:45 - 14:30', subject: 'Physical Education', teacher: 'Coach Williams', room: 'Gymnasium', type: 'elective' },
    ],
    Tuesday: [
      { time: '08:00 - 08:45', subject: 'Physics', teacher: 'Prof. Davis', room: 'Lab 1', type: 'core' },
      { time: '08:45 - 09:30', subject: 'Mathematics', teacher: 'Dr. Smith', room: 'Room 101', type: 'core' },
      { time: '09:30 - 09:45', subject: 'Break', teacher: '', room: '', type: 'break' },
      { time: '09:45 - 10:30', subject: 'Chemistry', teacher: 'Dr. Johnson', room: 'Lab 2', type: 'core' },
      { time: '10:30 - 11:15', subject: 'English', teacher: 'Ms. Wilson', room: 'Room 205', type: 'core' },
      { time: '11:15 - 12:00', subject: 'Computer Science', teacher: 'Mr. Anderson', room: 'Computer Lab', type: 'elective' },
      { time: '12:00 - 13:00', subject: 'Lunch Break', teacher: '', room: '', type: 'break' },
      { time: '13:00 - 13:45', subject: 'Art', teacher: 'Ms. Garcia', room: 'Art Studio', type: 'elective' },
      { time: '13:45 - 14:30', subject: 'Study Hall', teacher: 'Various', room: 'Library', type: 'study' },
    ],
    Wednesday: [
      { time: '08:00 - 08:45', subject: 'Biology', teacher: 'Prof. Brown', room: 'Lab 3', type: 'core' },
      { time: '08:45 - 09:30', subject: 'English', teacher: 'Ms. Wilson', room: 'Room 205', type: 'core' },
      { time: '09:30 - 09:45', subject: 'Break', teacher: '', room: '', type: 'break' },
      { time: '09:45 - 10:30', subject: 'Mathematics', teacher: 'Dr. Smith', room: 'Room 101', type: 'core' },
      { time: '10:30 - 11:15', subject: 'History', teacher: 'Ms. Taylor', room: 'Room 301', type: 'elective' },
      { time: '11:15 - 12:00', subject: 'Physics', teacher: 'Prof. Davis', room: 'Lab 1', type: 'core' },
      { time: '12:00 - 13:00', subject: 'Lunch Break', teacher: '', room: '', type: 'break' },
      { time: '13:00 - 13:45', subject: 'Music', teacher: 'Mr. Rodriguez', room: 'Music Room', type: 'elective' },
      { time: '13:45 - 14:30', subject: 'Debate Club', teacher: 'Ms. Wilson', room: 'Room 205', type: 'activity' },
    ],
    Thursday: [
      { time: '08:00 - 08:45', subject: 'Chemistry', teacher: 'Dr. Johnson', room: 'Lab 2', type: 'core' },
      { time: '08:45 - 09:30', subject: 'Biology', teacher: 'Prof. Brown', room: 'Lab 3', type: 'core' },
      { time: '09:30 - 09:45', subject: 'Break', teacher: '', room: '', type: 'break' },
      { time: '09:45 - 10:30', subject: 'Physics', teacher: 'Prof. Davis', room: 'Lab 1', type: 'core' },
      { time: '10:30 - 11:15', subject: 'Mathematics', teacher: 'Dr. Smith', room: 'Room 101', type: 'core' },
      { time: '11:15 - 12:00', subject: 'English', teacher: 'Ms. Wilson', room: 'Room 205', type: 'core' },
      { time: '12:00 - 13:00', subject: 'Lunch Break', teacher: '', room: '', type: 'break' },
      { time: '13:00 - 13:45', subject: 'Geography', teacher: 'Mr. Thompson', room: 'Room 302', type: 'elective' },
      { time: '13:45 - 14:30', subject: 'Library Period', teacher: 'Ms. Lee', room: 'Library', type: 'study' },
    ],
    Friday: [
      { time: '08:00 - 08:45', subject: 'English', teacher: 'Ms. Wilson', room: 'Room 205', type: 'core' },
      { time: '08:45 - 09:30', subject: 'Mathematics', teacher: 'Dr. Smith', room: 'Room 101', type: 'core' },
      { time: '09:30 - 09:45', subject: 'Break', teacher: '', room: '', type: 'break' },
      { time: '09:45 - 10:30', subject: 'History', teacher: 'Ms. Taylor', room: 'Room 301', type: 'elective' },
      { time: '10:30 - 11:15', subject: 'Physical Education', teacher: 'Coach Williams', room: 'Gymnasium', type: 'elective' },
      { time: '11:15 - 12:00', subject: 'Assembly', teacher: 'Principal', room: 'Main Hall', type: 'activity' },
      { time: '12:00 - 13:00', subject: 'Lunch Break', teacher: '', room: '', type: 'break' },
      { time: '13:00 - 13:45', subject: 'Career Guidance', teacher: 'Ms. Parker', room: 'Counseling Room', type: 'guidance' },
      { time: '13:45 - 14:30', subject: 'Free Period', teacher: '', room: '', type: 'free' },
    ],
  };

  const getSubjectColor = (type: string) => {
    switch (type) {
      case 'core':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'elective':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'activity':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'study':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'guidance':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'break':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      case 'free':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Class Timetable</h2>
          <p className="text-gray-600 mt-1">Your weekly class schedule and room assignments</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="current">Current Week</option>
              <option value="next">Next Week</option>
              <option value="exam">Exam Schedule</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Daily Classes</p>
              <p className="text-2xl font-bold text-blue-600">7-9</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Core Subjects</p>
              <p className="text-2xl font-bold text-green-600">6</p>
            </div>
            <Clock className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Electives</p>
              <p className="text-2xl font-bold text-purple-600">4</p>
            </div>
            <User className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Weekly Hours</p>
              <p className="text-2xl font-bold text-orange-600">35</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Weekly Timetable */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Schedule</h3>
          
          <div className="overflow-x-auto">
            <div className="grid grid-cols-6 gap-4 min-w-full">
              {/* Time column header */}
              <div className="font-medium text-gray-700 text-sm">Time</div>
              
              {/* Day headers */}
              {days.map((day) => (
                <div key={day} className="font-medium text-gray-700 text-sm text-center">
                  {day}
                </div>
              ))}
              
              {/* Time slots */}
              {timetableData.Monday.map((_, timeIndex) => (
                <React.Fragment key={timeIndex}>
                  {/* Time column */}
                  <div className="text-xs text-gray-500 py-2">
                    {timetableData.Monday[timeIndex].time}
                  </div>
                  
                  {/* Classes for each day */}
                  {days.map((day) => {
                    const classData = timetableData[day as keyof typeof timetableData][timeIndex];
                    
                    if (classData.type === 'break' || classData.type === 'free') {
                      return (
                        <div key={`${day}-${timeIndex}`} className="py-2">
                          <div className={`p-2 rounded-lg text-center text-xs ${getSubjectColor(classData.type)}`}>
                            {classData.subject}
                          </div>
                        </div>
                      );
                    }
                    
                    return (
                      <div key={`${day}-${timeIndex}`} className="py-2">
                        <div className={`p-3 rounded-lg border ${getSubjectColor(classData.type)}`}>
                          <div className="font-medium text-sm mb-1">{classData.subject}</div>
                          {classData.teacher && (
                            <div className="flex items-center text-xs mb-1">
                              <User className="w-3 h-3 mr-1" />
                              {classData.teacher}
                            </div>
                          )}
                          {classData.room && (
                            <div className="flex items-center text-xs">
                              <MapPin className="w-3 h-3 mr-1" />
                              {classData.room}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule (Monday)</h3>
        <div className="space-y-3">
          {timetableData.Monday.filter(item => item.type !== 'break').map((classItem, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium text-gray-900 min-w-[100px]">
                  {classItem.time.split(' - ')[0]}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{classItem.subject}</div>
                  <div className="text-sm text-gray-500">
                    {classItem.teacher} • {classItem.room}
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSubjectColor(classItem.type)}`}>
                {classItem.type.charAt(0).toUpperCase() + classItem.type.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Legend */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
            <span className="text-sm text-gray-700">Core Subjects</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
            <span className="text-sm text-gray-700">Electives</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded"></div>
            <span className="text-sm text-gray-700">Activities</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-100 border border-orange-200 rounded"></div>
            <span className="text-sm text-gray-700">Study Periods</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassTimetable;