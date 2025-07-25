import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  GraduationCap,
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  BookOpen,
  Award
} from 'lucide-react';

const ClassStaffManagement = () => {
  const [activeTab, setActiveTab] = useState('classes');
  const [searchTerm, setSearchTerm] = useState('');

  const classes = [
    {
      id: '1',
      name: 'JSS 1A',
      grade: 'JSS 1',
      section: 'A',
      classTeacher: 'Mrs. Adebayo',
      students: 35,
      capacity: 40,
      subjects: ['Mathematics', 'English', 'Science', 'Social Studies'],
      classroom: 'Room 101',
      schedule: 'Monday - Friday, 8:00 AM - 2:00 PM'
    },
    {
      id: '2',
      name: 'JSS 1B',
      grade: 'JSS 1',
      section: 'B',
      classTeacher: 'Mr. Okafor',
      students: 38,
      capacity: 40,
      subjects: ['Mathematics', 'English', 'Science', 'Social Studies'],
      classroom: 'Room 102',
      schedule: 'Monday - Friday, 8:00 AM - 2:00 PM'
    },
    {
      id: '3',
      name: 'SS 2A',
      grade: 'SS 2',
      section: 'A',
      classTeacher: 'Dr. Ibrahim',
      students: 32,
      capacity: 35,
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
      classroom: 'Room 201',
      schedule: 'Monday - Friday, 8:00 AM - 3:00 PM'
    }
  ];

  const staff = [
    {
      id: '1',
      name: 'Dr. Sarah Smith',
      position: 'Mathematics Teacher',
      department: 'Science',
      email: 'sarah.smith@school.edu',
      phone: '+234-801-234-5678',
      subjects: ['Mathematics', 'Further Mathematics'],
      classes: ['JSS 1A', 'JSS 1B', 'SS 2A'],
      experience: '8 years',
      qualification: 'PhD Mathematics',
      joinDate: '2020-09-01',
      status: 'active'
    },
    {
      id: '2',
      name: 'Prof. Michael Davis',
      position: 'Physics Teacher',
      department: 'Science',
      email: 'michael.davis@school.edu',
      phone: '+234-803-567-8901',
      subjects: ['Physics'],
      classes: ['SS 1A', 'SS 2A', 'SS 3A'],
      experience: '12 years',
      qualification: 'MSc Physics',
      joinDate: '2018-01-15',
      status: 'active'
    },
    {
      id: '3',
      name: 'Ms. Jennifer Wilson',
      position: 'English Teacher',
      department: 'Languages',
      email: 'jennifer.wilson@school.edu',
      phone: '+234-805-123-4567',
      subjects: ['English Language', 'Literature'],
      classes: ['JSS 1A', 'JSS 2A', 'JSS 3A'],
      experience: '6 years',
      qualification: 'BA English Literature',
      joinDate: '2021-09-01',
      status: 'active'
    },
    {
      id: '4',
      name: 'Mrs. Fatima Adebayo',
      position: 'Class Teacher',
      department: 'Administration',
      email: 'fatima.adebayo@school.edu',
      phone: '+234-807-890-1234',
      subjects: ['Basic Science', 'Social Studies'],
      classes: ['JSS 1A'],
      experience: '10 years',
      qualification: 'BSc Education',
      joinDate: '2019-03-01',
      status: 'active'
    }
  ];

  const getClassUtilization = (students: number, capacity: number) => {
    const percentage = (students / capacity) * 100;
    if (percentage >= 90) return { color: 'text-red-600', bg: 'bg-red-100' };
    if (percentage >= 75) return { color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { color: 'text-green-600', bg: 'bg-green-100' };
  };

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.classTeacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStaff = staff.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Class & Staff Management</h1>
          <p className="text-gray-600 mt-1">Manage classes, teachers, and staff assignments</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>Add Class</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Add Staff</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Classes</p>
              <p className="text-2xl font-bold text-blue-600">{classes.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Staff</p>
              <p className="text-2xl font-bold text-green-600">{staff.length}</p>
            </div>
            <GraduationCap className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-purple-600">
                {classes.reduce((sum, cls) => sum + cls.students, 0)}
              </p>
            </div>
            <BookOpen className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Class Size</p>
              <p className="text-2xl font-bold text-orange-600">
                {Math.round(classes.reduce((sum, cls) => sum + cls.students, 0) / classes.length)}
              </p>
            </div>
            <Award className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('classes')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'classes'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Classes
            </button>
            <button
              onClick={() => setActiveTab('staff')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'staff'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Staff
            </button>
            <button
              onClick={() => setActiveTab('assignments')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'assignments'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Assignments
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Classes Tab */}
          {activeTab === 'classes' && (
            <div className="space-y-4">
              {filteredClasses.map((cls) => {
                const utilization = getClassUtilization(cls.students, cls.capacity);
                return (
                  <div key={cls.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{cls.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${utilization.bg} ${utilization.color}`}>
                            {cls.students}/{cls.capacity} students
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <GraduationCap className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">Class Teacher: {cls.classTeacher}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">Location: {cls.classroom}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">Schedule: {cls.schedule}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{cls.subjects.length} subjects</span>
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-sm text-gray-500">Subjects:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {cls.subjects.map((subject, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Staff Tab */}
          {activeTab === 'staff' && (
            <div className="space-y-4">
              {filteredStaff.map((member) => (
                <div key={member.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{member.position} • {member.department}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{member.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{member.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{member.qualification}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{member.experience} experience</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="text-sm text-gray-500">Subjects:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {member.subjects.map((subject, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                  {subject}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Classes:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {member.classes.map((cls, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800"
                                >
                                  {cls}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Assignments Tab */}
          {activeTab === 'assignments' && (
            <div className="space-y-6">
              <div className="text-center py-8">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Teacher-Class Assignments</h3>
                <p className="text-gray-500">Manage which teachers are assigned to which classes and subjects</p>
              </div>
              
              {/* Assignment Matrix would go here */}
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-center text-gray-600">Assignment matrix and scheduling tools coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassStaffManagement;