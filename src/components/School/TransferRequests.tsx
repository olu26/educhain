import React, { useState } from 'react';
import { mockTransfers } from '../../data/mockData';
import { 
  ArrowRightLeft, 
  Clock, 
  CheckCircle, 
  XCircle,
  Eye,
  FileText,
  User,
  Calendar,
  MessageSquare
} from 'lucide-react';

const TransferRequests = () => {
  const [selectedTransfer, setSelectedTransfer] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  const filteredTransfers = mockTransfers.filter(transfer => 
    filter === 'all' || transfer.status === filter
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <ArrowRightLeft className="w-5 h-5 text-gray-500" />;
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

  const handleApprove = (transferId: string) => {
    // In a real app, this would update the transfer status
    alert(`Transfer ${transferId} approved!`);
  };

  const handleReject = (transferId: string) => {
    // In a real app, this would update the transfer status
    alert(`Transfer ${transferId} rejected!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transfer Requests</h1>
          <p className="text-gray-600 mt-1">Manage incoming and outgoing student transfers</p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {['all', 'pending', 'approved', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Transfer Requests List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Requests</h2>
          
          {filteredTransfers.length === 0 ? (
            <div className="text-center py-8">
              <ArrowRightLeft className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No transfer requests found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTransfers.map((transfer) => (
                <div
                  key={transfer.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(transfer.status)}
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Student ID: {transfer.studentId}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {transfer.fromSchool} → {transfer.toSchool}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transfer.status)}`}>
                        {transfer.status}
                      </span>
                      <button
                        onClick={() => setSelectedTransfer(transfer.id)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Requested: {transfer.requestDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{transfer.documents.length} documents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Reason: {transfer.reason}</span>
                    </div>
                  </div>
                  
                  {transfer.status === 'pending' && (
                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={() => handleApprove(transfer.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                      >
                        Approve Transfer
                      </button>
                      <button
                        onClick={() => handleReject(transfer.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                      >
                        Reject Transfer
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Transfer Details Modal */}
      {selectedTransfer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Transfer Details</h3>
                <button
                  onClick={() => setSelectedTransfer(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              
              {/* Transfer details content would go here */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">From School</label>
                    <p className="text-gray-900">Lincoln High School</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">To School</label>
                    <p className="text-gray-900">Roosevelt Academy</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Documents</label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2 p-2 border rounded-lg">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">transcript.pdf</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border rounded-lg">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">recommendation.pdf</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferRequests;