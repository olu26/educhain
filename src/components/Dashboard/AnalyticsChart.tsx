import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useAuth } from '../../hooks/useAuth';

const AnalyticsChart = () => {
  const { user } = useAuth();

  const getChartData = () => {
    switch (user?.role) {
      case 'student':
        return {
          title: 'GPA Trend',
          data: [
            { name: 'Sep', value: 3.4 },
            { name: 'Oct', value: 3.6 },
            { name: 'Nov', value: 3.5 },
            { name: 'Dec', value: 3.7 },
            { name: 'Jan', value: 3.8 },
          ],
          type: 'line'
        };
      
      case 'school':
        return {
          title: 'Student Enrollment Trend',
          data: [
            { name: 'Sep', value: 1200 },
            { name: 'Oct', value: 1220 },
            { name: 'Nov', value: 1235 },
            { name: 'Dec', value: 1240 },
            { name: 'Jan', value: 1247 },
          ],
          type: 'line'
        };
      
      case 'parent':
        return {
          title: 'Children\'s Performance',
          data: [
            { name: 'Emma', value: 3.8 },
            { name: 'John', value: 3.4 },
          ],
          type: 'bar'
        };
      
      case 'admin':
        return {
          title: 'System Performance',
          data: [
            { name: 'Mon', value: 99.8 },
            { name: 'Tue', value: 99.9 },
            { name: 'Wed', value: 99.7 },
            { name: 'Thu', value: 99.9 },
            { name: 'Fri', value: 99.9 },
          ],
          type: 'line'
        };
      
      default:
        return { title: 'Analytics', data: [], type: 'line' };
    }
  };

  const chartConfig = getChartData();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{chartConfig.title}</h3>
      <div className="h-48 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          {chartConfig.type === 'line' ? (
            <LineChart data={chartConfig.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          ) : (
            <BarChart data={chartConfig.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;