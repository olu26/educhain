import { Student, School, TransferRecord, SecurityAlert, AnalyticsData } from '../types';

export const mockStudents: Student[] = [
  {
    id: '1',
    studentId: 'STU-2024-001',
    personalInfo: {
      firstName: 'Emma',
      lastName: 'Johnson',
      dateOfBirth: '2006-03-15',
      email: 'emma.johnson@email.com',
      phone: '+1-555-0123',
      address: '123 Main St, Anytown, USA',
      emergencyContact: '+1-555-0124'
    },
    academicInfo: {
      currentSchool: 'Lincoln High School',
      grade: '11th',
      gpa: 3.8,
      enrollmentDate: '2022-09-01',
      subjects: [
        { id: '1', name: 'Mathematics', code: 'MATH101', credits: 4, teacher: 'Dr. Smith' },
        { id: '2', name: 'Physics', code: 'PHYS101', credits: 4, teacher: 'Prof. Davis' },
        { id: '3', name: 'English', code: 'ENG101', credits: 3, teacher: 'Ms. Wilson' }
      ]
    },
    records: [
      {
        id: '1',
        subject: 'Mathematics',
        grade: 'A',
        semester: 'Fall',
        year: '2024',
        gpa: 4.0,
        teacher: 'Dr. Smith',
        timestamp: '2024-01-15',
        verified: true,
        digitalSignature: 'abc123def456'
      }
    ],
    attendance: [
      {
        id: '1',
        date: '2024-01-15',
        status: 'present',
        subject: 'Mathematics'
      }
    ],
    transfers: [],
    extracurriculars: [
      {
        id: '1',
        name: 'Debate Club',
        category: 'Academic',
        position: 'Vice President',
        startDate: '2023-09-01',
        achievements: ['Regional Champion 2024']
      }
    ],
    digitalSignature: 'student-signature-123',
    lastUpdated: '2024-01-15',
    createdAt: '2022-09-01'
  }
];

export const mockSchools: School[] = [
  {
    id: '1',
    name: 'Lincoln High School',
    address: '456 Education Blvd, Anytown, USA',
    principal: 'Dr. Michael Brown',
    email: 'admin@lincolnhigh.edu',
    phone: '+1-555-0200',
    verified: true,
    registrationDate: '2020-01-01',
    digitalCertificate: 'cert-lincoln-123',
    students: ['1'],
    administrators: ['admin-1']
  },
  {
    id: '2',
    name: 'Roosevelt Academy',
    address: '789 Learning Ave, Nearby City, USA',
    principal: 'Dr. Sarah Martinez',
    email: 'admin@roosevelt.edu',
    phone: '+1-555-0300',
    verified: true,
    registrationDate: '2019-06-15',
    digitalCertificate: 'cert-roosevelt-456',
    students: [],
    administrators: ['admin-2']
  }
];

export const mockTransfers: TransferRecord[] = [
  {
    id: '1',
    fromSchool: 'Lincoln High School',
    toSchool: 'Roosevelt Academy',
    studentId: '1',
    requestDate: '2024-01-10',
    status: 'pending',
    reason: 'Family relocation',
    documents: ['transcript.pdf', 'recommendation.pdf'],
    auditTrail: [
      {
        id: '1',
        action: 'Transfer request submitted',
        timestamp: '2024-01-10T10:00:00Z',
        user: 'Emma Johnson',
        details: 'Initial transfer request',
        ipAddress: '192.168.1.1'
      }
    ],
    digitalSignatures: {
      student: 'student-sig-123'
    }
  }
];

export const mockSecurityAlerts: SecurityAlert[] = [
  {
    id: '1',
    type: 'suspicious_activity',
    severity: 'medium',
    description: 'Multiple failed login attempts detected',
    timestamp: '2024-01-15T14:30:00Z',
    resolved: false,
    affectedUsers: ['user-123']
  }
];

export const mockAnalytics: AnalyticsData = {
  totalStudents: 1247,
  totalSchools: 23,
  transfersThisMonth: 15,
  systemUptime: 99.9,
  averageResponseTime: 1.2,
  securityIncidents: 2,
  userSatisfactionScore: 4.8
};