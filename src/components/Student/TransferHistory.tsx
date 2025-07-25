import React from 'react';
import { ArrowRightLeft, Calendar, FileText, CheckCircle, Clock, XCircle, MapPin, User } from 'lucide-react';

const TransferHistory = () => {
  const transferHistory = [
    {
      id: '1',
      fromSchool: 'St. Mary\'s Primary School',
      toSchool: 'Lincoln High School',
      date: '2022-09-01',
      status: 'completed',
      reason: 'Graduation to secondary school',
      grade: 'Primary 6 to JSS 1',
      documents: ['Primary School Certificate', 'Birth Certificate', 'Medical Records'],
      duration: '6 years (2016-2022)'
    },
    {
      id: '2',
      fromSchool: 'Lincoln High School',
      toSchool: 'Roosevelt Academy',
      date: '2024-01-15',
      status: 'pending',
      reason: 'Family relocation',
      grade: 'JSS 3 to JSS 3',
      documents: ['Academic Transcript', 'Transfer Letter', 'Parent Consent'],
      duration: 'Current transfer request'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
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
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Transfer History</h2>
          <p className="text-gray-600 mt-1">Complete record of your school transfers and transitions</p>
        </div>
      </div>

      {/* Transfer Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Transfers</p>
              <p className="text-2xl font-bold text-blue-600">{transferHistory.length}</p>
            </div>
            <ArrowRightLeft className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">
                {transferHistory.filter(t => t.status === 'completed').length}
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
                {transferHistory.filter(t => t.status === 'pending').length}
              </p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Transfer Timeline */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Transfer Timeline</h3>
        
        <div className="space-y-8">
          {transferHistory.map((transfer, index) => (
            <div key={transfer.id} className="relative">
              {/* Timeline line */}
              {index < transferHistory.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-4">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {getStatusIcon(transfer.status)}
                </div>
                
                {/* Transfer details */}
                <div className="flex-1 bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {transfer.fromSchool} → {transfer.toSchool}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transfer.status)}`}>
                        {transfer.status.charAt(0).toUpperCase() + transfer.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(transfer.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Grade: {transfer.grade}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Duration: {transfer.duration}</span>
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
                  
                  {/* Documents */}
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Required Documents:</h5>
                    <div className="flex flex-wrap gap-2">
                      {transfer.documents.map((doc, docIndex) => (
                        <span
                          key={docIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          <FileText className="w-3 h-3 mr-1" />
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {transfer.status === 'pending' && (
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Status Update:</strong> Your transfer request is currently being reviewed by Roosevelt Academy. 
                        You will be notified once a decision is made.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transfer Guidelines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Transfer Guidelines</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Required Documents</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Academic transcript from current school</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Transfer letter from parent/guardian</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Birth certificate or age declaration</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span>Medical records and immunization card</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Transfer Process</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>Submit transfer request with documents</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>Current school verification (2-3 days)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>New school review and approval (5-7 days)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                <span>Final confirmation and enrollment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferHistory;