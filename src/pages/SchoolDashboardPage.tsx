import React from 'react';
import { useAuth } from '../hooks/useAuth';
import DashboardStats from '../components/Dashboard/DashboardStats';
import RecentActivity from '../components/Dashboard/RecentActivity';
import AnalyticsChart from '../components/Dashboard/AnalyticsChart';
import TransferRequests from '../components/School/TransferRequests';
import StudentEnrollment from '../components/School/StudentEnrollment';
import StudentRecordsManagement from '../components/School/StudentRecordsManagement';
import ClassStaffManagement from '../components/School/ClassStaffManagement';
import GradingSystemSetup from '../components/School/GradingSystemSetup';
import SchoolAnalytics from '../components/School/SchoolAnalytics';
import SecurityCenter from '../components/Admin/SecurityCenter';

interface SchoolDashboardPageProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SchoolDashboardPage: React.FC<SchoolDashboardPageProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'enrollment', label: 'Student Enrollment' },
    { id: 'records', label: 'Student Records' },
    { id: 'transfers', label: 'Transfer Requests' },
    { id: 'staff', label: 'Class & Staff' },
    { id: 'grading', label: 'Grading System' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'security', label: 'Security' },
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
      case 'enrollment':
        return <StudentEnrollment />;
      case 'records':
        return <StudentRecordsManagement />;
      case 'transfers':
        return <TransferRequests />;
      case 'staff':
        return <ClassStaffManagement />;
      case 'grading':
        return <GradingSystemSetup />;
      case 'analytics':
        return <SchoolAnalytics />;
      case 'security':
        return <SecurityCenter />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">School Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your school efficiently, {user?.name}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
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
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboardPage;