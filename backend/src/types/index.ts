// Core student data structure
export interface Student {
  id: string;
  studentNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  enrollmentDate: number;
  currentGrade: string;
  currentSchoolId: string;
  parentIds: string[];
  emergencyContacts: EmergencyContact[];
  medicalInfo: MedicalInfo;
  status: 'active' | 'transferred' | 'graduated' | 'withdrawn';
  createdAt: number;
  updatedAt: number;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
  email: string;
}

export interface MedicalInfo {
  bloodGroup: string;
  allergies: string[];
  medications: string[];
  specialNeeds: string;
}

// Academic records
export interface AcademicRecord {
  id: string;
  studentId: string;
  schoolId: string;
  academicYear: string;
  gradeLevel: string;
  subjects: SubjectGrade[];
  overallGPA: number;
  attendancePercentage: number;
  conductGrade: string;
  remarks: string;
  createdAt: number;
}

export interface SubjectGrade {
  subjectId: string;
  subjectName: string;
  teacherId: string;
  grade: string;
  score: number;
  credits: number;
  semester: string;
}

// Attendance tracking
export interface AttendanceRecord {
  id: string;
  studentId: string;
  schoolId: string;
  date: number;
  status: 'present' | 'absent' | 'late' | 'excused';
  period: string;
  notes: string;
  recordedBy: string;
}

// Transfer requests
export interface TransferRequest {
  id: string;
  studentId: string;
  fromSchoolId: string;
  toSchoolId: string;
  requestDate: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  documents: string[]; // IPFS hashes
  parentApproval: boolean;
  schoolApproval: boolean;
  adminApproval: boolean;
  completedAt?: number;
  createdAt: number;
}

// School information
export interface School {
  id: string;
  name: string;
  code: string;
  address: string;
  phone: string;
  email: string;
  principalName: string;
  schoolType: 'primary' | 'secondary' | 'high_school';
  gradesOffered: string[];
  maxCapacity: number;
  currentEnrollment: number;
  isActive: boolean;
  createdAt: number;
}

// Analytics
export interface SchoolAnalytics {
  totalStudents: number;
  activeStudents: number;
  transferredStudents: number;
  graduatedStudents: number;
  averageGPA: number;
  averageAttendance: number;
}

export interface StudentAnalytics {
  currentGrade: string;
  totalAcademicRecords: number;
  averageGPA: number;
  totalAttendanceDays: number;
  attendanceRate: number;
  transferRequests: number;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Authentication
export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    role: 'student' | 'parent' | 'teacher' | 'admin';
  };
}

// Request types
export interface CreateStudentRequest {
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  currentGrade: string;
  currentSchoolId: string;
  parentIds: string[];
  emergencyContacts: EmergencyContact[];
  medicalInfo: MedicalInfo;
}

export interface UpdateStudentRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  currentGrade?: string;
  currentSchoolId?: string;
  status?: string;
}

export interface CreateAcademicRecordRequest {
  studentId: string;
  schoolId: string;
  academicYear: string;
  gradeLevel: string;
  subjects: SubjectGrade[];
  overallGPA: number;
  attendancePercentage: number;
  conductGrade: string;
  remarks: string;
}

export interface CreateAttendanceRequest {
  studentId: string;
  schoolId: string;
  date: number;
  status: 'present' | 'absent' | 'late' | 'excused';
  period: string;
  notes: string;
  recordedBy: string;
}

export interface CreateTransferRequest {
  studentId: string;
  fromSchoolId: string;
  toSchoolId: string;
  reason: string;
  documents: string[];
  parentApproval: boolean;
}

export interface UpdateTransferStatusRequest {
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  approverType: 'parent' | 'school' | 'admin';
}
