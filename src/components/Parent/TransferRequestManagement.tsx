import React, { useState } from 'react';
import { 
  ArrowRightLeft, 
  Plus, 
  User,
  School,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Eye,
  FileText,
  Mail,
  Phone,
  MapPin,
  Filter,
  Save,
  X
} from 'lucide-react';

interface Child {
  id: string;
  name: string;
  currentSchool: string;
  grade: string;
}

interface TransferRequest {
  id: string;
  childId: string;
  childName: string;
  fromSchool: string;
  toSchool: string;
  reason: string;
  requestDate: string;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'rejected' | 'completed';
  documents: string[];
  targetGrade: string;
  preferredStartDate: string;
  contactPerson?: string;
  contactEmail?: string;
  contactPhone?: string;
  rejectionReason?: string;
  completionDate?: string;
  additionalNotes?: string;
}

const TransferRequestManagement = () => {
  const [selectedChild, setSelectedChild] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedRequest, setSelectedRequest] = useState<TransferRequest | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);

  const children: Child[] = [
    { id: '1', name: 'Emma Johnson', currentSchool: 'Lincoln High School', grade: 'JSS 3' },
    { id: '2', name: 'John Johnson', currentSchool: 'Lincoln High School', grade: 'JSS 1' }
  ];

  const [transferRequests, setTransferRequests] = useState<TransferRequest[]>([
    {
      id: '1',
      childId: '1',
      childName: 'Emma Johnson',
      fromSchool: 'Lincoln High School',
      toSchool: 'Roosevelt Academy',
      reason: 'Family relocation',
      requestDate: '2024-01-15',
      status: 'under-review',
      documents: ['Academic Transcript', 'Transfer Letter', 'Parent Consent', 'Birth Certificate'],
      targetGrade: 'JSS 3',
      preferredStartDate: '2024-02-01',
      contactPerson: 'Dr. Sarah Martinez',
      contactEmail: 'admin@roosevelt.edu',
      contactPhone: '+234-801-234-5678'
    },
    {
      id: '2',
      childId: '2',
      childName: 'John Johnson',
      fromSchool: 'Lincoln High School',
      toSchool: 'Green Valley Secondary',
      reason: 'Better academic program',
      requestDate: '2024-01-10',
      status: 'approved',
      documents: ['Academic Transcript', 'Transfer Letter', 'Parent Consent'],
      targetGrade: 'JSS 1',
      preferredStartDate: '2024-02-15',
      contactPerson: 'Mr. Adebayo Ogundimu',
      contactEmail: 'principal@greenvalley.edu.ng',
      contactPhone: '+234-803-567-8901'
    },
    {
      id: '3',
      childId: '1',
      childName: 'Emma Johnson',
      fromSchool: 'St. Mary\'s Primary',
      toSchool: 'Lincoln High School',
      reason: 'Graduation to secondary school',
      requestDate: '2022-08-15',
      status: 'completed',
      documents: ['Primary School Certificate', 'Birth Certificate', 'Medical Records'],
      targetGrade: 'JSS 1',
      preferredStartDate: '2022-09-01',
      completionDate: '2022-09-01'
    }
  ]);

  const [newRequest, setNewRequest] = useState({
    childId: '',
    toSchool: '',
    reason: '',
    targetGrade: '',
    preferredStartDate: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    additionalNotes: '',
    documents: [] as string[]
  });

  const transferReasons = [
    'Family relocation',
    'Academic program preference',
    'Better facilities',
    'Closer to home',
    'Financial considerations',
    'Social reasons',
    'Other'
  ];

  const availableGrades = ['JSS 1', 'JSS 2', 'JSS 3', 'SS 1', 'SS 2', 'SS 3'];

  const requiredDocuments = [
    'Academic Transcript',
    'Transfer Letter',
    'Parent/Guardian Consent',
    'Birth Certificate',
    'Medical Records',
    'Recommendation Letter'
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft':
        return <FileText className="w-5 h-5 text-gray-500" />;
      case 'submitted':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'under-review':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <ArrowRightLeft className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'under-review':
        return 'bg-yellow-100 text-yellow-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRequests = transferRequests.filter(request => {
    const matchesChild = selectedChild === 'all' || request.childId === selectedChild;
    const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
    return matchesChild && matchesStatus;
  });

  const getRequestStats = () => {
    return {
      total: transferRequests.length,
      pending: transferRequests.filter(r => ['submitted', 'under-review'].includes(r.status)).length,
      approved: transferRequests.filter(r => r.status === 'approved').length,
      completed: transferRequests.filter(r => r.status === 'completed').length
    };
  };

  const stats = getRequestStats();

  const openDetailsModal = (request: TransferRequest) => {
    setSelectedRequest(request);
    setShowDetailsModal(true);
  };

  const handleDocumentToggle = (document: string) => {
    setNewRequest(prev => ({
      ...prev,
      documents: prev.documents.includes(document)
        ? prev.documents.filter(d => d !== document)
        : [...prev.documents, document]
    }));
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newRequest.childId) {
      alert('Please select a child');
      return;
    }
    
    const child = children.find(c => c.id === newRequest.childId);
    
    if (!child) {
      alert('Invalid child selected');
      return;
    }
    
    const transferRequest: TransferRequest = {
      id: Date.now().toString(),
      childId: newRequest.childId,
      childName: child.name,
      fromSchool: child.currentSchool,
      toSchool: newRequest.toSchool,
      reason: newRequest.reason,
      requestDate: new Date().toISOString().split('T')[0],
      status: 'submitted',
      documents: newRequest.documents,
      targetGrade: newRequest.targetGrade,
      preferredStartDate: newRequest.preferredStartDate,
      contactPerson: newRequest.contactPerson,
      contactEmail: newRequest.contactEmail,
      contactPhone: newRequest.contactPhone,
      additionalNotes: newRequest.additionalNotes
    };

    setTransferRequests(prev => [...prev, transferRequest]);
    setNewRequest({
      childId: '',
      toSchool: '',
      reason: '',
      targetGrade: '',
      preferredStartDate: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
      additionalNotes: '',
      documents: []
    });
    setShowNewRequestModal(false);
  };

  const getNextSteps = (status: string) => {
    switch (status) {
      case 'submitted':
        return [
          'Request submitted to destination school',
          'Current school will verify academic records',
          'You will be notified of any additional requirements'
        ];
      case 'under-review':
        return [
          'Destination school is reviewing the application',
          'Academic records are being verified',
          'Decision expected within 5-7 business days'
        ];
      case 'approved':
        return [
          'Complete enrollment process at new school',
          'Submit any additional required documents',
          'Attend orientation session if required',
          'Coordinate transition timeline with both schools'
        ];
      case 'rejected':
        return [
          'Review rejection reason provided',
          'Address any issues mentioned in feedback',
          'Consider reapplying after improvements',
          'Explore alternative school options'
        ];
      case 'completed':
        return [
          'Transfer successfully completed',
          'Student enrolled at new school',
          'All records transferred and verified'
        ];
      default:
        return [];
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Transfer Request Management</h2>
          <p className="text-gray-600 mt-1">Monitor and manage your children's school transfer requests</p>
        </div>
        
        <button
          onClick={() => setShowNewRequestModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Request</span>
        </button>
      </div>

      {/* Transfer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Requests</p>
              <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
            </div>
            <ArrowRightLeft className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-green-600">{stats.approved}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-purple-600">{stats.completed}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Children</option>
              {children.map((child) => (
                <option key={child.id} value={child.id}>{child.name}</option>
              ))}
            </select>
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="submitted">Submitted</option>
            <option value="under-review">Under Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Transfer Requests List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Transfer Requests ({filteredRequests.length})
          </h3>
          
          {filteredRequests.length === 0 ? (
            <div className="text-center py-8">
              <ArrowRightLeft className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No transfer requests found</p>
              <button
                onClick={() => setShowNewRequestModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Create New Request
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(request.status)}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {request.childName}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {request.fromSchool} → {request.toSchool}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(request.status)}`}>
                        {request.status.replace('-', ' ').toUpperCase()}
                      </span>
                      <button
                        onClick={() => openDetailsModal(request)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Requested: {new Date(request.requestDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <School className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Target Grade: {request.targetGrade}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Reason: {request.reason}</span>
                    </div>
                  </div>
                  
                  {/* Documents */}
                  <div className="mb-4">
                    <span className="text-sm text-gray-500">Documents:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {request.documents.map((doc, index) => (
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
                  
                  {/* Status-specific information */}
                  {request.status === 'rejected' && request.rejectionReason && (
                    <div className="p-3 bg-red-50 rounded-lg mb-4">
                      <p className="text-sm text-red-800">
                        <strong>Rejection Reason:</strong> {request.rejectionReason}
                      </p>
                    </div>
                  )}
                  
                  {request.status === 'completed' && request.completionDate && (
                    <div className="p-3 bg-green-50 rounded-lg mb-4">
                      <p className="text-sm text-green-800">
                        <strong>Transfer Completed:</strong> {new Date(request.completionDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                  
                  {/* Next Steps */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">
                      {request.status === 'completed' ? 'Transfer Summary:' : 'Next Steps:'}
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {getNextSteps(request.status).map((step, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* New Transfer Request Modal */}
      {showNewRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">New Transfer Request</h3>
                <button
                  onClick={() => setShowNewRequestModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitRequest} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Child</label>
                  <select
                    value={newRequest.childId}
                    onChange={(e) => setNewRequest({...newRequest, childId: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a child</option>
                    {children.map((child) => (
                      <option key={child.id} value={child.id}>
                        {child.name} ({child.grade})
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination School</label>
                  <input
                    type="text"
                    value={newRequest.toSchool}
                    onChange={(e) => setNewRequest({...newRequest, toSchool: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter the name of the school you want to transfer to"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Transfer</label>
                    <select
                      value={newRequest.reason}
                      onChange={(e) => setNewRequest({...newRequest, reason: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a reason</option>
                      {transferReasons.map((reason) => (
                        <option key={reason} value={reason}>{reason}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Grade</label>
                    <select
                      value={newRequest.targetGrade}
                      onChange={(e) => setNewRequest({...newRequest, targetGrade: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select grade</option>
                      {availableGrades.map((grade) => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date</label>
                  <input
                    type="date"
                    value={newRequest.preferredStartDate}
                    onChange={(e) => setNewRequest({...newRequest, preferredStartDate: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person (Optional)</label>
                    <input
                      type="text"
                      value={newRequest.contactPerson}
                      onChange={(e) => setNewRequest({...newRequest, contactPerson: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Principal/Admissions Officer"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email (Optional)</label>
                    <input
                      type="email"
                      value={newRequest.contactEmail}
                      onChange={(e) => setNewRequest({...newRequest, contactEmail: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="contact@school.edu"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone (Optional)</label>
                    <input
                      type="tel"
                      value={newRequest.contactPhone}
                      onChange={(e) => setNewRequest({...newRequest, contactPhone: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+234-xxx-xxx-xxxx"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Required Documents</label>
                  <div className="grid grid-cols-2 gap-2">
                    {requiredDocuments.map((document) => (
                      <label key={document} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={newRequest.documents.includes(document)}
                          onChange={() => handleDocumentToggle(document)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{document}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                  <textarea
                    value={newRequest.additionalNotes}
                    onChange={(e) => setNewRequest({...newRequest, additionalNotes: e.target.value})}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Any additional information or special circumstances..."
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowNewRequestModal(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Transfer Request Details Modal */}
      {showDetailsModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Transfer Request Details</h3>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(selectedRequest.status)}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{selectedRequest.childName}</h4>
                    <p className="text-gray-600">
                      {selectedRequest.fromSchool} → {selectedRequest.toSchool}
                    </p>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedRequest.status)} mt-2`}>
                      {selectedRequest.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Request Information</h5>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-500">Target Grade:</span> {selectedRequest.targetGrade}</p>
                      <p><span className="text-gray-500">Reason:</span> {selectedRequest.reason}</p>
                      <p><span className="text-gray-500">Request Date:</span> {new Date(selectedRequest.requestDate).toLocaleDateString()}</p>
                      <p><span className="text-gray-500">Preferred Start:</span> {new Date(selectedRequest.preferredStartDate).toLocaleDateString()}</p>
                      {selectedRequest.completionDate && (
                        <p><span className="text-gray-500">Completed:</span> {new Date(selectedRequest.completionDate).toLocaleDateString()}</p>
                      )}
                    </div>
                  </div>
                  
                  {selectedRequest.contactPerson && (
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Contact Information</h5>
                      <div className="space-y-2 text-sm">
                        <p><span className="text-gray-500">Contact Person:</span> {selectedRequest.contactPerson}</p>
                        <p><span className="text-gray-500">Email:</span> {selectedRequest.contactEmail}</p>
                        <p><span className="text-gray-500">Phone:</span> {selectedRequest.contactPhone}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Submitted Documents</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedRequest.documents.map((doc, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">
                    {selectedRequest.status === 'completed' ? 'Transfer Summary' : 'Next Steps'}
                  </h5>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="text-sm text-gray-600 space-y-2">
                      {getNextSteps(selectedRequest.status).map((step, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {selectedRequest.additionalNotes && (
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Additional Notes</h5>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{selectedRequest.additionalNotes}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => setShowNewRequestModal(true)}
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
          >
            <Plus className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">New Transfer Request</h4>
            <p className="text-sm text-gray-500">Initiate a new school transfer for your child</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <FileText className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Document Checklist</h4>
            <p className="text-sm text-gray-500">View required documents for transfers</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Mail className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Contact Support</h4>
            <p className="text-sm text-gray-500">Get help with transfer process</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferRequestManagement;