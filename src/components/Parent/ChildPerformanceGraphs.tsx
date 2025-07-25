import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from 'recharts';
import { 
  TrendingUp, 
  BarChart3, 
  PieChart as PieChartIcon,
  Activity,
  Filter,
  Download,
  Eye
} from 'lucide-react';

const ChildPerformanceGraphs = () => {
  const [selectedChild, setSelectedChild] = useState('emma');
  const [selectedChart, setSelectedChart] = useState('progress');

  const children = [
    { id: 'emma', name: 'Emma Johnson', grade: 'JSS 3' },
    { id: 'john', name: 'John Johnson', grade: 'JSS 1' }
  ];

  const performanceData = {
    emma: {
      progressData: [
        { term: 'Term 1 2023', gpa: 3.4, average: 78, rank: 8 },
        { term: 'Term 2 2023', gpa: 3.6, average: 82, rank: 6 },
        { term: 'Term 3 2023', gpa: 3.7, average: 84, rank: 5 },
        { term: 'Term 1 2024', gpa: 3.8, average: 86, rank: 5 }
      ],
      subjectComparison: [
        { subject: 'Math', current: 85, previous: 82, classAvg: 75 },
        { subject: 'English', current: 82, previous: 80, classAvg: 78 },
        { subject: 'Physics', current: 78, previous: 75, classAvg: 72 },
        { subject: 'Chemistry', current: 75, previous: 78, classAvg: 70 },
        { subject: 'Biology', current: 88, previous: 85, classAvg: 80 },
        { subject: 'History', current: 79, previous: 77, classAvg: 76 }
      ],
      skillsRadar: [
        { skill: 'Problem Solving', score: 85 },
        { skill: 'Critical Thinking', score: 88 },
        { skill: 'Communication', score: 82 },
        { skill: 'Creativity', score: 79 },
        { skill: 'Collaboration', score: 86 },
        { skill: 'Leadership', score: 80 }
      ],
      gradeDistribution: [
        { grade: 'A', count: 3, color: '#10B981' },
        { grade: 'B+', count: 2, color: '#3B82F6' },
        { grade: 'B', count: 1, color: '#F59E0B' }
      ],
      attendancePattern: [
        { month: 'Sep', attendance: 94, target: 95 },
        { month: 'Oct', attendance: 96, target: 95 },
        { month: 'Nov', attendance: 93, target: 95 },
        { month: 'Dec', attendance: 95, target: 95 },
        { month: 'Jan', attendance: 97, target: 95 }
      ]
    },
    john: {
      progressData: [
        { term: 'Term 1 2023', gpa: 3.0, average: 70, rank: 22 },
        { term: 'Term 2 2023', gpa: 3.2, average: 72, rank: 20 },
        { term: 'Term 3 2023', gpa: 3.3, average: 74, rank: 18 },
        { term: 'Term 1 2024', gpa: 3.4, average: 75, rank: 18 }
      ],
      subjectComparison: [
        { subject: 'Math', current: 72, previous: 68, classAvg: 70 },
        { subject: 'English', current: 75, previous: 73, classAvg: 72 },
        { subject: 'Science', current: 68, previous: 70, classAvg: 69 },
        { subject: 'Social Studies', current: 76, previous: 74, classAvg: 71 },
        { subject: 'Basic Tech', current: 78, previous: 75, classAvg: 73 }
      ],
      skillsRadar: [
        { skill: 'Problem Solving', score: 70 },
        { skill: 'Critical Thinking', score: 72 },
        { skill: 'Communication', score: 75 },
        { skill: 'Creativity', score: 80 },
        { skill: 'Collaboration', score: 78 },
        { skill: 'Leadership', score: 68 }
      ],
      gradeDistribution: [
        { grade: 'B+', count: 1, color: '#3B82F6' },
        { grade: 'B', count: 2, color: '#F59E0B' },
        { grade: 'B-', count: 1, color: '#EF4444' },
        { grade: 'C+', count: 1, color: '#6B7280' }
      ],
      attendancePattern: [
        { month: 'Sep', attendance: 92, target: 95 },
        { month: 'Oct', attendance: 89, target: 95 },
        { month: 'Nov', attendance: 87, target: 95 },
        { month: 'Dec', attendance: 90, target: 95 },
        { month: 'Jan', attendance: 85, target: 95 }
      ]
    }
  };

  const selectedChildData = performanceData[selectedChild as keyof typeof performanceData];

  const chartTypes = [
    { id: 'progress', label: 'Academic Progress', icon: TrendingUp },
    { id: 'subjects', label: 'Subject Comparison', icon: BarChart3 },
    { id: 'skills', label: 'Skills Assessment', icon: Activity },
    { id: 'grades', label: 'Grade Distribution', icon: PieChartIcon },
    { id: 'attendance', label: 'Attendance Pattern', icon: TrendingUp }
  ];

  const renderChart = () => {
    switch (selectedChart) {
      case 'progress':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedChildData.progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="term" />
                <YAxis yAxisId="left" orientation="left" domain={[0, 4]} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="gpa" stroke="#3B82F6" strokeWidth={3} name="GPA" />
                <Line yAxisId="right" type="monotone" dataKey="average" stroke="#10B981" strokeWidth={3} name="Average %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );

      case 'subjects':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={selectedChildData.subjectComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="current" fill="#3B82F6" name="Current Term" />
                <Bar dataKey="previous" fill="#10B981" name="Previous Term" />
                <Bar dataKey="classAvg" fill="#F59E0B" name="Class Average" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'skills':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={selectedChildData.skillsRadar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Skills" dataKey="score" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'grades':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={selectedChildData.gradeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ grade, count }) => `${grade}: ${count}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {selectedChildData.gradeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );

      case 'attendance':
        return (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={selectedChildData.attendancePattern}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="attendance" stroke="#F59E0B" strokeWidth={3} name="Actual Attendance" />
                <Line type="monotone" dataKey="target" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" name="Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );

      default:
        return null;
    }
  };

  const getChartDescription = () => {
    switch (selectedChart) {
      case 'progress':
        return 'Track GPA and average score progression over time';
      case 'subjects':
        return 'Compare current performance with previous term and class average';
      case 'skills':
        return 'Assessment of key skills and competencies';
      case 'grades':
        return 'Distribution of grades across all subjects';
      case 'attendance':
        return 'Monthly attendance pattern compared to target';
      default:
        return '';
    }
  };

  // Get the latest performance data safely
  const getLatestData = () => {
    if (!selectedChildData?.progressData?.length) {
      return { gpa: 0, rank: 0, average: 0 };
    }
    return selectedChildData.progressData[selectedChildData.progressData.length - 1];
  };

  const latestData = getLatestData();

  return (
    <div className="space-y-6">
      {/* Header with Filters */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Performance Graphs</h2>
          <p className="text-gray-600 mt-1">Visual analysis of your children's academic performance</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
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
          </div>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Charts</span>
          </button>
        </div>
      </div>

      {/* Chart Type Selection */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Chart Types</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {chartTypes.map((chart) => {
            const Icon = chart.icon;
            return (
              <button
                key={chart.id}
                onClick={() => setSelectedChart(chart.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedChart === chart.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{chart.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {chartTypes.find(c => c.id === selectedChart)?.label}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{getChartDescription()}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-gray-800">
              <Eye className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {renderChart()}
      </div>

      {/* Chart Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Chart Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Key Observations</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {selectedChart === 'progress' && (
                <>
                  <li>• Steady improvement in GPA over time</li>
                  <li>• Consistent upward trend in average scores</li>
                  <li>• Class rank has improved significantly</li>
                  <li>• Performance trajectory is positive</li>
                </>
              )}
              {selectedChart === 'subjects' && (
                <>
                  <li>• Strong performance in Biology and Mathematics</li>
                  <li>• Most subjects above class average</li>
                  <li>• Chemistry needs additional attention</li>
                  <li>• Overall improvement across subjects</li>
                </>
              )}
              {selectedChart === 'skills' && (
                <>
                  <li>• Excellent critical thinking abilities</li>
                  <li>• Strong collaboration skills</li>
                  <li>• Good problem-solving capabilities</li>
                  <li>• Leadership skills developing well</li>
                </>
              )}
              {selectedChart === 'grades' && (
                <>
                  <li>• Majority of grades are A and B level</li>
                  <li>• Consistent high performance</li>
                  <li>• No failing grades recorded</li>
                  <li>• Grade distribution shows excellence</li>
                </>
              )}
              {selectedChart === 'attendance' && selectedChild === 'emma' && (
                <>
                  <li>• Attendance consistently above target</li>
                  <li>• Excellent punctuality record</li>
                  <li>• Recent improvement in January</li>
                  <li>• Maintains high attendance standards</li>
                </>
              )}
              {selectedChart === 'attendance' && selectedChild === 'john' && (
                <>
                  <li>• Attendance below target in recent months</li>
                  <li>• Declining trend needs attention</li>
                  <li>• January shows concerning drop</li>
                  <li>• Intervention may be needed</li>
                </>
              )}
            </ul>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Recommendations</h4>
            <ul className="text-sm text-green-700 space-y-1">
              {selectedChart === 'progress' && (
                <>
                  <li>• Continue current study strategies</li>
                  <li>• Set higher academic goals</li>
                  <li>• Maintain consistent effort</li>
                  <li>• Consider advanced coursework</li>
                </>
              )}
              {selectedChart === 'subjects' && (
                <>
                  <li>• Focus extra time on Chemistry</li>
                  <li>• Leverage strengths in Biology</li>
                  <li>• Seek additional help when needed</li>
                  <li>• Maintain balanced study schedule</li>
                </>
              )}
              {selectedChart === 'skills' && (
                <>
                  <li>• Encourage leadership opportunities</li>
                  <li>• Continue developing creativity</li>
                  <li>• Practice communication skills</li>
                  <li>• Engage in team projects</li>
                </>
              )}
              {selectedChart === 'grades' && (
                <>
                  <li>• Maintain current performance level</li>
                  <li>• Strive for consistency</li>
                  <li>• Challenge yourself with harder topics</li>
                  <li>• Help peers who are struggling</li>
                </>
              )}
              {selectedChart === 'attendance' && selectedChild === 'emma' && (
                <>
                  <li>• Keep up the excellent attendance</li>
                  <li>• Continue healthy routines</li>
                  <li>• Be a positive example</li>
                  <li>• Plan ahead for any absences</li>
                </>
              )}
              {selectedChart === 'attendance' && selectedChild === 'john' && (
                <>
                  <li>• Establish better morning routine</li>
                  <li>• Address any health concerns</li>
                  <li>• Communicate with school counselor</li>
                  <li>• Set attendance improvement goals</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {latestData.gpa}
            </div>
            <div className="text-sm text-gray-600">Current GPA</div>
          </div>
          
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {latestData.rank}
            </div>
            <div className="text-sm text-gray-600">Class Rank</div>
          </div>
          
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {latestData.average}%
            </div>
            <div className="text-sm text-gray-600">Average Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildPerformanceGraphs;