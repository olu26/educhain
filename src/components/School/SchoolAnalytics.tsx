import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  Calendar,
  Target,
  Activity,
  CheckCircle
} from 'lucide-react';

const SchoolAnalytics = () => {
  const enrollmentData = [
    { month: 'Jan', students: 1200, newEnrollments: 45, transfers: 12 },
    { month: 'Feb', students: 1220, newEnrollments: 35, transfers: 15 },
    { month: 'Mar', students: 1235, newEnrollments: 28, transfers: 13 },
    { month: 'Apr', students: 1240, newEnrollments: 22, transfers: 17 },
    { month: 'May', students: 1247, newEnrollments: 18, transfers: 11 },
    { month: 'Jun', students: 1250, newEnrollments: 15, transfers: 12 },
  ];

  const performanceData = [
    { subject: 'Mathematics', average: 78, passRate: 85 },
    { subject: 'English', average: 82, passRate: 92 },
    { subject: 'Physics', average: 75, passRate: 78 },
    { subject: 'Chemistry', average: 73, passRate: 80 },
    { subject: 'Biology', average: 80, passRate: 88 },
    { subject: 'History', average: 79, passRate: 86 },
  ];

  const gradeDistribution = [
    { grade: 'A', count: 245, percentage: 19.6, color: '#10B981' },
    { grade: 'B', count: 380, percentage: 30.4, color: '#3B82F6' },
    { grade: 'C', count: 420, percentage: 33.6, color: '#F59E0B' },
    { grade: 'D', count: 150, percentage: 12.0, color: '#EF4444' },
    { grade: 'F', count: 55, percentage: 4.4, color: '#6B7280' },
  ];

  const attendanceData = [
    { month: 'Jan', attendance: 94 },
    { month: 'Feb', attendance: 92 },
    { month: 'Mar', attendance: 95 },
    { month: 'Apr', attendance: 93 },
    { month: 'May', attendance: 96 },
    { month: 'Jun', attendance: 94 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">School Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights into school performance and trends</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-blue-600">1,250</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +4.2% this term
              </p>
            </div>
            <Users className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Performance</p>
              <p className="text-2xl font-bold text-green-600">78.2%</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2.1% from last term
              </p>
            </div>
            <Award className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
              <p className="text-2xl font-bold text-purple-600">94.5%</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <CheckCircle className="w-3 h-3 mr-1" />
                Above target
              </p>
            </div>
            <Calendar className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pass Rate</p>
              <p className="text-2xl font-bold text-orange-600">85.6%</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <Target className="w-3 h-3 mr-1" />
                +3.2% improvement
              </p>
            </div>
            <BookOpen className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enrollment Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={2} name="Total Students" />
                <Line type="monotone" dataKey="newEnrollments" stroke="#10B981" strokeWidth={2} name="New Enrollments" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="average" fill="#8B5CF6" name="Average Score" />
                <Bar dataKey="passRate" fill="#10B981" name="Pass Rate %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Grade Distribution and Attendance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grade Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Grade Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={gradeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ grade, percentage }) => `${grade}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Attendance Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[85, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="attendance" stroke="#F59E0B" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Top Performing Classes</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">SS 2A</span>
                <span className="text-sm font-medium text-green-600">82.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">JSS 3B</span>
                <span className="text-sm font-medium text-green-600">81.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">SS 1A</span>
                <span className="text-sm font-medium text-green-600">79.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">JSS 2A</span>
                <span className="text-sm font-medium text-green-600">78.9%</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Subject Strengths</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">English Language</span>
                <span className="text-sm font-medium text-blue-600">92% pass rate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Biology</span>
                <span className="text-sm font-medium text-blue-600">88% pass rate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">History</span>
                <span className="text-sm font-medium text-blue-600">86% pass rate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Mathematics</span>
                <span className="text-sm font-medium text-blue-600">85% pass rate</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Areas for Improvement</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Physics</span>
                <span className="text-sm font-medium text-orange-600">78% pass rate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Chemistry</span>
                <span className="text-sm font-medium text-orange-600">80% pass rate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">JSS 1C Attendance</span>
                <span className="text-sm font-medium text-red-600">89% average</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Late Submissions</span>
                <span className="text-sm font-medium text-red-600">12% increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Actions</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
            <Activity className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-800">Improve Science Performance</h4>
              <p className="text-sm text-yellow-700">Consider additional lab sessions for Physics and Chemistry</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
            <Target className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-800">Attendance Monitoring</h4>
              <p className="text-sm text-blue-700">Implement targeted interventions for JSS 1C class</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-800">Maintain Excellence</h4>
              <p className="text-sm text-green-700">Continue successful strategies in English and Biology departments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolAnalytics;