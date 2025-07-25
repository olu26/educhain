import React, { useState } from 'react';
import { 
  School, 
  Plus, 
  CheckCircle, 
  Clock, 
  XCircle,
  Eye,
  FileText,
  Mail,
  Phone,
  MapPin,
  User,
  Shield,
  MoreVertical,
  X,
  Upload,
  Save
} from 'lucide-react';

interface SchoolApplication {
  id: string;
  name: string;
  principal: string;
  email: string;
  phone: string;
  address: string;
  status: 'pending' | 'approved' | 'rejected';
  applicationDate: string;
  approvalDate?: string;
  rejectionDate?: string;
  rejectionReason?: string;
  documents: string[];
  studentCapacity: number;
  currentStudents: number;
  grades: string[];
}

const SchoolOnboarding = () => {
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showAddSchoolModal, setShowAddSchoolModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [schoolApplications, setSchoolApplications] = useState<SchoolApplication[]>([
    {
      id: '1',
      name: 'Roosevelt Academy',
      principal: 'Dr. Sarah Martinez',
      email: 'admin@roosevelt.edu',
      phone: '+234-801-234-5678',
      address: '789 Learning Ave, Lagos, Nigeria',
      status: 'pending',
      applicationDate: '2024-01-10',
      documents: ['Registration Certificate', 'Principal CV', 'Facility Photos'],
      studentCapacity: 500,
      currentStudents: 0,
      grades: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3']
    },
    {
      id: '2',
      name: 'Green Valley Secondary School',
      principal: 'Mr. Adebayo Ogundimu',
      email: 'principal@greenvalley.edu.ng',
      phone: '+234-803-567-8901',
      address: '45 Education Road, Abuja, Nigeria',
      status: 'approved',
      applicationDate: '2024-01-05',
      approvalDate: '2024-01-12',
      documents: ['Registration Certificate', 'Principal CV', 'Facility Photos', 'Curriculum Plan'],
      studentCapacity: 800,
      currentStudents: 245,
      grades: ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3']
    },
    {
      id: '3',
      name: 'Unity International School',
      principal: 'Mrs. Fatima Abdullahi',
      email: 'admin@unity-intl.edu.ng',
      phone: '+234-805-123-4567',
      address: '12 Unity Street, Kano, Nigeria',
      status: 'rejected',
      applicationDate: '2024-01-08',
      rejectionDate: '2024-01-15',
      rejectionReason: 'Incomplete documentation - missing facility inspection report',
      documents: ['Registration Certificate', 'Principal CV'],
      studentCapacity: 300,
      currentStudents: 0,
      grades: ['JSS 1', 'JSS 2', 'JSS 3']
    }
  ]);

  const [newSchoolForm, setNewSchoolForm] = useState({
    name: '',
    principal: '',
    email: '',
    phone: '',
    address: '',
    studentCapacity: '',
    grades: [] as string[],
    documents: [] as string[]
  });

  const availableGrades = ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3'];
  const requiredDocuments = [
    'Registration Certificate',
    'Principal CV',
    'Facility Photos',
    'Curriculum Plan',
    'Inspection Report'
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <School className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredApplications = schoolApplications.filter(school => 
    filter === 'all' || school.status === filter
  );

  const handleApprove = (schoolId: string) => {
    setSchoolApplications(prev => prev.map(school => 
      school.id === schoolId 
        ? { ...school, status: 'approved' as const, approvalDate: new Date().toISOString().split('T')[0] }
        : school
    ));
  };

  const handleReject = (schoolId: string, reason: string = 'Application rejected') => {
    setSchoolApplications(prev => prev.map(school => 
      school.id === schoolId 
        ? { 
            ...school, 
            status: 'rejected' as const, 
            rejectionDate: new Date().toISOString().split('T')[0],
            rejectionReason: reason
          }
        : school
    ));
  };

  const handleAddSchool = (e: React.FormEvent) => {
    e.preventDefault();
    const newSchool: SchoolApplication = {
      id: Date.now().toString(),
      name: newSchoolForm.name,
      principal: newSchoolForm.principal,
      email: newSchoolForm.email,
      phone: newSchoolForm.phone,
      address: newSchoolForm.address,
      status: 'pending',
      applicationDate: new Date().toISOString().split('T')[0],
      documents: newSchoolForm.documents,
      studentCapacity: parseInt(newSchoolForm.studentCapacity),
      currentStudents: 0,
      grades: newSchoolForm.grades
    };

    setSchoolApplications(prev => [...prev, newSchool]);
    setNewSchoolForm({
      name: '',
      principal: '',
      email: '',
      phone: '',
      address: '',
      studentCapacity: '',
      grades: [],
      documents: []
    });
    setShowAddSchoolModal(false);
  };

  const handleGradeToggle = (grade: string) => {
    setNewSchoolForm(prev => ({
      ...prev,
      grades: prev.grades.includes(grade)
        ? prev.grades.filter(g => g !== grade)
        : [...prev.grades, grade]
    }));
  };

  const handleDocumentToggle = (document: string) => {
    setNewSchoolForm(prev => ({
      ...prev,
      documents: prev.documents.includes(document)
        ? prev.documents.filter(d => d !== document)
        : [...prev.documents, document]
    }));
  };

  const selectedSchoolData = schoolApplications.find(s => s.id === selectedSchool);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">School Onboarding</h1>
          <p className="text-gray-600 mt-1">Review and approve school registration applications</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
          {/* Mobile Filter Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-left"
            >
              Filter: {filter === 'all' ? 'All Applications' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          </div>
          
          {/* Desktop Filter */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className={`border border-gray-300 rounded-lg px-3 py-2 text-sm ${showMobileFilters ? 'block' : 'hidden sm:block'}`}
          >
            <option value="all">All Applications</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          
          <button 
            onClick={() => setShowAddSchoolModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add School</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Applications</p>
              <p className="text-lg sm:text-2xl font-bold text-blue-600">{schoolApplications.length}</p>
            </div>
            <School className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Pending Review</p>
              <p className="text-lg sm:text-2xl font-bold text-yellow-600">
                {schoolApplications.filter(s => s.status === 'pending').length}
              </p>
            </div>
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Approved Schools</p>
              <p className="text-lg sm:text-2xl font-bold text-green-600">
                {schoolApplications.filter(s => s.status === 'approved').length}
              </p>
            </div>
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-lg sm:text-2xl font-bold text-purple-600">
                {schoolApplications.reduce((sum, school) => sum + school.currentStudents, 0)}
              </p>
            </div>
            <User className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">School Applications</h2>
          
          {filteredApplications.length === 0 ? (
            <div className="text-center py-8">
              <School className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No applications found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredApplications.map((school) => (
                <div
                  key={school.id}
                  className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
                >
                  {/* Desktop Layout */}
                  <div className="hidden sm:block">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        {getStatusIcon(school.status)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{school.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(school.status)}`}>
                              {school.status.charAt(0).toUpperCase() + school.status.slice(1)}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">Principal: {school.principal}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{school.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{school.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{school.address}</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="text-sm">
                              <span className="text-gray-500">Capacity:</span>
                              <span className="ml-1 font-medium">{school.studentCapacity} students</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Current Students:</span>
                              <span className="ml-1 font-medium">{school.currentStudents}</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-gray-500">Applied:</span>
                              <span className="ml-1 font-medium">{new Date(school.applicationDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <span className="text-sm text-gray-500">Documents:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {school.documents.map((doc, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                  <FileText className="w-3 h-3 mr-1" />
                                  {doc}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          {school.status === 'rejected' && school.rejectionReason && (
                            <div className="p-3 bg-red-50 rounded-lg mb-4">
                              <p className="text-sm text-red-800">
                                <strong>Rejection Reason:</strong> {school.rejectionReason}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setSelectedSchool(school.id);
                            setShowDetailsModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        
                        {school.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(school.id)}
                              className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleReject(school.id)}
                              className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-red-700 transition-colors"
                            >
                              Reject
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="sm:hidden">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(school.status)}
                        <div>
                          <h3 className="font-semibold text-gray-900">{school.name}</h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(school.status)} mt-1`}>
                            {school.status.charAt(0).toUpperCase() + school.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedSchool(school.id);
                          setShowDetailsModal(true);
                        }}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="space-y-2 mb-4 text-sm">
                      <p className="flex items-center text-gray-600">
                        <User className="w-4 h-4 mr-2" />
                        {school.principal}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        {school.email}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {school.address}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Capacity:</span>
                        <span className="ml-1 font-medium">{school.studentCapacity}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Students:</span>
                        <span className="ml-1 font-medium">{school.currentStudents}</span>
                      </div>
                    </div>
                    
                    {school.status === 'pending' && (
                      <div className="flex space-x-2 pt-3 border-t border-gray-200">
                        <button
                          onClick={() => handleApprove(school.id)}
                          className="flex-1 bg-green-600 text-white py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(school.id)}
                          className="flex-1 bg-red-600 text-white py-2 rounded text-sm font-medium hover:bg-red-700 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add School Modal */}
      {showAddSchoolModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Add New School</h3>
                <button
                  onClick={() => setShowAddSchoolModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleAddSchool} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                    <input
                      type="text"
                      value={newSchoolForm.name}
                      onChange={(e) => setNewSchoolForm({...newSchoolForm, name: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Principal Name</label>
                    <input
                      type="text"
                      value={newSchoolForm.principal}
                      onChange={(e) => setNewSchoolForm({...newSchoolForm, principal: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={newSchoolForm.email}
                      onChange={(e) => setNewSchoolForm({...newSchoolForm, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={newSchoolForm.phone}
                      onChange={(e) => setNewSchoolForm({...newSchoolForm, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    value={newSchoolForm.address}
                    onChange={(e) => setNewSchoolForm({...newSchoolForm, address: e.target.value})}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Student Capacity</label>
                  <input
                    type="number"
                    value={newSchoolForm.studentCapacity}
                    onChange={(e) => setNewSchoolForm({...newSchoolForm, studentCapacity: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    min="1"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Grades Offered</label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableGrades.map((grade) => (
                      <label key={grade} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={newSchoolForm.grades.includes(grade)}
                          onChange={() => handleGradeToggle(grade)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{grade}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Required Documents</label>
                  <div className="space-y-2">
                    {requiredDocuments.map((document) => (
                      <label key={document} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={newSchoolForm.documents.includes(document)}
                          onChange={() => handleDocumentToggle(document)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{document}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddSchoolModal(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Add School</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* School Details Modal */}
      {showDetailsModal && selectedSchoolData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">School Details</h3>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(selectedSchoolData.status)}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{selectedSchoolData.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedSchoolData.status)}`}>
                      {selectedSchoolData.status.charAt(0).toUpperCase() + selectedSchoolData.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Contact Information</h5>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Principal:</span> {selectedSchoolData.principal}</p>
                      <p><span className="text-gray-500">Email:</span> {selectedSchoolData.email}</p>
                      <p><span className="text-gray-500">Phone:</span> {selectedSchoolData.phone}</p>
                      <p><span className="text-gray-500">Address:</span> {selectedSchoolData.address}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">School Information</h5>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Capacity:</span> {selectedSchoolData.studentCapacity} students</p>
                      <p><span className="text-gray-500">Current Students:</span> {selectedSchoolData.currentStudents}</p>
                      <p><span className="text-gray-500">Application Date:</span> {new Date(selectedSchoolData.applicationDate).toLocaleDateString()}</p>
                      {selectedSchoolData.approvalDate && (
                        <p><span className="text-gray-500">Approval Date:</span> {new Date(selectedSchoolData.approvalDate).toLocaleDateString()}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Grades Offered</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedSchoolData.grades.map((grade) => (
                      <span key={grade} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Submitted Documents</h5>
                  <div className="space-y-2">
                    {selectedSchoolData.documents.map((doc, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{doc}</span>
                        <button className="ml-auto text-blue-600 hover:text-blue-800 text-sm">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedSchoolData.status === 'pending' && (
                  <div className="flex space-x-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        handleApprove(selectedSchoolData.id);
                        setShowDetailsModal(false);
                      }}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      Approve Application
                    </button>
                    <button
                      onClick={() => {
                        handleReject(selectedSchoolData.id);
                        setShowDetailsModal(false);
                      }}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                      Reject Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Onboarding Guidelines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">School Onboarding Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Required Documents</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Valid school registration certificate</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Principal's CV and qualifications</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>School facility photos and inspection report</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Curriculum plan and academic calendar</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Approval Process</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Application submission and document review</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Background verification and compliance check</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Platform integration and testing</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Final approval and account activation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolOnboarding;