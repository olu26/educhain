// This file contains the IDL factory for the student records canister
// Generated from the student_records.did file

export const idlFactory = ({ IDL }: any) => {
  const EmergencyContact = IDL.Record({
    name: IDL.Text,
    relationship: IDL.Text,
    phone: IDL.Text,
    email: IDL.Text,
  });
  
  const MedicalInfo = IDL.Record({
    bloodGroup: IDL.Text,
    allergies: IDL.Vec(IDL.Text),
    medications: IDL.Vec(IDL.Text),
    specialNeeds: IDL.Text,
  });
  
  const Student = IDL.Record({
    id: IDL.Text,
    studentNumber: IDL.Text,
    firstName: IDL.Text,
    lastName: IDL.Text,
    dateOfBirth: IDL.Int,
    gender: IDL.Text,
    email: IDL.Text,
    phone: IDL.Text,
    address: IDL.Text,
    enrollmentDate: IDL.Int,
    currentGrade: IDL.Text,
    currentSchoolId: IDL.Text,
    parentIds: IDL.Vec(IDL.Text),
    emergencyContacts: IDL.Vec(EmergencyContact),
    medicalInfo: MedicalInfo,
    status: IDL.Text,
    createdAt: IDL.Int,
    updatedAt: IDL.Int,
  });
  
  const CreateStudentRequest = IDL.Record({
    firstName: IDL.Text,
    lastName: IDL.Text,
    dateOfBirth: IDL.Int,
    gender: IDL.Text,
    email: IDL.Text,
    phone: IDL.Text,
    address: IDL.Text,
    currentGrade: IDL.Text,
    currentSchoolId: IDL.Text,
    parentIds: IDL.Vec(IDL.Text),
    emergencyContacts: IDL.Vec(EmergencyContact),
    medicalInfo: MedicalInfo,
  });
  
  const UpdateStudentRequest = IDL.Record({
    firstName: IDL.Opt(IDL.Text),
    lastName: IDL.Opt(IDL.Text),
    email: IDL.Opt(IDL.Text),
    phone: IDL.Opt(IDL.Text),
    address: IDL.Opt(IDL.Text),
    currentGrade: IDL.Opt(IDL.Text),
    currentSchoolId: IDL.Opt(IDL.Text),
    status: IDL.Opt(IDL.Text),
  });
  
  const SubjectGrade = IDL.Record({
    subjectId: IDL.Text,
    subjectName: IDL.Text,
    teacherId: IDL.Text,
    grade: IDL.Text,
    score: IDL.Float64,
    credits: IDL.Float64,
    semester: IDL.Text,
  });
  
  const AcademicRecord = IDL.Record({
    id: IDL.Text,
    studentId: IDL.Text,
    schoolId: IDL.Text,
    academicYear: IDL.Text,
    gradeLevel: IDL.Text,
    subjects: IDL.Vec(SubjectGrade),
    overallGPA: IDL.Float64,
    attendancePercentage: IDL.Float64,
    conductGrade: IDL.Text,
    remarks: IDL.Text,
    createdAt: IDL.Int,
  });
  
  const AttendanceRecord = IDL.Record({
    id: IDL.Text,
    studentId: IDL.Text,
    schoolId: IDL.Text,
    date: IDL.Int,
    status: IDL.Text,
    period: IDL.Text,
    notes: IDL.Text,
    recordedBy: IDL.Text,
  });
  
  const TransferRequest = IDL.Record({
    id: IDL.Text,
    studentId: IDL.Text,
    fromSchoolId: IDL.Text,
    toSchoolId: IDL.Text,
    requestDate: IDL.Int,
    reason: IDL.Text,
    status: IDL.Text,
    documents: IDL.Vec(IDL.Text),
    parentApproval: IDL.Bool,
    schoolApproval: IDL.Bool,
    adminApproval: IDL.Bool,
    completedAt: IDL.Opt(IDL.Int),
    createdAt: IDL.Int,
  });
  
  const School = IDL.Record({
    id: IDL.Text,
    name: IDL.Text,
    code: IDL.Text,
    address: IDL.Text,
    phone: IDL.Text,
    email: IDL.Text,
    principalName: IDL.Text,
    schoolType: IDL.Text,
    gradesOffered: IDL.Vec(IDL.Text),
    maxCapacity: IDL.Nat,
    currentEnrollment: IDL.Nat,
    isActive: IDL.Bool,
    createdAt: IDL.Int,
  });
  
  const SchoolAnalytics = IDL.Record({
    totalStudents: IDL.Nat,
    activeStudents: IDL.Nat,
    transferredStudents: IDL.Nat,
    graduatedStudents: IDL.Nat,
    averageGPA: IDL.Float64,
    averageAttendance: IDL.Float64,
  });
  
  const StudentAnalytics = IDL.Record({
    currentGrade: IDL.Text,
    totalAcademicRecords: IDL.Nat,
    averageGPA: IDL.Float64,
    totalAttendanceDays: IDL.Nat,
    attendanceRate: IDL.Float64,
    transferRequests: IDL.Nat,
  });
  
  return IDL.Service({
    // Student management
    createStudent: IDL.Func([CreateStudentRequest], [IDL.Variant({ ok: IDL.Text, err: IDL.Text })], []),
    updateStudent: IDL.Func([IDL.Text, UpdateStudentRequest], [IDL.Variant({ ok: IDL.Bool, err: IDL.Text })], []),
    getStudentById: IDL.Func([IDL.Text], [IDL.Opt(Student)], ['query']),
    getStudentsBySchool: IDL.Func([IDL.Text], [IDL.Vec(IDL.Record({
      id: IDL.Text,
      studentNumber: IDL.Text,
      firstName: IDL.Text,
      lastName: IDL.Text,
      currentGrade: IDL.Text,
      status: IDL.Text,
    }))], ['query']),
    getStudentsByParent: IDL.Func([IDL.Text], [IDL.Vec(IDL.Record({
      id: IDL.Text,
      studentNumber: IDL.Text,
      firstName: IDL.Text,
      lastName: IDL.Text,
      currentGrade: IDL.Text,
      status: IDL.Text,
    }))], ['query']),
    
    // Academic records
    createAcademicRecord: IDL.Func([AcademicRecord], [IDL.Variant({ ok: IDL.Text, err: IDL.Text })], []),
    getAcademicRecordsByStudent: IDL.Func([IDL.Text], [IDL.Vec(AcademicRecord)], ['query']),
    
    // Attendance management
    recordAttendance: IDL.Func([AttendanceRecord], [IDL.Variant({ ok: IDL.Text, err: IDL.Text })], []),
    getAttendanceByStudent: IDL.Func([IDL.Text, IDL.Int, IDL.Int], [IDL.Vec(AttendanceRecord)], ['query']),
    getAttendanceSummary: IDL.Func([IDL.Text, IDL.Int, IDL.Int], [IDL.Record({
      totalDays: IDL.Nat,
      presentDays: IDL.Nat,
      absentDays: IDL.Nat,
      lateDays: IDL.Nat,
      excusedDays: IDL.Nat,
      attendanceRate: IDL.Float64,
    })], ['query']),
    
    // Transfer requests
    createTransferRequest: IDL.Func([TransferRequest], [IDL.Variant({ ok: IDL.Text, err: IDL.Text })], []),
    updateTransferStatus: IDL.Func([IDL.Text, IDL.Text, IDL.Text], [IDL.Variant({ ok: IDL.Bool, err: IDL.Text })], []),
    getTransferRequestsByStudent: IDL.Func([IDL.Text], [IDL.Vec(TransferRequest)], ['query']),
    getTransferRequestsBySchool: IDL.Func([IDL.Text], [IDL.Vec(IDL.Record({
      id: IDL.Text,
      studentId: IDL.Text,
      fromSchoolId: IDL.Text,
      toSchoolId: IDL.Text,
      requestDate: IDL.Int,
      reason: IDL.Text,
      status: IDL.Text,
      createdAt: IDL.Int,
    }))], ['query']),
    
    // School management
    createSchool: IDL.Func([School], [IDL.Variant({ ok: IDL.Text, err: IDL.Text })], []),
    getSchoolById: IDL.Func([IDL.Text], [IDL.Opt(School)], ['query']),
    getAllSchools: IDL.Func([], [IDL.Vec(IDL.Record({
      id: IDL.Text,
      name: IDL.Text,
      code: IDL.Text,
      schoolType: IDL.Text,
      isActive: IDL.Bool,
    }))], ['query']),
    
    // Analytics and reporting
    getSchoolAnalytics: IDL.Func([IDL.Text], [SchoolAnalytics], ['query']),
    getStudentAnalytics: IDL.Func([IDL.Text], [StudentAnalytics], ['query']),
  });
};
