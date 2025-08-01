import React from 'react';
import { useAuth } from '../hooks/useAuth';
import DashboardStats from '../components/Dashboard/DashboardStats';
import RecentActivity from '../components/Dashboard/RecentActivity';
import AnalyticsChart from '../components/Dashboard/AnalyticsChart';
import ChildOverview from '../components/Parent/ChildOverview';
import ChildAcademicPerformance from '../components/Parent/ChildAcademicPerformance';
import ChildAttendanceRecords from '../components/Parent/ChildAttendanceRecords';
import ChildPerformanceGraphs from '../components/Parent/ChildPerformanceGraphs';
import TransferTracking from '../components/Parent/TransferTracking';
import TransferRequestManagement from '../components/Parent/TransferRequestManagement';
import SchoolCommunication from '../components/Parent/SchoolCommunication';

interface ParentDashboardPageProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ParentDashboardPage: React.FC<ParentDashboardPageProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();

  const tabs = [
    { id: 'overview', label: 'Dashboard' },
    { id: 'children', label: 'My Children' },
    { id: 'performance', label: 'Academic Performance' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'analytics', label: 'Performance Graphs' },
    { id: 'transfers', label: 'Transfer Tracking' },
    { id: 'transfer-requests', label: 'Transfer Requests' },
    { id: 'communication', label: 'Communication' },
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
      case 'children':
        return <ChildOverview />;
      case 'performance':
        return <ChildAcademicPerformance />;
      case 'attendance':
        return <ChildAttendanceRecords />;
      case 'analytics':
        return <ChildPerformanceGraphs />;
      case 'transfers':
        return <TransferTracking />;
      case 'transfer-requests':
        return <TransferRequestManagement />;
      case 'communication':
        return <SchoolCommunication />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor your children's progress, {user?.name}</p>
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

export default ParentDashboardPage;