import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Target, Award, AlertCircle } from 'lucide-react';

const PerformanceAnalytics = () => {
  const performanceData = [
    { term: 'Term 1', gpa: 3.2, attendance: 85 },
    { term: 'Term 2', gpa: 3.5, attendance: 88 },
    { term: 'Term 3', gpa: 3.7, attendance: 92 },
    { term: 'Current', gpa: 3.8, attendance: 95 },
  ];

  const subjectPerformance = [
    { subject: 'Math', score: 85, improvement: 5 },
    { subject: 'Physics', score: 78, improvement: -2 },
    { subject: 'English', score: 82, improvement: 8 },
    { subject: 'Chemistry', score: 75, improvement: 3 },
    { subject: 'Biology', score: 88, improvement: 12 },
    { subject: 'History', score: 79, improvement: 1 },
  ];

  const strengthsWeaknesses = [
    { subject: 'Mathematics', A: 85, fullMark: 100 },
    { subject: 'Physics', A: 78, fullMark: 100 },
    { subject: 'English', A: 82, fullMark: 100 },
    { subject: 'Chemistry', A: 75, fullMark: 100 },
    { subject: 'Biology', A: 88, fullMark: 100 },
    { subject: 'History', A: 79, fullMark: 100 },
  ];

  const getImprovementColor = (improvement: number) => {
    if (improvement > 5) return 'text-green-600';
    if (improvement > 0) return 'text-blue-600';
    return 'text-red-600';
  };

  const getImprovementIcon = (improvement: number) => {
    if (improvement > 0) return <TrendingUp className="w-4 h-4" />;
    return <AlertCircle className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Performance Analytics</h2>
          <p className="text-gray-600 mt-1">Detailed analysis of your academic performance and progress</p>
        </div>
      </div>

      {/* Performance Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current GPA</p>
              <p className="text-2xl font-bold text-blue-600">3.8</p>
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
              <p className="text-2xl font-bold text-green-600">5th</p>
              <p className="text-xs text-gray-500">out of 45 students</p>
            </div>
            <Award className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Percentile</p>
              <p className="text-2xl font-bold text-purple-600">89th</p>
              <p className="text-xs text-purple-600">Top 11%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Improvement</p>
              <p className="text-2xl font-bold text-orange-600">+12%</p>
              <p className="text-xs text-orange-600">This semester</p>
            </div>
            <TrendingUp className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">GPA Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="term" />
                <YAxis domain={[0, 4]} />
                <Tooltip />
                <Line type="monotone" dataKey="gpa" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectPerformance}>
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

      {/* Strengths and Weaknesses Radar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Strengths & Weaknesses Analysis</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={strengthsWeaknesses}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Performance" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Subject Improvement Tracking */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Improvement Tracking</h3>
        <div className="space-y-4">
          {subjectPerformance.map((subject) => (
            <div key={subject.subject} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">{subject.score}</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{subject.subject}</h4>
                  <p className="text-sm text-gray-500">Current Score: {subject.score}%</p>
                </div>
              </div>
              
              <div className={`flex items-center space-x-2 ${getImprovementColor(subject.improvement)}`}>
                {getImprovementIcon(subject.improvement)}
                <span className="font-medium">
                  {subject.improvement > 0 ? '+' : ''}{subject.improvement}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Strengths</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Excellent performance in Biology (88%)</li>
              <li>• Consistent improvement in Mathematics</li>
              <li>• Strong attendance record (95%)</li>
              <li>• Above average in most subjects</li>
            </ul>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-orange-800 mb-2">Areas for Improvement</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Focus needed in Chemistry (75%)</li>
              <li>• Physics performance declined slightly</li>
              <li>• Consider additional study time</li>
              <li>• Seek help from teachers when needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalytics;