import React, { useState } from 'react';
import { 
  UserPlus, 
  Users, 
  Search, 
  Filter,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Calendar,
  Mail,
  Phone,
  MapPin,
  User,
  X,
  Save,
  MoreVertical
} from 'lucide-react';

interface Student {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  grade: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  parentName: string;
  parentPhone: string;
  enrollmentDate: string;
  status: 'active' | 'transferred' | 'graduated' | 'suspended';
  gpa: number;
  attendance: number;
}

const StudentEnrollment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      studentId: 'STU-2024-001',
      firstName: 'Emma',
      lastName: 'Johnson',
      grade: 'JSS 3',
      dateOfBirth: '2006-03-15',
      email: 'emma.johnson@email.com',
      phone: '+234-801-234-5678',
      address: '123 Main St, Lagos, Nigeria',
      parentName: 'Sarah Johnson',
      parentPhone: '+234-801-234-5679',
      enrollmentDate: '2022-09-01',
      status: 'active',
      gpa: 3.8,
      attendance: 95
    },
    {
      id: '2',
      studentId: 'STU-2024-002',
      firstName: 'Michael',
      lastName: 'Adebayo',
      grade: 'SS 1',
      dateOfBirth: '2005-07-22',
      email: 'michael.adebayo@email.com',
      phone: '+234-803-567-8901',
      address: '456 School Road, Lagos, Nigeria',
      parentName: 'Funmi Adebayo',
      parentPhone: '+234-803-567-8902',
      enrollmentDate: '2021-09-01',
      status: 'active',
      gpa: 3.5,
      attendance: 88
    },
    {
      id: '3',
      studentId: 'STU-2024-003',
      firstName: 'Aisha',
      lastName: 'Ibrahim',
      grade: 'JSS 2',
      dateOfBirth: '2007-11-08',
      email: 'aisha.ibrahim@email.com',
      phone: '+234-805-123-4567',
      address: '789 Education Ave, Lagos, Nigeria',
      parentName: 'Amina Ibrahim',
      parentPhone: '+234-805-123-4568',
      enrollmentDate: '2023-09-01',
      status: 'active',
      gpa: 3.9,
      attendance: 97
    },
    {
      id: '4',
      studentId: 'STU-2024-004',
      firstName: 'David',
      lastName: 'Okafor',
      grade: 'SS 2',
      dateOfBirth: '2004-12-03',
      email: 'david.okafor@email.com',
      phone: '+234-807-890-1234',
      address: '321 Learning Street, Lagos, Nigeria',
      parentName: 'Grace Okafor',
      parentPhone: '+234-807-890-1235',
      enrollmentDate: '2020-09-01',
      status: 'transferred',
      gpa: 3.2,
      attendance: 85
    }
  ]);

  const [newStudentForm, setNewStudentForm] = useState({
    firstName: '',
    lastName: '',
    grade: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    parentName: '',
    parentPhone: '',
    enrollmentDate: new Date().toISOString().split('T')[0]
  });

  const availableGrades = ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'transferred':
        return 'bg-blue-100 text-blue-800';
      case 'graduated':
        return 'bg-purple-100 text-purple-800';
      case 'suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = gradeFilter === 'all' || student.grade === gradeFilter;
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    
    return matchesSearch && matchesGrade && matchesStatus;
  });

  const enrollmentStats = {
    total: students.length,
    active: students.filter(s => s.status === 'active').length,
    newThisMonth: 5,
    transferred: students.filter(s => s.status === 'transferred').length
  };

  const generateStudentId = () => {
    const year = new Date().getFullYear();
    const count = students.length + 1;
    return `STU-${year}-${count.toString().padStart(3, '0')}`;
  };

  const handleEnrollStudent = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudent: Student = {
      id: Date.now().toString(),
      studentId: generateStudentId(),
      firstName: newStudentForm.firstName,
      lastName: newStudentForm.lastName,
      grade: newStudentForm.grade,
      dateOfBirth: newStudentForm.dateOfBirth,
      email: newStudentForm.email,
      phone: newStudentForm.phone,
      address: newStudentForm.address,
      parentName: newStudentForm.parentName,
      parentPhone: newStudentForm.parentPhone,
      enrollmentDate: newStudentForm.enrollmentDate,
      status: 'active',
      gpa: 0,
      attendance: 0
    };

    setStudents(prev => [...prev, newStudent]);
    setNewStudentForm({
      firstName: '',
      lastName: '',
      grade: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      address: '',
      parentName: '',
      parentPhone: '',
      enrollmentDate: new Date().toISOString().split('T')[0]
    });
    setShowEnrollModal(false);
  };

  const handleEditStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent) return;

    setStudents(prev => prev.map(student => 
      student.id === selectedStudent.id 
        ? { ...student, ...newStudentForm }
        : student
    ));
    setShowEditModal(false);
    setSelectedStudent(null);
  };

  const handleDeleteStudent = (studentId: string) => {
    if (confirm('Are you sure you want to delete this student? This action cannot be undone.')) {
      setStudents(prev => prev.filter(student => student.id !== studentId));
    }
  };

  const openEditModal = (student: Student) => {
    setSelectedStudent(student);
    setNewStudentForm({
      firstName: student.firstName,
      lastName: student.lastName,
      grade: student.grade,
      dateOfBirth: student.dateOfBirth,
      email: student.email,
      phone: student.phone,
      address: student.address,
      parentName: student.parentName,
      parentPhone: student.parentPhone,
      enrollmentDate: student.enrollmentDate
    });
    setShowEditModal(true);
  };

  const openDetailsModal = (student: Student) => {
    setSelectedStudent(student);
    setShowDetailsModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Student Enrollment</h1>
          <p className="text-gray-600 mt-1">Manage student registrations and enrollment data</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Import Students</span>
          </button>
          <button 
            onClick={() => setShowEnrollModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <UserPlus className="w-4 h-4" />
            <span>Enroll Student</span>
          </button>
        </div>
      </div>

      {/* Enrollment Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-lg sm:text-2xl font-bold text-blue-600">{enrollmentStats.total}</p>
            </div>
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Active Students</p>
              <p className="text-lg sm:text-2xl font-bold text-green-600">{enrollmentStats.active}</p>
            </div>
            <User className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">New This Month</p>
              <p className="text-lg sm:text-2xl font-bold text-purple-600">{enrollmentStats.newThisMonth}</p>
            </div>
            <UserPlus className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-600">Transferred</p>
              <p className="text-lg sm:text-2xl font-bold text-orange-600">{enrollmentStats.transferred}</p>
            </div>
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
        <div className="flex flex-col space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search students by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Mobile Filter Toggle */}
          <div className="sm:hidden">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Filter Options */}
          <div className={`flex flex-col sm:flex-row gap-4 ${showMobileFilters ? 'block' : 'hidden sm:flex'}`}>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400 hidden sm:block" />
              <select
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none"
              >
                <option value="all">All Grades</option>
                {availableGrades.map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex-1 sm:flex-none"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="transferred">Transferred</option>
              <option value="graduated">Graduated</option>
              <option value="suspended">Suspended</option>
            </select>
            
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Students Table/Cards */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Enrolled Students ({filteredStudents.length})
          </h2>
          
          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Parent/Guardian
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {student.firstName} {student.lastName}
                          </div>
                          <div className="text-sm text-gray-500">{student.studentId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.grade}</div>
                      <div className="text-sm text-gray-500">
                        Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center">
                        <Mail className="w-4 h-4 mr-1 text-gray-400" />
                        {student.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Phone className="w-4 h-4 mr-1 text-gray-400" />
                        {student.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.parentName}</div>
                      <div className="text-sm text-gray-500">{student.parentPhone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">GPA: {student.gpa}</div>
                      <div className="text-sm text-gray-500">Attendance: {student.attendance}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(student.status)}`}>
                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => openDetailsModal(student)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => openEditModal(student)}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteStudent(student.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {filteredStudents.map((student) => (
              <div key={student.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{student.firstName} {student.lastName}</h3>
                      <p className="text-sm text-gray-500">{student.studentId}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => openDetailsModal(student)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <span className="text-sm text-gray-500">Grade:</span>
                    <span className="ml-1 font-medium">{student.grade}</span>
                  </div>
                  <div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(student.status)}`}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {student.email}
                  </p>
                  <p className="flex items-center mt-1">
                    <User className="w-4 h-4 mr-2" />
                    Parent: {student.parentName}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 pt-3 border-t border-gray-200">
                  <button 
                    onClick={() => openDetailsModal(student)}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button 
                    onClick={() => openEditModal(student)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button 
                    onClick={() => handleDeleteStudent(student.id)}
                    className="flex items-center space-x-1 text-red-600 hover:text-red-800 text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enroll Student Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Enroll New Student</h3>
                <button
                  onClick={() => setShowEnrollModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleEnrollStudent} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={newStudentForm.firstName}
                      onChange={(e) => setNewStudentForm({...newStudentForm, firstName: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={newStudentForm.lastName}
                      onChange={(e) => setNewStudentForm({...newStudentForm, lastName: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                    <select
                      value={newStudentForm.grade}
                      onChange={(e) => setNewStudentForm({...newStudentForm, grade: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Grade</option>
                      {availableGrades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      value={newStudentForm.dateOfBirth}
                      onChange={(e) => setNewStudentForm({...newStudentForm, dateOfBirth: e.target.value})}
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
                      value={newStudentForm.email}
                      onChange={(e) => setNewStudentForm({...newStudentForm, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={newStudentForm.phone}
                      onChange={(e) => setNewStudentForm({...newStudentForm, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    value={newStudentForm.address}
                    onChange={(e) => setNewStudentForm({...newStudentForm, address: e.target.value})}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name</label>
                    <input
                      type="text"
                      value={newStudentForm.parentName}
                      onChange={(e) => setNewStudentForm({...newStudentForm, parentName: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Phone</label>
                    <input
                      type="tel"
                      value={newStudentForm.parentPhone}
                      onChange={(e) => setNewStudentForm({...newStudentForm, parentPhone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enrollment Date</label>
                  <input
                    type="date"
                    value={newStudentForm.enrollmentDate}
                    onChange={(e) => setNewStudentForm({...newStudentForm, enrollmentDate: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEnrollModal(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Enroll Student</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Student Details Modal */}
      {showDetailsModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Student Details</h3>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {selectedStudent.firstName} {selectedStudent.lastName}
                    </h4>
                    <p className="text-gray-600">{selectedStudent.studentId}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedStudent.status)}`}>
                      {selectedStudent.status.charAt(0).toUpperCase() + selectedStudent.status.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Personal Information</h5>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Grade:</span> {selectedStudent.grade}</p>
                      <p><span className="text-gray-500">Date of Birth:</span> {new Date(selectedStudent.dateOfBirth).toLocaleDateString()}</p>
                      <p><span className="text-gray-500">Email:</span> {selectedStudent.email}</p>
                      <p><span className="text-gray-500">Phone:</span> {selectedStudent.phone}</p>
                      <p><span className="text-gray-500">Address:</span> {selectedStudent.address}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Parent/Guardian Information</h5>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Name:</span> {selectedStudent.parentName}</p>
                      <p><span className="text-gray-500">Phone:</span> {selectedStudent.parentPhone}</p>
                    </div>
                    
                    <h5 className="font-medium text-gray-900 mb-3 mt-6">Academic Information</h5>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Enrollment Date:</span> {new Date(selectedStudent.enrollmentDate).toLocaleDateString()}</p>
                      <p><span className="text-gray-500">GPA:</span> {selectedStudent.gpa}</p>
                      <p><span className="text-gray-500">Attendance:</span> {selectedStudent.attendance}%</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setShowDetailsModal(false);
                      openEditModal(selectedStudent);
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Edit Student
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteStudent(selectedStudent.id);
                      setShowDetailsModal(false);
                    }}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Delete Student
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Student Modal */}
      {showEditModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Edit Student</h3>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleEditStudent} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      value={newStudentForm.firstName}
                      onChange={(e) => setNewStudentForm({...newStudentForm, firstName: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={newStudentForm.lastName}
                      onChange={(e) => setNewStudentForm({...newStudentForm, lastName: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                    <select
                      value={newStudentForm.grade}
                      onChange={(e) => setNewStudentForm({...newStudentForm, grade: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Grade</option>
                      {availableGrades.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      value={newStudentForm.dateOfBirth}
                      onChange={(e) => setNewStudentForm({...newStudentForm, dateOfBirth: e.target.value})}
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
                      value={newStudentForm.email}
                      onChange={(e) => setNewStudentForm({...newStudentForm, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={newStudentForm.phone}
                      onChange={(e) => setNewStudentForm({...newStudentForm, phone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    value={newStudentForm.address}
                    onChange={(e) => setNewStudentForm({...newStudentForm, address: e.target.value})}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name</label>
                    <input
                      type="text"
                      value={newStudentForm.parentName}
                      onChange={(e) => setNewStudentForm({...newStudentForm, parentName: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Phone</label>
                    <input
                      type="tel"
                      value={newStudentForm.parentPhone}
                      onChange={(e) => setNewStudentForm({...newStudentForm, parentPhone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Update Student</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <UserPlus className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Bulk Enrollment</h4>
            <p className="text-sm text-gray-500">Enroll multiple students at once</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Download className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Generate Reports</h4>
            <p className="text-sm text-gray-500">Export enrollment data and statistics</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Calendar className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Academic Calendar</h4>
            <p className="text-sm text-gray-500">Manage term dates and schedules</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentEnrollment;