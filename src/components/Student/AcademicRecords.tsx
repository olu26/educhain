import React, { useState } from 'react';
import { mockStudents } from '../../data/mockData';
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Calendar,
  FileText,
  Download,
  Eye,
  Filter
} from 'lucide-react';

const AcademicRecords = () => {
  const [selectedTerm, setSelectedTerm] = useState('current');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const student = mockStudents[0];

  const academicRecords = [
    {
      id: '1',
      subject: 'Mathematics',
      term: 'First Term',
      year: '2024',
      grade: 'A',
      score: 85,
      gpa: 4.0,
      teacher: 'Dr. Smith',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '2',
      subject: 'Physics',
      term: 'First Term',
      year: '2024',
      grade: 'B+',
      score: 78,
      gpa: 3.5,
      teacher: 'Prof. Davis',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '3',
      subject: 'English',
      term: 'First Term',
      year: '2024',
      grade: 'A-',
      score: 82,
      gpa: 3.7,
      teacher: 'Ms. Wilson',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '4',
      subject: 'Chemistry',
      term: 'First Term',
      year: '2024',
      grade: 'B',
      score: 75,
      gpa: 3.0,
      teacher: 'Dr. Johnson',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '5',
      subject: 'Biology',
      term: 'First Term',
      year: '2024',
      grade: 'A',
      score: 88,
      gpa: 4.0,
      teacher: 'Prof. Brown',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '6',
      subject: 'History',
      term: 'First Term',
      year: '2024',
      grade: 'B+',
      score: 79,
      gpa: 3.5,
      teacher: 'Ms. Taylor',
      date: '2024-01-15',
      verified: true
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
      case 'C+':
        return 'bg-yellow-100 text-yellow-800';
      case 'C':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const calculateOverallGPA = () => {
    const totalGPA = academicRecords.reduce((sum, record) => sum + record.gpa, 0);
    return (totalGPA / academicRecords.length).toFixed(2);
  };

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Academic Records</h2>
          <p className="text-gray-600 mt-1">View your complete academic history and performance</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="current">Current Term</option>
              <option value="first">First Term 2024</option>
              <option value="second">Second Term 2023</option>
              <option value="third">Third Term 2023</option>
            </select>
          </div>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download Transcript</span>
          </button>
        </div>
      </div>

      {/* Academic Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overall GPA</p>
              <p className="text-2xl font-bold text-blue-600">{calculateOverallGPA()}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Subjects</p>
              <p className="text-2xl font-bold text-green-600">{academicRecords.length}</p>
            </div>
            <BookOpen className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">A Grades</p>
              <p className="text-2xl font-bold text-purple-600">
                {academicRecords.filter(r => r.grade.startsWith('A')).length}
              </p>
            </div>
            <Award className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Verified Records</p>
              <p className="text-2xl font-bold text-orange-600">
                {academicRecords.filter(r => r.verified).length}
              </p>
            </div>
            <FileText className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Academic Records Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    GPA
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teacher
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {academicRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{record.subject}</div>
                          <div className="text-sm text-gray-500">{record.term} {record.year}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(record.grade)}`}>
                        {record.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.score}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.gpa.toFixed(1)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.teacher}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.verified ? (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></div>
                          Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-1"></div>
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Download className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {['A', 'A-', 'B+', 'B', 'C+', 'C'].map((grade) => {
            const count = academicRecords.filter(r => r.grade === grade).length;
            const percentage = ((count / academicRecords.length) * 100).toFixed(1);
            
            return (
              <div key={grade} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{count}</div>
                <div className="text-sm text-gray-600">{grade} Grade</div>
                <div className="text-xs text-gray-500">{percentage}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AcademicRecords;