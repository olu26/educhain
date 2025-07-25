import React, { useState } from 'react';
import { 
  ArrowRightLeft, 
  Clock, 
  CheckCircle, 
  XCircle,
  FileText,
  User,
  Calendar,
  MapPin,
  Plus,
  Eye,
  Download
} from 'lucide-react';

const TransferTracking = () => {
  const [selectedChild, setSelectedChild] = useState('emma');

  const children = [
    { id: 'emma', name: 'Emma Johnson', grade: 'JSS 3' },
    { id: 'john', name: 'John Johnson', grade: 'JSS 1' }
  ];

  const transferHistory = {
    emma: [
      {
        id: '1',
        fromSchool: 'St. Mary\'s Primary School',
        toSchool: 'Lincoln High School',
        requestDate: '2022-08-15',
        approvalDate: '2022-08-22',
        completionDate: '2022-09-01',
        status: 'completed',
        reason: 'Graduation to secondary school',
        grade: 'Primary 6 to JSS 1',
        documents: ['Primary School Certificate', 'Birth Certificate', 'Medical Records'],
        timeline: [
          { date: '2022-08-15', event: 'Transfer request submitted', status: 'completed' },
          { date: '2022-08-18', event: 'Documents verified', status: 'completed' },
          { date: '2022-08-20', event: 'Academic records reviewed', status: 'completed' },
          { date: '2022-08-22', event: 'Transfer approved', status: 'completed' },
          { date: '2022-09-01', event: 'Enrollment completed', status: 'completed' }
        ]
      },
      {
        id: '2',
        fromSchool: 'Lincoln High School',
        toSchool: 'Roosevelt Academy',
        requestDate: '2024-01-10',
        approvalDate: null,
        completionDate: null,
        status: 'pending',
        reason: 'Family relocation',
        grade: 'JSS 3 to JSS 3',
        documents: ['Academic Transcript', 'Transfer Letter', 'Parent Consent'],
        timeline: [
          { date: '2024-01-10', event: 'Transfer request submitted', status: 'completed' },
          { date: '2024-01-12', event: 'Documents under review', status: 'completed' },
          { date: '2024-01-15', event: 'Academic records verification', status: 'in-progress' },
          { date: null, event: 'Awaiting destination school approval', status: 'pending' },
          { date: null, event: 'Transfer completion', status: 'pending' }
        ]
      }
    ],
    john: [
      {
        id: '1',
        fromSchool: 'Little Angels Nursery',
        toSchool: 'Lincoln High School',
        requestDate: '2023-08-20',
        approvalDate: '2023-08-25',
        completionDate: '2023-09-01',
        status: 'completed',
        reason: 'Graduation to primary school',
        grade: 'Nursery to JSS 1',
        documents: ['Nursery Certificate', 'Birth Certificate', 'Immunization Records'],
        timeline: [
          { date: '2023-08-20', event: 'Transfer request submitted', status: 'completed' },
          { date: '2023-08-22', event: 'Documents verified', status: 'completed' },
          { date: '2023-08-24', event: 'Academic assessment completed', status: 'completed' },
          { date: '2023-08-25', event: 'Transfer approved', status: 'completed' },
          { date: '2023-09-01', event: 'Enrollment completed', status: 'completed' }
        ]
      }
    ]
  };

  const selectedChildData = transferHistory[selectedChild as keyof typeof transferHistory];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <ArrowRightLeft className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTimelineStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Transfer Tracking</h2>
          <p className="text-gray-600 mt-1">Monitor your children's school transfer requests and history</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedChild}
            onChange={(e) => setSelectedChild(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            {children.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name} ({child.grade})
              </option>
            ))}
          </select>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Transfer Request</span>
          </button>
        </div>
      </div>

      {/* Transfer Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Transfers</p>
              <p className="text-2xl font-bold text-blue-600">{selectedChildData.length}</p>
            </div>
            <ArrowRightLeft className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">
                {selectedChildData.filter(t => t.status === 'completed').length}
              </p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {selectedChildData.filter(t => t.status === 'pending').length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current School</p>
              <p className="text-lg font-bold text-purple-600">Lincoln High</p>
            </div>
            <User className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Transfer History */}
      <div className="space-y-6">
        {selectedChildData.map((transfer) => (
          <div key={transfer.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Transfer Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(transfer.status)}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {transfer.fromSchool} → {transfer.toSchool}
                    </h3>
                    <p className="text-sm text-gray-600">{transfer.grade}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(transfer.status)}`}>
                    {transfer.status.charAt(0).toUpperCase() + transfer.status.slice(1)}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Requested: {new Date(transfer.requestDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Reason: {transfer.reason}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{transfer.documents.length} documents</span>
                </div>
              </div>
            </div>

            {/* Transfer Timeline */}
            <div className="p-6">
              <h4 className="font-medium text-gray-900 mb-4">Transfer Progress</h4>
              <div className="space-y-4">
                {transfer.timeline.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-4 h-4 rounded-full mt-1 ${getTimelineStatusColor(step.status)}`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="font-medium text-gray-900">{step.event}</h5>
                        {step.date && (
                          <span className="text-sm text-gray-500">
                            {new Date(step.date).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      {step.status === 'in-progress' && (
                        <p className="text-sm text-blue-600 mt-1">Currently in progress...</p>
                      )}
                      {step.status === 'pending' && (
                        <p className="text-sm text-gray-500 mt-1">Awaiting completion</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}
            <div className="p-6 bg-gray-50">
              <h4 className="font-medium text-gray-900 mb-3">Required Documents</h4>
              <div className="flex flex-wrap gap-2">
                {transfer.documents.map((doc, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Status Message */}
            {transfer.status === 'pending' && (
              <div className="p-4 bg-yellow-50 border-t border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-yellow-800">Transfer In Progress</h5>
                    <p className="text-sm text-yellow-700 mt-1">
                      Your transfer request is currently being processed. We'll notify you of any updates.
                      Expected completion: 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {transfer.status === 'completed' && (
              <div className="p-4 bg-green-50 border-t border-green-200">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-green-800">Transfer Completed</h5>
                    <p className="text-sm text-green-700 mt-1">
                      Transfer successfully completed on {transfer.completionDate && new Date(transfer.completionDate).toLocaleDateString()}.
                      All records have been transferred and verified.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Transfer Guidelines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Transfer Process Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Required Documents</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Current academic transcript</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Transfer request letter</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Parent/guardian consent form</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Birth certificate copy</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Medical records (if applicable)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Process Timeline</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>Submit transfer request (Day 1)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>Document verification (Days 2-3)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>Academic records review (Days 4-5)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>Destination school approval (Days 6-7)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>Transfer completion (Day 8)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferTracking;