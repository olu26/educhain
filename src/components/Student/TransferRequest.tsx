import React, { useState } from 'react';
import { 
  ArrowRightLeft, 
  Plus, 
  Upload, 
  FileText,
  School,
  User,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Save,
  X,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react';

interface TransferRequest {
  id: string;
  fromSchool: string;
  toSchool: string;
  reason: string;
  requestDate: string;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'rejected';
  documents: string[];
  targetGrade: string;
  preferredStartDate: string;
  contactPerson?: string;
  contactEmail?: string;
  contactPhone?: string;
  additionalNotes?: string;
}

const TransferRequest = () => {
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);
  const [activeRequests, setActiveRequests] = useState<TransferRequest[]>([
    {
      id: '1',
      fromSchool: 'Lincoln High School',
      toSchool: 'Roosevelt Academy',
      reason: 'Family relocation',
      requestDate: '2024-01-15',
      status: 'under-review',
      documents: ['Academic Transcript', 'Transfer Letter', 'Parent Consent'],
      targetGrade: 'JSS 3',
      preferredStartDate: '2024-02-01',
      contactPerson: 'Dr. Sarah Martinez',
      contactEmail: 'admin@roosevelt.edu',
      contactPhone: '+234-801-234-5678'
    }
  ]);

  const [newRequest, setNewRequest] = useState({
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
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
    
    const transferRequest: TransferRequest = {
      id: Date.now().toString(),
      fromSchool: 'Lincoln High School', // Current school
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

    setActiveRequests(prev => [...prev, transferRequest]);
    setNewRequest({
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
          'Your request has been submitted to the destination school',
          'Current school will verify your academic records',
          'You will be notified of any additional requirements'
        ];
      case 'under-review':
        return [
          'Destination school is reviewing your application',
          'Academic records are being verified',
          'Decision expected within 5-7 business days'
        ];
      case 'approved':
        return [
          'Complete enrollment process at new school',
          'Submit any additional required documents',
          'Attend orientation session if required'
        ];
      case 'rejected':
        return [
          'Review rejection reason provided',
          'Address any issues mentioned',
          'Consider reapplying after improvements'
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
          <h2 className="text-xl font-bold text-gray-900">Transfer Requests</h2>
          <p className="text-gray-600 mt-1">Request transfers to other schools and track your applications</p>
        </div>
        
        <button
          onClick={() => setShowNewRequestModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Transfer Request</span>
        </button>
      </div>

      {/* Transfer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Requests</p>
              <p className="text-2xl font-bold text-blue-600">{activeRequests.length}</p>
            </div>
            <ArrowRightLeft className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Under Review</p>
              <p className="text-2xl font-bold text-yellow-600">
                {activeRequests.filter(r => r.status === 'under-review').length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Approved</p>
              <p className="text-2xl font-bold text-green-600">
                {activeRequests.filter(r => r.status === 'approved').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current School</p>
              <p className="text-lg font-bold text-purple-600">Lincoln High</p>
            </div>
            <School className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Active Requests */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Transfer Requests</h3>
          
          {activeRequests.length === 0 ? (
            <div className="text-center py-8">
              <ArrowRightLeft className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No transfer requests yet</p>
              <button
                onClick={() => setShowNewRequestModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Create Your First Request
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {activeRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(request.status)}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {request.fromSchool} → {request.toSchool}
                        </h4>
                        <p className="text-sm text-gray-600">Target Grade: {request.targetGrade}</p>
                      </div>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(request.status)}`}>
                      {request.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          Requested: {new Date(request.requestDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Reason: {request.reason}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          Preferred Start: {new Date(request.preferredStartDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    
                    {request.contactPerson && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">Contact: {request.contactPerson}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{request.contactEmail}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{request.contactPhone}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Documents */}
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Submitted Documents:</h5>
                    <div className="flex flex-wrap gap-2">
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
                  
                  {/* Next Steps */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Next Steps:</h5>
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

      {/* Transfer Guidelines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Transfer Process Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Before You Apply</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Research the destination school thoroughly</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Ensure you meet admission requirements</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Gather all required documents</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Discuss with parents/guardians</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Process Timeline</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Submit request with documents (Day 1)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Current school verification (Days 2-3)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Destination school review (Days 4-7)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Decision notification (Day 8)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferRequest;