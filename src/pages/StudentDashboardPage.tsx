import React from 'react';
import { useAuth } from '../hooks/useAuth';
import DashboardStats from '../components/Dashboard/DashboardStats';
import RecentActivity from '../components/Dashboard/RecentActivity';
import AnalyticsChart from '../components/Dashboard/AnalyticsChart';
import StudentProfile from '../components/Student/StudentProfile';
import AcademicRecords from '../components/Student/AcademicRecords';
import PerformanceAnalytics from '../components/Student/PerformanceAnalytics';
import AttendanceRecords from '../components/Student/AttendanceRecords';
import TransferHistory from '../components/Student/TransferHistory';
import TransferRequest from '../components/Student/TransferRequest';
import ClassTimetable from '../components/Student/ClassTimetable';
import Assignments from '../components/Student/Assignments';
import GradingSystemExplanation from '../components/Student/GradingSystemExplanation';
import StudentNotifications from '../components/Student/StudentNotifications';
import StudentHelpSupport from '../components/Student/StudentHelpSupport';

interface StudentDashboardPageProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const StudentDashboardPage: React.FC<StudentDashboardPageProps> = ({ activeTab, setActiveTab }) => {
  const { user } = useAuth();

  const tabs = [
    { id: 'overview', label: 'Dashboard' },
    { id: 'profile', label: 'My Profile' },
    { id: 'academics', label: 'Academic Records' },
    { id: 'performance', label: 'Performance' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'timetable', label: 'Timetable' },
    { id: 'transfers', label: 'Transfer History' },
    { id: 'transfer-request', label: 'Request Transfer' },
    { id: 'assignments', label: 'Assignments' },
    { id: 'grading', label: 'Grading System' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'help', label: 'Help & Support' },
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
      case 'profile':
        return <StudentProfile />;
      case 'academics':
        return <AcademicRecords />;
      case 'performance':
        return <PerformanceAnalytics />;
      case 'attendance':
        return <AttendanceRecords />;
      case 'timetable':
        return <ClassTimetable />;
      case 'transfers':
        return <TransferHistory />;
      case 'transfer-request':
        return <TransferRequest />;
      case 'assignments':
        return <Assignments />;
      case 'grading':
        return <GradingSystemExplanation />;
      case 'notifications':
        return <StudentNotifications />;
      case 'help':
        return <StudentHelpSupport />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
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

export default StudentDashboardPage;