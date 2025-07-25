import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Filter,
  Eye,
  Edit,
  Download,
  Upload,
  Shield,
  CheckCircle,
  Clock,
  AlertTriangle,
  User,
  BookOpen,
  Award
} from 'lucide-react';

const StudentRecordsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordTypeFilter, setRecordTypeFilter] = useState('all');
  const [verificationFilter, setVerificationFilter] = useState('all');

  const studentRecords = [
    {
      id: '1',
      studentId: 'STU-2024-001',
      studentName: 'Emma Johnson',
      recordType: 'academic',
      subject: 'Mathematics',
      grade: 'A',
      term: 'First Term',
      year: '2024',
      teacher: 'Dr. Smith',
      dateCreated: '2024-01-15',
      lastModified: '2024-01-15',
      verified: true,
      verifiedBy: 'Principal',
      digitalSignature: 'abc123def456'
    },
    {
      id: '2',
      studentId: 'STU-2024-001',
      studentName: 'Emma Johnson',
      recordType: 'attendance',
      subject: 'Physics',
      status: 'Present',
      date: '2024-01-15',
      teacher: 'Prof. Davis',
      dateCreated: '2024-01-15',
      lastModified: '2024-01-15',
      verified: true,
      verifiedBy: 'Teacher',
      digitalSignature: 'def456ghi789'
    },
    {
      id: '3',
      studentId: 'STU-2024-002',
      studentName: 'Michael Adebayo',
      recordType: 'academic',
      subject: 'English',
      grade: 'B+',
      term: 'First Term',
      year: '2024',
      teacher: 'Ms. Wilson',
      dateCreated: '2024-01-14',
      lastModified: '2024-01-14',
      verified: false,
      verifiedBy: null,
      digitalSignature: null
    },
    {
      id: '4',
      studentId: 'STU-2024-003',
      studentName: 'Aisha Ibrahim',
      recordType: 'disciplinary',
      incident: 'Late to class',
      action: 'Warning issued',
      date: '2024-01-12',
      reportedBy: 'Class Teacher',
      dateCreated: '2024-01-12',
      lastModified: '2024-01-12',
      verified: true,
      verifiedBy: 'Vice Principal',
      digitalSignature: 'ghi789jkl012'
    },
    {
      id: '5',
      studentId: 'STU-2024-001',
      studentName: 'Emma Johnson',
      recordType: 'extracurricular',
      activity: 'Debate Club',
      position: 'Vice President',
      achievement: 'Regional Champion 2024',
      dateCreated: '2024-01-10',
      lastModified: '2024-01-10',
      verified: true,
      verifiedBy: 'Activity Coordinator',
      digitalSignature: 'jkl012mno345'
    }
  ];

  const getRecordTypeIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'attendance':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'disciplinary':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'extracurricular':
        return <Award className="w-5 h-5 text-purple-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getRecordTypeColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'bg-blue-100 text-blue-800';
      case 'attendance':
        return 'bg-green-100 text-green-800';
      case 'disciplinary':
        return 'bg-red-100 text-red-800';
      case 'extracurricular':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRecords = studentRecords.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = recordTypeFilter === 'all' || record.recordType === recordTypeFilter;
    const matchesVerification = verificationFilter === 'all' || 
                               (verificationFilter === 'verified' && record.verified) ||
                               (verificationFilter === 'unverified' && !record.verified);
    
    return matchesSearch && matchesType && matchesVerification;
  });

  const recordStats = {
    total: studentRecords.length,
    academic: studentRecords.filter(r => r.recordType === 'academic').length,
    attendance: studentRecords.filter(r => r.recordType === 'attendance').length,
    verified: studentRecords.filter(r => r.verified).length,
    pending: studentRecords.filter(r => !r.verified).length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Student Records Management</h1>
          <p className="text-gray-600 mt-1">Manage and verify all student academic and administrative records</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Import Records</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>Add Record</span>
          </button>
        </div>
      </div>

      {/* Records Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Records</p>
              <p className="text-2xl font-bold text-gray-900">{recordStats.total}</p>
            </div>
            <FileText className="w-8 h-8 text-gray-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Academic</p>
              <p className="text-2xl font-bold text-blue-600">{recordStats.academic}</p>
            </div>
            <BookOpen className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Attendance</p>
              <p className="text-2xl font-bold text-green-600">{recordStats.attendance}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Verified</p>
              <p className="text-2xl font-bold text-purple-600">{recordStats.verified}</p>
            </div>
            <Shield className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-orange-600">{recordStats.pending}</p>
            </div>
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by student name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={recordTypeFilter}
                onChange={(e) => setRecordTypeFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="all">All Types</option>
                <option value="academic">Academic</option>
                <option value="attendance">Attendance</option>
                <option value="disciplinary">Disciplinary</option>
                <option value="extracurricular">Extracurricular</option>
              </select>
            </div>
            
            <select
              value={verificationFilter}
              onChange={(e) => setVerificationFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Status</option>
              <option value="verified">Verified</option>
              <option value="unverified">Pending Verification</option>
            </select>
            
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Student Records ({filteredRecords.length})
          </h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Record Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Verification
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{record.studentName}</div>
                          <div className="text-sm text-gray-500">{record.studentId}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getRecordTypeIcon(record.recordType)}
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRecordTypeColor(record.recordType)}`}>
                          {record.recordType.charAt(0).toUpperCase() + record.recordType.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {record.recordType === 'academic' && (
                          <>
                            <div>{record.subject} - Grade {record.grade}</div>
                            <div className="text-gray-500">{record.term} {record.year}</div>
                          </>
                        )}
                        {record.recordType === 'attendance' && (
                          <>
                            <div>{record.subject} - {record.status}</div>
                            <div className="text-gray-500">{new Date(record.date!).toLocaleDateString()}</div>
                          </>
                        )}
                        {record.recordType === 'disciplinary' && (
                          <>
                            <div>{record.incident}</div>
                            <div className="text-gray-500">{record.action}</div>
                          </>
                        )}
                        {record.recordType === 'extracurricular' && (
                          <>
                            <div>{record.activity} - {record.position}</div>
                            <div className="text-gray-500">{record.achievement}</div>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(record.dateCreated).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.verified ? (
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                          <span className="text-sm text-green-800">Verified</span>
                          <div className="text-xs text-gray-500 ml-2">by {record.verifiedBy}</div>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm text-yellow-800">Pending</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Download className="w-4 h-4" />
                        </button>
                        {!record.verified && (
                          <button className="text-purple-600 hover:text-purple-900">
                            <Shield className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Verification Queue */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Verification</h3>
        <div className="space-y-3">
          {studentRecords.filter(r => !r.verified).map((record) => (
            <div key={record.id} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {getRecordTypeIcon(record.recordType)}
                <div>
                  <div className="font-medium text-gray-900">
                    {record.studentName} - {record.recordType} record
                  </div>
                  <div className="text-sm text-gray-500">
                    Created on {new Date(record.dateCreated).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition-colors">
                  Verify
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentRecordsManagement;