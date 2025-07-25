export interface User {
  id: string;
  email: string;
  role: 'student' | 'school' | 'parent' | 'admin';
  name: string;
  avatar?: string;
  schoolId?: string;
  parentId?: string;
  children?: string[];
}

export interface Student {
  id: string;
  studentId: string;
  personalInfo: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    address: string;
    emergencyContact: string;
  };
  academicInfo: {
    currentSchool: string;
    grade: string;
    gpa: number;
    enrollmentDate: string;
    subjects: Subject[];
  };
  records: AcademicRecord[];
  attendance: AttendanceRecord[];
  transfers: TransferRecord[];
  extracurriculars: Extracurricular[];
  digitalSignature: string;
  lastUpdated: string;
  createdAt: string;
}

export interface School {
  id: string;
  name: string;
  address: string;
  principal: string;
  email: string;
  phone: string;
  verified: boolean;
  registrationDate: string;
  digitalCertificate: string;
  students: string[];
  administrators: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  teacher: string;
  grade?: string;
}

export interface AcademicRecord {
  id: string;
  subject: string;
  grade: string;
  semester: string;
  year: string;
  gpa: number;
  teacher: string;
  timestamp: string;
  verified: boolean;
  digitalSignature: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  subject: string;
  notes?: string;
}

export interface TransferRecord {
  id: string;
  fromSchool: string;
  toSchool: string;
  studentId: string;
  requestDate: string;
  approvalDate?: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  reason: string;
  documents: string[];
  auditTrail: AuditEntry[];
  digitalSignatures: {
    fromSchool?: string;
    toSchool?: string;
    student?: string;
  };
}

export interface Extracurricular {
  id: string;
  name: string;
  category: string;
  position?: string;
  startDate: string;
  endDate?: string;
  achievements: string[];
}

export interface AuditEntry {
  id: string;
  action: string;
  timestamp: string;
  user: string;
  details: string;
  ipAddress: string;
}

export interface SecurityAlert {
  id: string;
  type: 'breach' | 'unauthorized_access' | 'suspicious_activity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: string;
  resolved: boolean;
  affectedUsers: string[];
}

export interface AnalyticsData {
  totalStudents: number;
  totalSchools: number;
  transfersThisMonth: number;
  systemUptime: number;
  averageResponseTime: number;
  securityIncidents: number;
  userSatisfactionScore: number;
}