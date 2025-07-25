import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginForm from './components/Auth/LoginForm';
import LandingPage from './components/LandingPage';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import StudentDashboardPage from './pages/StudentDashboardPage';
import SchoolDashboardPage from './pages/SchoolDashboardPage';
import ParentDashboardPage from './pages/ParentDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

const Dashboard = () => {
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState('overview');

  // Update currentPage when user changes (e.g., after login)
  useEffect(() => {
    if (user) {
      setCurrentPage('overview');
    }
  }, [user?.role]);

  const renderContent = () => {
    // Route based on user role and pass currentPage state
    if (user?.role === 'admin') {
      return <AdminDashboardPage activeTab={currentPage} setActiveTab={setCurrentPage} />;
    }
    
    if (user?.role === 'school') {
      return <SchoolDashboardPage activeTab={currentPage} setActiveTab={setCurrentPage} />;
    }
    
    if (user?.role === 'parent') {
      return <ParentDashboardPage activeTab={currentPage} setActiveTab={setCurrentPage} />;
    }
    
    // Default to student dashboard for students and fallback
    return <StudentDashboardPage activeTab={currentPage} setActiveTab={setCurrentPage} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const AppContent = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/*" element={<LandingPage />} />
      <Route path="/demo" element={
        !user ? <LoginForm /> : <Dashboard />
      } />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;