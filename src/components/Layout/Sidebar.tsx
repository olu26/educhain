import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { 
  Home,
  User,
  School,
  FileText,
  Calendar,
  BarChart3,
  Shield,
  Settings,
  Users,
  BookOpen,
  ArrowRightLeft,
  AlertTriangle,
  Trophy,
  Clock,
  MessageSquare,
  GraduationCap,
  Bell,
  HelpCircle,
  Award
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  const { user } = useAuth();

  const getMenuItems = () => {
    switch (user?.role) {
      case 'student':
        return [
          { id: 'overview', icon: Home, label: 'Dashboard' },
          { id: 'profile', icon: User, label: 'My Profile' },
          { id: 'academics', icon: BookOpen, label: 'Academic Records' },
          { id: 'performance', icon: BarChart3, label: 'Performance' },
          { id: 'attendance', icon: Calendar, label: 'Attendance' },
          { id: 'timetable', icon: Clock, label: 'Timetable' },
          { id: 'transfers', icon: ArrowRightLeft, label: 'Transfer History' },
          { id: 'transfer-request', icon: School, label: 'Request Transfer' },
          { id: 'assignments', icon: FileText, label: 'Assignments' },
          { id: 'grading', icon: Award, label: 'Grading System' },
          { id: 'nft-certificates', icon: Award, label: 'NFT Certificates' },
          { id: 'notifications', icon: Bell, label: 'Notifications' },
          { id: 'help', icon: HelpCircle, label: 'Help & Support' },
        ];
      
      case 'school':
        return [
          { id: 'overview', icon: Home, label: 'Dashboard' },
          { id: 'enrollment', icon: Users, label: 'Student Enrollment' },
          { id: 'records', icon: FileText, label: 'Student Records' },
          { id: 'transfers', icon: ArrowRightLeft, label: 'Transfer Requests' },
          { id: 'staff', icon: GraduationCap, label: 'Class & Staff' },
          { id: 'grading', icon: BarChart3, label: 'Grading System' },
          { id: 'analytics', icon: BarChart3, label: 'Analytics' },
          { id: 'security', icon: Shield, label: 'Security' },
        ];
      
      case 'parent':
        return [
          { id: 'overview', icon: Home, label: 'Dashboard' },
          { id: 'children', icon: Users, label: 'My Children' },
          { id: 'performance', icon: BarChart3, label: 'Academic Performance' },
          { id: 'attendance', icon: Calendar, label: 'Attendance' },
          { id: 'analytics', icon: BarChart3, label: 'Performance Graphs' },
          { id: 'transfers', icon: ArrowRightLeft, label: 'Transfer Tracking' },
          { id: 'transfer-requests', icon: School, label: 'Transfer Requests' },
          { id: 'communication', icon: MessageSquare, label: 'Communication' },
        ];
      
      case 'admin':
        return [
          { id: 'overview', icon: Home, label: 'Dashboard' },
          { id: 'schools', icon: School, label: 'School Onboarding' },
          { id: 'users', icon: Users, label: 'User Directory' },
          { id: 'analytics', icon: BarChart3, label: 'System Analytics' },
          { id: 'security', icon: Shield, label: 'Security Center' },
          { id: 'monitoring', icon: AlertTriangle, label: 'System Monitoring' },
          { id: 'access', icon: Settings, label: 'Access Control' },
        ];
      
      default:
        return [{ id: 'overview', icon: Home, label: 'Dashboard' }];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="bg-white w-full lg:w-64 min-h-screen border-r border-gray-200 lg:min-h-screen">
      <div className="p-4 sm:p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 ${isActive ? 'text-green-600' : 'text-gray-400'}`} />
                <span className="text-xs sm:text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;