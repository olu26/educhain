import React, { useState } from 'react';
import { 
  Award, 
  Info, 
  Target, 
  TrendingUp,
  BookOpen,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const GradingSystemExplanation = () => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  const gradingScale = [
    {
      grade: 'A',
      minScore: 90,
      maxScore: 100,
      gpa: 4.0,
      description: 'Excellent',
      color: 'bg-green-500',
      textColor: 'text-green-800',
      bgColor: 'bg-green-100',
      criteria: 'Outstanding performance demonstrating comprehensive understanding and mastery of subject matter.'
    },
    {
      grade: 'A-',
      minScore: 85,
      maxScore: 89,
      gpa: 3.7,
      description: 'Very Good',
      color: 'bg-green-400',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      criteria: 'Very good performance with minor areas for improvement.'
    },
    {
      grade: 'B+',
      minScore: 80,
      maxScore: 84,
      gpa: 3.3,
      description: 'Good',
      color: 'bg-blue-500',
      textColor: 'text-blue-800',
      bgColor: 'bg-blue-100',
      criteria: 'Good performance showing solid understanding of most concepts.'
    },
    {
      grade: 'B',
      minScore: 75,
      maxScore: 79,
      gpa: 3.0,
      description: 'Satisfactory',
      color: 'bg-blue-400',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      criteria: 'Satisfactory performance meeting basic requirements.'
    },
    {
      grade: 'B-',
      minScore: 70,
      maxScore: 74,
      gpa: 2.7,
      description: 'Fair',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-800',
      bgColor: 'bg-yellow-100',
      criteria: 'Fair performance with some understanding but needs improvement.'
    },
    {
      grade: 'C+',
      minScore: 65,
      maxScore: 69,
      gpa: 2.3,
      description: 'Below Average',
      color: 'bg-orange-500',
      textColor: 'text-orange-800',
      bgColor: 'bg-orange-100',
      criteria: 'Below average performance requiring additional effort.'
    },
    {
      grade: 'C',
      minScore: 60,
      maxScore: 64,
      gpa: 2.0,
      description: 'Poor',
      color: 'bg-red-400',
      textColor: 'text-red-700',
      bgColor: 'bg-red-50',
      criteria: 'Poor performance indicating significant gaps in understanding.'
    },
    {
      grade: 'F',
      minScore: 0,
      maxScore: 59,
      gpa: 0.0,
      description: 'Fail',
      color: 'bg-red-600',
      textColor: 'text-red-800',
      bgColor: 'bg-red-100',
      criteria: 'Failing performance requiring immediate intervention and support.'
    }
  ];

  const assessmentComponents = [
    {
      component: 'Continuous Assessment',
      weight: 40,
      description: 'Class tests, assignments, projects, and participation',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      component: 'Mid-term Examination',
      weight: 20,
      description: 'Comprehensive mid-semester examination',
      icon: Target,
      color: 'text-purple-600'
    },
    {
      component: 'Final Examination',
      weight: 40,
      description: 'End of term comprehensive examination',
      icon: Award,
      color: 'text-green-600'
    }
  ];

  const promotionCriteria = [
    {
      requirement: 'Minimum GPA',
      value: '2.0',
      description: 'Must maintain at least a 2.0 GPA to advance to next grade'
    },
    {
      requirement: 'Core Subjects',
      value: '5 passes',
      description: 'Must pass at least 5 core subjects including Math and English'
    },
    {
      requirement: 'Attendance',
      value: '75%',
      description: 'Minimum 75% attendance required for promotion'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Grading System</h2>
          <p className="text-gray-600 mt-1">Understanding your school's grading scale and assessment criteria</p>
        </div>
      </div>

      {/* Grading Scale Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Grading Scale</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gradingScale.map((grade, index) => (
            <div
              key={index}
              onClick={() => setSelectedGrade(selectedGrade === grade.grade ? null : grade.grade)}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                selectedGrade === grade.grade ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 ${grade.color} rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                  {grade.grade}
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{grade.gpa}</div>
                  <div className="text-xs text-gray-500">GPA</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">{grade.description}</h4>
                <p className="text-sm text-gray-600">{grade.minScore}% - {grade.maxScore}%</p>
                
                {selectedGrade === grade.grade && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-700">{grade.criteria}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assessment Components */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Components</h3>
        <div className="space-y-4">
          {assessmentComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white rounded-lg">
                    <Icon className={`w-6 h-6 ${component.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{component.component}</h4>
                    <p className="text-sm text-gray-600">{component.description}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{component.weight}%</div>
                  <div className="text-sm text-gray-500">Weight</div>
                </div>
              </div>
            );
          })}
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Info className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium text-blue-900">How Your Final Grade is Calculated</h4>
            </div>
            <p className="text-sm text-blue-800">
              Your final grade is calculated by combining all assessment components according to their weights. 
              For example: (Continuous Assessment × 40%) + (Mid-term × 20%) + (Final Exam × 40%) = Final Score
            </p>
          </div>
        </div>
      </div>

      {/* GPA Calculation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">GPA Calculation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">How GPA is Calculated</h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Each subject grade is converted to grade points (0.0 - 4.0)</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Grade points are multiplied by subject credit hours</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Total grade points divided by total credit hours = GPA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-3">GPA Scale Interpretation</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                <span className="text-sm font-medium text-green-800">3.5 - 4.0</span>
                <span className="text-sm text-green-700">Excellent</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                <span className="text-sm font-medium text-blue-800">3.0 - 3.4</span>
                <span className="text-sm text-blue-700">Good</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                <span className="text-sm font-medium text-yellow-800">2.5 - 2.9</span>
                <span className="text-sm text-yellow-700">Satisfactory</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                <span className="text-sm font-medium text-orange-800">2.0 - 2.4</span>
                <span className="text-sm text-orange-700">Below Average</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                <span className="text-sm font-medium text-red-800">0.0 - 1.9</span>
                <span className="text-sm text-red-700">Poor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promotion Criteria */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Promotion Criteria</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promotionCriteria.map((criteria, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h4 className="font-medium text-gray-900">{criteria.requirement}</h4>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">{criteria.value}</div>
              <p className="text-sm text-gray-600">{criteria.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips for Success */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tips for Academic Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-green-800">Best Practices</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Attend all classes regularly and participate actively</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Complete assignments on time and to the best of your ability</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Seek help from teachers when you don't understand</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Form study groups with classmates</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-orange-800">Warning Signs</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                <span>Missing multiple assignments or tests</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                <span>Frequent absences or tardiness</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                <span>Declining grades in multiple subjects</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                <span>Difficulty understanding course material</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradingSystemExplanation;