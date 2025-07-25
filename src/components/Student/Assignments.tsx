import React, { useState } from 'react';
import { FileText, Calendar, Clock, CheckCircle, AlertCircle, Download, Upload, Eye, Filter } from 'lucide-react';

const Assignments = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const assignments = [
    {
      id: '1',
      title: 'Quadratic Equations Problem Set',
      subject: 'Mathematics',
      teacher: 'Dr. Smith',
      dueDate: '2024-01-25',
      status: 'pending',
      priority: 'high',
      description: 'Solve problems 1-20 from Chapter 5. Show all working steps.',
      attachments: ['problem_set.pdf'],
      submissionType: 'file',
      maxScore: 100
    },
    {
      id: '2',
      title: 'Newton\'s Laws Lab Report',
      subject: 'Physics',
      teacher: 'Prof. Davis',
      dueDate: '2024-01-28',
      status: 'submitted',
      priority: 'medium',
      description: 'Write a comprehensive lab report on the Newton\'s Laws experiment conducted in class.',
      attachments: ['lab_guidelines.pdf', 'data_sheet.xlsx'],
      submissionType: 'file',
      maxScore: 50,
      submittedDate: '2024-01-20',
      score: 45
    },
    {
      id: '3',
      title: 'Shakespeare Essay',
      subject: 'English',
      teacher: 'Ms. Wilson',
      dueDate: '2024-01-30',
      status: 'pending',
      priority: 'medium',
      description: 'Write a 1000-word essay analyzing the themes in Romeo and Juliet.',
      attachments: ['essay_rubric.pdf'],
      submissionType: 'text',
      maxScore: 100
    },
    {
      id: '4',
      title: 'Chemical Bonding Quiz',
      subject: 'Chemistry',
      teacher: 'Dr. Johnson',
      dueDate: '2024-01-22',
      status: 'overdue',
      priority: 'high',
      description: 'Online quiz covering ionic and covalent bonding concepts.',
      attachments: [],
      submissionType: 'online',
      maxScore: 25
    },
    {
      id: '5',
      title: 'Cell Structure Diagram',
      subject: 'Biology',
      teacher: 'Prof. Brown',
      dueDate: '2024-02-02',
      status: 'pending',
      priority: 'low',
      description: 'Create a detailed labeled diagram of plant and animal cells.',
      attachments: ['cell_template.pdf'],
      submissionType: 'file',
      maxScore: 30
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'overdue':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAssignments = assignments.filter(assignment => {
    if (selectedFilter === 'all') return true;
    return assignment.status === selectedFilter;
  });

  const calculateStats = () => {
    const total = assignments.length;
    const pending = assignments.filter(a => a.status === 'pending').length;
    const submitted = assignments.filter(a => a.status === 'submitted').length;
    const overdue = assignments.filter(a => a.status === 'overdue').length;
    
    return { total, pending, submitted, overdue };
  };

  const stats = calculateStats();

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Assignments</h2>
          <p className="text-gray-600 mt-1">Manage your assignments and submissions</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Assignments</option>
              <option value="pending">Pending</option>
              <option value="submitted">Submitted</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>
      </div>

      {/* Assignment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Assignments</p>
              <p className="text-2xl font-bold text-blue-600">{stats.total}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-500" />
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
              <p className="text-sm font-medium text-gray-600">Submitted</p>
              <p className="text-2xl font-bold text-green-600">{stats.submitted}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-red-600">{stats.overdue}</p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Assignment List</h3>
          
          <div className="space-y-4">
            {filteredAssignments.map((assignment) => {
              const daysUntilDue = getDaysUntilDue(assignment.dueDate);
              
              return (
                <div key={assignment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      {getStatusIcon(assignment.status)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{assignment.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                            {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(assignment.priority)}`}>
                            {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)} Priority
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{assignment.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">
                              Due: {new Date(assignment.dueDate).toLocaleDateString()}
                              {daysUntilDue >= 0 && assignment.status === 'pending' && (
                                <span className={`ml-2 ${daysUntilDue <= 2 ? 'text-red-600' : 'text-gray-500'}`}>
                                  ({daysUntilDue} days left)
                                </span>
                              )}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">{assignment.subject} • {assignment.teacher}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">Max Score: {assignment.maxScore} points</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Attachments */}
                  {assignment.attachments.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Attachments:</h5>
                      <div className="flex flex-wrap gap-2">
                        {assignment.attachments.map((attachment, index) => (
                          <button
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                          >
                            <Download className="w-3 h-3 mr-1" />
                            {attachment}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Submission Info */}
                  {assignment.status === 'submitted' && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-green-800">
                          Submitted on {new Date(assignment.submittedDate!).toLocaleDateString()}
                        </span>
                        {assignment.score && (
                          <span className="text-sm font-medium text-green-800">
                            Score: {assignment.score}/{assignment.maxScore}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-3">
                    {assignment.status === 'pending' && (
                      <>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                          <Upload className="w-4 h-4" />
                          <span>Submit Assignment</span>
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">View Details</span>
                        </button>
                      </>
                    )}
                    
                    {assignment.status === 'submitted' && (
                      <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">View Submission</span>
                      </button>
                    )}
                    
                    {assignment.status === 'overdue' && (
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center space-x-2">
                        <Upload className="w-4 h-4" />
                        <span>Submit Late</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
        <div className="space-y-3">
          {assignments
            .filter(a => a.status === 'pending')
            .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
            .slice(0, 3)
            .map((assignment) => {
              const daysUntilDue = getDaysUntilDue(assignment.dueDate);
              
              return (
                <div key={assignment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${daysUntilDue <= 2 ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                    <div>
                      <div className="font-medium text-gray-900">{assignment.title}</div>
                      <div className="text-sm text-gray-500">{assignment.subject}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(assignment.dueDate).toLocaleDateString()}
                    </div>
                    <div className={`text-xs ${daysUntilDue <= 2 ? 'text-red-600' : 'text-gray-500'}`}>
                      {daysUntilDue} days left
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Assignments;