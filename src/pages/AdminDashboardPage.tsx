import React from 'react';
import { useAuth } from '../hooks/useAuth';
import DashboardStats from '../components/Dashboard/DashboardStats';
import RecentActivity from '../components/Dashboard/RecentActivity';
import AnalyticsChart from '../components/Dashboard/AnalyticsChart';
import SecurityCenter from '../components/Admin/SecurityCenter';
import SchoolOnboarding from '../components/Admin/SchoolOnboarding';
import UserDirectory from '../components/Admin/UserDirectory';
import SystemMonitoring from '../components/Admin/SystemMonitoring';
import AccessControl from '../components/Admin/AccessControl';
import SystemAnalytics from '../components/Admin/SystemAnalytics';

interface AdminDashboardPageProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'schools', label: 'Schools' },
    { id: 'users', label: 'Users' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'security', label: 'Security' },
    { id: 'monitoring', label: 'Monitoring' },
    { id: 'access', label: 'Access' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity />
              <AnalyticsChart />
            </div>
          </div>
        );
      case 'schools':
        return <SchoolOnboarding />;
      case 'users':
        return <UserDirectory />;
      case 'analytics':
        return <SystemAnalytics />;
      case 'security':
        return <SecurityCenter />;
      case 'monitoring':
        return <SystemMonitoring />;
      case 'access':
        return <AccessControl />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Platform administration and oversight, {user?.name}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-2 sm:space-x-8 px-4 sm:px-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 sm:px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 sm:p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;