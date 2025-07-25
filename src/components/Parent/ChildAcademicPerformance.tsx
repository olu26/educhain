import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { 
  TrendingUp, 
  Award, 
  BookOpen,
  Target,
  Filter,
  Download,
  Eye,
  Calendar
} from 'lucide-react';

const ChildAcademicPerformance = () => {
  const [selectedChild, setSelectedChild] = useState('emma');
  const [selectedTerm, setSelectedTerm] = useState('current');

  const children = [
    { id: 'emma', name: 'Emma Johnson', grade: 'JSS 3' },
    { id: 'john', name: 'John Johnson', grade: 'JSS 1' }
  ];

  const performanceData = {
    emma: {
      termProgress: [
        { term: 'First Term 2023', gpa: 3.4, average: 78 },
        { term: 'Second Term 2023', gpa: 3.6, average: 82 },
        { term: 'Third Term 2023', gpa: 3.7, average: 84 },
        { term: 'First Term 2024', gpa: 3.8, average: 86 }
      ],
      subjectPerformance: [
        { subject: 'Mathematics', currentGrade: 'A', score: 85, previousScore: 82, trend: 'up' },
        { subject: 'English', currentGrade: 'A-', score: 82, previousScore: 80, trend: 'up' },
        { subject: 'Physics', currentGrade: 'B+', score: 78, previousScore: 75, trend: 'up' },
        { subject: 'Chemistry', currentGrade: 'B', score: 75, previousScore: 78, trend: 'down' },
        { subject: 'Biology', currentGrade: 'A', score: 88, previousScore: 85, trend: 'up' },
        { subject: 'History', currentGrade: 'B+', score: 79, previousScore: 77, trend: 'up' }
      ],
      classRank: 5,
      totalStudents: 45,
      percentile: 89
    },
    john: {
      termProgress: [
        { term: 'First Term 2023', gpa: 3.0, average: 70 },
        { term: 'Second Term 2023', gpa: 3.2, average: 72 },
        { term: 'Third Term 2023', gpa: 3.3, average: 74 },
        { term: 'First Term 2024', gpa: 3.4, average: 75 }
      ],
      subjectPerformance: [
        { subject: 'Mathematics', currentGrade: 'B-', score: 72, previousScore: 68, trend: 'up' },
        { subject: 'English', currentGrade: 'B', score: 75, previousScore: 73, trend: 'up' },
        { subject: 'Science', currentGrade: 'C+', score: 68, previousScore: 70, trend: 'down' },
        { subject: 'Social Studies', currentGrade: 'B', score: 76, previousScore: 74, trend: 'up' },
        { subject: 'Basic Technology', currentGrade: 'B+', score: 78, previousScore: 75, trend: 'up' }
      ],
      classRank: 18,
      totalStudents: 40,
      percentile: 55
    }
  };

  const selectedChildData = performanceData[selectedChild as keyof typeof performanceData];

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

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="w-4 h-4 text-green-500" />
    ) : (
      <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
    );
  };

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Academic Performance</h2>
          <p className="text-gray-600 mt-1">Detailed analysis of your children's academic progress</p>
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
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="current">Current Term</option>
            <option value="previous">Previous Term</option>
            <option value="year">Full Year</option>
          </select>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download Report</span>
          </button>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current GPA</p>
              <p className="text-2xl font-bold text-blue-600">{selectedChildData.termProgress[selectedChildData.termProgress.length - 1].gpa}</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +0.1 from last term
              </p>
            </div>
            <Target className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Class Rank</p>
              <p className="text-2xl font-bold text-green-600">{selectedChildData.classRank}</p>
              <p className="text-xs text-gray-500">out of {selectedChildData.totalStudents} students</p>
            </div>
            <Award className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Percentile</p>
              <p className="text-2xl font-bold text-purple-600">{selectedChildData.percentile}th</p>
              <p className="text-xs text-purple-600">Top {100 - selectedChildData.percentile}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-orange-600">
                {selectedChildData.termProgress[selectedChildData.termProgress.length - 1].average}%
              </p>
              <p className="text-xs text-green-600">+2% improvement</p>
            </div>
            <BookOpen className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GPA Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">GPA Progress Over Time</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedChildData.termProgress}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="term" />
                <YAxis domain={[0, 4]} />
                <Tooltip />
                <Line type="monotone" dataKey="gpa" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Subject Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={selectedChildData.subjectPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Subject Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance Details</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Previous Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trend
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedChildData.subjectPerformance.map((subject, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-gray-400 mr-3" />
                        <div className="text-sm font-medium text-gray-900">{subject.subject}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getGradeColor(subject.currentGrade)}`}>
                        {subject.currentGrade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {subject.score}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {subject.previousScore}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-1">
                        {getTrendIcon(subject.trend)}
                        <span className={`text-sm ${subject.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          {Math.abs(subject.score - subject.previousScore)}%
                        </span>
                      </div>
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

      {/* Performance Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Strengths</h4>
            <ul className="text-sm text-green-700 space-y-1">
              {selectedChild === 'emma' ? (
                <>
                  <li>• Excellent performance in Mathematics and Biology</li>
                  <li>• Consistent improvement across all subjects</li>
                  <li>• Strong analytical and problem-solving skills</li>
                  <li>• Above average class performance</li>
                </>
              ) : (
                <>
                  <li>• Steady improvement in Mathematics</li>
                  <li>• Good performance in Basic Technology</li>
                  <li>• Consistent attendance and participation</li>
                  <li>• Positive attitude towards learning</li>
                </>
              )}
            </ul>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-orange-800 mb-2">Areas for Improvement</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              {selectedChild === 'emma' ? (
                <>
                  <li>• Chemistry performance needs attention</li>
                  <li>• Focus on practical applications</li>
                  <li>• Consider additional study time</li>
                  <li>• Seek help from chemistry teacher</li>
                </>
              ) : (
                <>
                  <li>• Science concepts need reinforcement</li>
                  <li>• Reading comprehension skills</li>
                  <li>• Time management during exams</li>
                  <li>• Regular homework completion</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <Calendar className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-800">Schedule Parent-Teacher Meeting</h4>
              <p className="text-sm text-blue-700">Discuss progress and strategies for continued improvement</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <BookOpen className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-800">Additional Study Resources</h4>
              <p className="text-sm text-green-700">Consider supplementary materials for challenging subjects</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
            <Award className="w-5 h-5 text-purple-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-purple-800">Celebrate Achievements</h4>
              <p className="text-sm text-purple-700">Acknowledge improvements and maintain motivation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildAcademicPerformance;