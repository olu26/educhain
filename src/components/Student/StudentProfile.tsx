import React from 'react';
import { mockStudents } from '../../data/mockData';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  Edit,
  FileText,
  Clock
} from 'lucide-react';

const StudentProfile = () => {
  const student = mockStudents[0]; // Using first mock student

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                {student.personalInfo.firstName} {student.personalInfo.lastName}
              </h1>
              <p className="text-blue-100">Student ID: {student.studentId}</p>
              <p className="text-blue-100">Grade {student.academicInfo.grade}</p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Edit className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{student.personalInfo.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{student.personalInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium">{student.personalInfo.dateOfBirth}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{student.personalInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Verification */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Profile Verified</span>
              </div>
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Records Encrypted</span>
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">Blockchain Synced</span>
              </div>
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Academic Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">{student.academicInfo.gpa}</p>
            <p className="text-sm text-blue-800">Current GPA</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">{student.academicInfo.subjects.length}</p>
            <p className="text-sm text-green-800">Active Subjects</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">{student.extracurriculars.length}</p>
            <p className="text-sm text-purple-800">Activities</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-2xl font-bold text-orange-600">95%</p>
            <p className="text-sm text-orange-800">Attendance</p>
          </div>
        </div>
      </div>

      {/* Current Subjects */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {student.academicInfo.subjects.map((subject) => (
            <div key={subject.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">{subject.name}</h3>
              <p className="text-sm text-gray-500">{subject.code}</p>
              <p className="text-sm text-gray-600 mt-1">Credits: {subject.credits}</p>
              <p className="text-sm text-gray-600">Teacher: {subject.teacher}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;