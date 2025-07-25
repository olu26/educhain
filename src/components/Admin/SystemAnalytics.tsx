import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { 
  TrendingUp, 
  Users, 
  School, 
  ArrowRightLeft,
  Clock,
  Shield,
  Activity,
  Database
} from 'lucide-react';

const SystemAnalytics = () => {
  const userGrowthData = [
    { month: 'Jan', students: 1200, schools: 15, parents: 800 },
    { month: 'Feb', students: 1350, schools: 17, parents: 900 },
    { month: 'Mar', students: 1500, schools: 19, parents: 1000 },
    { month: 'Apr', students: 1680, schools: 21, parents: 1120 },
    { month: 'May', students: 1850, schools: 23, parents: 1230 },
    { month: 'Jun', students: 2000, schools: 25, parents: 1350 },
  ];

  const transferTrendsData = [
    { month: 'Jan', transfers: 45 },
    { month: 'Feb', transfers: 52 },
    { month: 'Mar', transfers: 38 },
    { month: 'Apr', transfers: 61 },
    { month: 'May', transfers: 55 },
    { month: 'Jun', transfers: 48 },
  ];

  const schoolDistributionData = [
    { name: 'Lagos', value: 8, color: '#3B82F6' },
    { name: 'Abuja', value: 6, color: '#10B981' },
    { name: 'Kano', value: 4, color: '#F59E0B' },
    { name: 'Port Harcourt', value: 3, color: '#EF4444' },
    { name: 'Ibadan', value: 4, color: '#8B5CF6' },
  ];

  const performanceMetrics = [
    { metric: 'API Response Time', value: '1.2s', trend: 'down', color: 'green' },
    { metric: 'System Uptime', value: '99.9%', trend: 'up', color: 'green' },
    { metric: 'Error Rate', value: '0.1%', trend: 'down', color: 'green' },
    { metric: 'Data Sync Success', value: '99.8%', trend: 'up', color: 'green' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">System Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive platform performance and usage analytics</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-lg sm:text-2xl font-bold text-blue-600">15,421</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% this month
              </p>
            </div>
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Active Schools</p>
              <p className="text-lg sm:text-2xl font-bold text-green-600">25</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2 this quarter
              </p>
            </div>
            <School className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Monthly Transfers</p>
              <p className="text-lg sm:text-2xl font-bold text-purple-600">48</p>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1 rotate-180" />
                -13% from last month
              </p>
            </div>
            <ArrowRightLeft className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">System Health</p>
              <p className="text-lg sm:text-2xl font-bold text-orange-600">99.9%</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <Shield className="w-3 h-3 mr-1" />
                All systems operational
              </p>
            </div>
            <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth Trends</h3>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={2} name="Students" />
                <Line type="monotone" dataKey="parents" stroke="#10B981" strokeWidth={2} name="Parents" />
                <Line type="monotone" dataKey="schools" stroke="#F59E0B" strokeWidth={2} name="Schools" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transfer Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Transfer Activity</h3>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={transferTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="transfers" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* School Distribution and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* School Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Schools by Location</h3>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={schoolDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {schoolDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Performance</h3>
          <div className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    metric.color === 'green' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className="font-medium text-gray-900 text-sm sm:text-base">{metric.metric}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{metric.value}</span>
                  <TrendingUp className={`w-4 h-4 ${
                    metric.trend === 'up' ? 'text-green-500' : 'text-red-500 rotate-180'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">User Engagement</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Daily Active Users</span>
                <span className="font-medium">8,234</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Weekly Active Users</span>
                <span className="font-medium">12,456</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Monthly Active Users</span>
                <span className="font-medium">15,421</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Average Session Duration</span>
                <span className="font-medium">24 minutes</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Data & Storage</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Records</span>
                <span className="font-medium">1.2M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Storage Used</span>
                <span className="font-medium">2.4 TB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Backup Success Rate</span>
                <span className="font-medium">100%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Data Integrity</span>
                <span className="font-medium">99.99%</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Security & Compliance</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Security Incidents</span>
                <span className="font-medium">0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Failed Login Attempts</span>
                <span className="font-medium">23</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Compliance Score</span>
                <span className="font-medium">98%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Audit Trail Coverage</span>
                <span className="font-medium">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemAnalytics;