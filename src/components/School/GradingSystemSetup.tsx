import React, { useState } from 'react';
import { 
  Settings, 
  Plus, 
  Edit,
  Trash2,
  Save,
  RotateCcw,
  Award,
  Target,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const GradingSystemSetup = () => {
  const [activeTab, setActiveTab] = useState('grades');
  const [isEditing, setIsEditing] = useState(false);

  const gradingScale = [
    { grade: 'A', minScore: 90, maxScore: 100, gpa: 4.0, description: 'Excellent', color: 'bg-green-500' },
    { grade: 'B', minScore: 80, maxScore: 89, gpa: 3.0, description: 'Very Good', color: 'bg-blue-500' },
    { grade: 'C', minScore: 70, maxScore: 79, gpa: 2.0, description: 'Good', color: 'bg-yellow-500' },
    { grade: 'D', minScore: 60, maxScore: 69, gpa: 1.0, description: 'Fair', color: 'bg-orange-500' },
    { grade: 'E', minScore: 50, maxScore: 59, gpa: 0.5, description: 'Pass', color: 'bg-red-400' },
    { grade: 'F', minScore: 0, maxScore: 49, gpa: 0.0, description: 'Fail', color: 'bg-red-600' }
  ];

  const assessmentWeights = [
    { component: 'Continuous Assessment', weight: 40, description: 'Class tests, assignments, and participation' },
    { component: 'Mid-term Examination', weight: 20, description: 'Mid-semester examination' },
    { component: 'Final Examination', weight: 40, description: 'End of term examination' }
  ];

  const subjects = [
    { id: '1', name: 'Mathematics', category: 'Core', passMark: 50, maxScore: 100 },
    { id: '2', name: 'English Language', category: 'Core', passMark: 50, maxScore: 100 },
    { id: '3', name: 'Physics', category: 'Science', passMark: 50, maxScore: 100 },
    { id: '4', name: 'Chemistry', category: 'Science', passMark: 50, maxScore: 100 },
    { id: '5', name: 'Biology', category: 'Science', passMark: 50, maxScore: 100 },
    { id: '6', name: 'History', category: 'Arts', passMark: 50, maxScore: 100 }
  ];

  const promotionCriteria = [
    { grade: 'JSS 1', minSubjects: 5, minAverage: 50, description: 'Must pass at least 5 subjects with 50% average' },
    { grade: 'JSS 2', minSubjects: 6, minAverage: 55, description: 'Must pass at least 6 subjects with 55% average' },
    { grade: 'JSS 3', minSubjects: 7, minAverage: 60, description: 'Must pass at least 7 subjects with 60% average' },
    { grade: 'SS 1', minSubjects: 6, minAverage: 50, description: 'Must pass at least 6 subjects with 50% average' },
    { grade: 'SS 2', minSubjects: 7, minAverage: 55, description: 'Must pass at least 7 subjects with 55% average' },
    { grade: 'SS 3', minSubjects: 8, minAverage: 60, description: 'Must pass at least 8 subjects with 60% average' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Grading System Setup</h1>
          <p className="text-gray-600 mt-1">Configure grading scales, assessment weights, and promotion criteria</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Edit className="w-4 h-4" />
            <span>{isEditing ? 'Cancel Edit' : 'Edit System'}</span>
          </button>
          {isEditing && (
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          )}
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Grade Levels</p>
              <p className="text-2xl font-bold text-blue-600">{gradingScale.length}</p>
            </div>
            <Award className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Subjects</p>
              <p className="text-2xl font-bold text-green-600">{subjects.length}</p>
            </div>
            <Target className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pass Mark</p>
              <p className="text-2xl font-bold text-purple-600">50%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Max GPA</p>
              <p className="text-2xl font-bold text-orange-600">4.0</p>
            </div>
            <CheckCircle className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'grades', label: 'Grading Scale' },
              { id: 'weights', label: 'Assessment Weights' },
              { id: 'subjects', label: 'Subject Configuration' },
              { id: 'promotion', label: 'Promotion Criteria' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Grading Scale Tab */}
          {activeTab === 'grades' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Grading Scale Configuration</h3>
                {isEditing && (
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-1">
                    <Plus className="w-4 h-4" />
                    <span>Add Grade</span>
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {gradingScale.map((grade, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${grade.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                          {grade.grade}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{grade.description}</h4>
                          <p className="text-sm text-gray-600">
                            {grade.minScore}% - {grade.maxScore}% • GPA: {grade.gpa}
                          </p>
                        </div>
                      </div>
                      
                      {isEditing && (
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Assessment Weights Tab */}
          {activeTab === 'weights' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Assessment Component Weights</h3>
                {isEditing && (
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-1">
                    <Plus className="w-4 h-4" />
                    <span>Add Component</span>
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                {assessmentWeights.map((component, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{component.component}</h4>
                        <p className="text-sm text-gray-600 mt-1">{component.description}</p>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{component.weight}%</div>
                          <div className="text-sm text-gray-500">Weight</div>
                        </div>
                        
                        {isEditing && (
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Weight visualization */}
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${component.weight}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-blue-900">Total Weight</span>
                    <span className="text-xl font-bold text-blue-900">
                      {assessmentWeights.reduce((sum, comp) => sum + comp.weight, 0)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Subjects Tab */}
          {activeTab === 'subjects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Subject Configuration</h3>
                {isEditing && (
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-1">
                    <Plus className="w-4 h-4" />
                    <span>Add Subject</span>
                  </button>
                )}
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pass Mark
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Max Score
                      </th>
                      {isEditing && (
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subjects.map((subject) => (
                      <tr key={subject.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {subject.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            subject.category === 'Core' ? 'bg-blue-100 text-blue-800' :
                            subject.category === 'Science' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {subject.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {subject.passMark}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {subject.maxScore}
                        </td>
                        {isEditing && (
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Promotion Criteria Tab */}
          {activeTab === 'promotion' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Promotion Criteria by Grade</h3>
                {isEditing && (
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-1">
                    <Plus className="w-4 h-4" />
                    <span>Add Criteria</span>
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {promotionCriteria.map((criteria, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{criteria.grade}</h4>
                      {isEditing && (
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Minimum Subjects</span>
                        <span className="font-medium">{criteria.minSubjects}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Minimum Average</span>
                        <span className="font-medium">{criteria.minAverage}%</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{criteria.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <RotateCcw className="w-6 h-6 text-blue-600 mb-2" />
            <h4 className="font-medium text-gray-900">Reset to Default</h4>
            <p className="text-sm text-gray-500">Restore default grading system settings</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Settings className="w-6 h-6 text-green-600 mb-2" />
            <h4 className="font-medium text-gray-900">Import Configuration</h4>
            <p className="text-sm text-gray-500">Import grading system from another school</p>
          </button>
          
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Award className="w-6 h-6 text-purple-600 mb-2" />
            <h4 className="font-medium text-gray-900">Preview Report Card</h4>
            <p className="text-sm text-gray-500">See how grades appear on student reports</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradingSystemSetup;