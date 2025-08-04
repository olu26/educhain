import Array "mo:base/Array";
import Time "mo:base/Time";
import Text "mo:base/Text";
import Result "mo:base/Result";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";

actor StudentRecords {
  // Core student data structure
  type Student = {
    id: Text;
    studentNumber: Text;
    firstName: Text;
    lastName: Text;
    dateOfBirth: Int;
    gender: Text;
    email: Text;
    phone: Text;
    address: Text;
    enrollmentDate: Int;
    currentGrade: Text;
    currentSchoolId: Text;
    parentIds: [Text];
    emergencyContacts: [EmergencyContact];
    medicalInfo: MedicalInfo;
    status: Text; // "active", "transferred", "graduated", "withdrawn"
    createdAt: Int;
    updatedAt: Int;
  };

  type EmergencyContact = {
    name: Text;
    relationship: Text;
    phone: Text;
    email: Text;
  };

  type MedicalInfo = {
    bloodGroup: Text;
    allergies: [Text];
    medications: [Text];
    specialNeeds: Text;
  };

  // Academic records
  type AcademicRecord = {
    id: Text;
    studentId: Text;
    schoolId: Text;
    academicYear: Text;
    gradeLevel: Text;
    subjects: [SubjectGrade];
    overallGPA: Float;
    attendancePercentage: Float;
    conductGrade: Text;
    remarks: Text;
    createdAt: Int;
  };

  type SubjectGrade = {
    subjectId: Text;
    subjectName: Text;
    teacherId: Text;
    grade: Text;
    score: Float;
    credits: Float;
    semester: Text;
  };

  // Attendance tracking
  type AttendanceRecord = {
    id: Text;
    studentId: Text;
    schoolId: Text;
    date: Int;
    status: Text; // "present", "absent", "late", "excused"
    period: Text;
    notes: Text;
    recordedBy: Text;
  };

  // Transfer requests
  type TransferRequest = {
    id: Text;
    studentId: Text;
    fromSchoolId: Text;
    toSchoolId: Text;
    requestDate: Int;
    reason: Text;
    status: Text; // "pending", "approved", "rejected", "completed"
    documents: [Text]; // IPFS hashes
    parentApproval: Bool;
    schoolApproval: Bool;
    adminApproval: Bool;
    completedAt: ?Int;
    createdAt: Int;
  };

  // School information
  type School = {
    id: Text;
    name: Text;
    code: Text;
    address: Text;
    phone: Text;
    email: Text;
    principalName: Text;
    schoolType: Text; // "primary", "secondary", "high_school"
    gradesOffered: [Text];
    maxCapacity: Nat;
    currentEnrollment: Nat;
    isActive: Bool;
    createdAt: Int;
  };

  // Storage variables
  stable var students : [Student] = [];
  stable var academicRecords : [AcademicRecord] = [];
  stable var attendanceRecords : [AttendanceRecord] = [];
  stable var transferRequests : [TransferRequest] = [];
  stable var schools : [School] = [];
  stable var nextStudentId : Nat = 1;
  stable var nextRecordId : Nat = 1;
  stable var nextAttendanceId : Nat = 1;
  stable var nextTransferId : Nat = 1;
  stable var nextSchoolId : Nat = 1;

  // Student management
  public func createStudent(student: {
    firstName: Text;
    lastName: Text;
    dateOfBirth: Int;
    gender: Text;
    email: Text;
    phone: Text;
    address: Text;
    currentGrade: Text;
    currentSchoolId: Text;
    parentIds: [Text];
    emergencyContacts: [EmergencyContact];
    medicalInfo: MedicalInfo;
  }) : async Result.Result<Text, Text> {
    let newStudent = {
      id = "STU-" # Nat.toText(nextStudentId);
      studentNumber = "SN" # Nat.toText(nextStudentId);
      firstName = student.firstName;
      lastName = student.lastName;
      dateOfBirth = student.dateOfBirth;
      gender = student.gender;
      email = student.email;
      phone = student.phone;
      address = student.address;
      enrollmentDate = Time.now();
      currentGrade = student.currentGrade;
      currentSchoolId = student.currentSchoolId;
      parentIds = student.parentIds;
      emergencyContacts = student.emergencyContacts;
      medicalInfo = student.medicalInfo;
      status = "active";
      createdAt = Time.now();
      updatedAt = Time.now();
    };
    
    students := Array.append(students, [newStudent]);
    nextStudentId += 1;
    return #ok(newStudent.id);
  };

  public func updateStudent(id: Text, updates: {
    ?firstName: ?Text;
    ?lastName: ?Text;
    ?email: ?Text;
    ?phone: ?Text;
    ?address: ?Text;
    ?currentGrade: ?Text;
    ?currentSchoolId: ?Text;
    ?status: ?Text;
  }) : async Result.Result<Bool, Text> {
    switch (Array.find<Student>(students, func(s) { s.id == id })) {
      case (?student) {
        let updatedStudent = {
          id = student.id;
          studentNumber = student.studentNumber;
          firstName = switch (updates.?firstName) { case (?name) name; case null student.firstName };
          lastName = switch (updates.?lastName) { case (?name) name; case null student.lastName };
          dateOfBirth = student.dateOfBirth;
          gender = student.gender;
          email = switch (updates.?email) { case (?email) email; case null student.email };
          phone = switch (updates.?phone) { case (?phone) phone; case null student.phone };
          address = switch (updates.?address) { case (?addr) addr; case null student.address };
          enrollmentDate = student.enrollmentDate;
          currentGrade = switch (updates.?currentGrade) { case (?grade) grade; case null student.currentGrade };
          currentSchoolId = switch (updates.?currentSchoolId) { case (?school) school; case null student.currentSchoolId };
          parentIds = student.parentIds;
          emergencyContacts = student.emergencyContacts;
          medicalInfo = student.medicalInfo;
          status = switch (updates.?status) { case (?status) status; case null student.status };
          createdAt = student.createdAt;
          updatedAt = Time.now();
        };
        
        students := Array.map<Student, Student>(students, func(s) {
          if (s.id == id) { updatedStudent } else { s }
        });
        return #ok(true);
      };
      case null {
        return #err("Student not found");
      };
    }
  };

  // Academic records management
  public func createAcademicRecord(record: {
    studentId: Text;
    schoolId: Text;
    academicYear: Text;
    gradeLevel: Text;
    subjects: [SubjectGrade];
    overallGPA: Float;
    attendancePercentage: Float;
    conductGrade: Text;
    remarks: Text;
  }) : async Result.Result<Text, Text> {
    let newRecord = {
      id = "ACAD-" # Nat.toText(nextRecordId);
      studentId = record.studentId;
      schoolId = record.schoolId;
      academicYear = record.academicYear;
      gradeLevel = record.gradeLevel;
      subjects = record.subjects;
      overallGPA = record.overallGPA;
      attendancePercentage = record.attendancePercentage;
      conductGrade = record.conductGrade;
      remarks = record.remarks;
      createdAt = Time.now();
    };
    
    academicRecords := Array.append(academicRecords, [newRecord]);
    nextRecordId += 1;
    return #ok(newRecord.id);
  };

  public func getAcademicRecordsByStudent(studentId: Text) : async [AcademicRecord] {
    Array.filter<AcademicRecord>(academicRecords, func(r) { r.studentId == studentId })
  };

  // Attendance management
  public func recordAttendance(attendance: {
    studentId: Text;
    schoolId: Text;
    date: Int;
    status: Text;
    period: Text;
    notes: Text;
    recordedBy: Text;
  }) : async Result.Result<Text, Text> {
    let newAttendance = {
      id = "ATT-" # Nat.toText(nextAttendanceId);
      studentId = attendance.studentId;
      schoolId = attendance.schoolId;
      date = attendance.date;
      status = attendance.status;
      period = attendance.period;
      notes = attendance.notes;
      recordedBy = attendance.recordedBy;
    };
    
    attendanceRecords := Array.append(attendanceRecords, [newAttendance]);
    nextAttendanceId += 1;
    return #ok(newAttendance.id);
  };

  public func getAttendanceByStudent(studentId: Text, startDate: Int, endDate: Int) : async [AttendanceRecord] {
    Array.filter<AttendanceRecord>(attendanceRecords, func(a) { 
      a.studentId == studentId and a.date >= startDate and a.date <= endDate 
    })
  };

  // Transfer request management
  public func createTransferRequest(request: {
    studentId: Text;
    fromSchoolId: Text;
    toSchoolId: Text;
    reason: Text;
    documents: [Text];
    parentApproval: Bool;
  }) : async Result.Result<Text, Text> {
    let newRequest = {
      id = "TRANS-" # Nat.toText(nextTransferId);
      studentId = request.studentId;
      fromSchoolId = request.fromSchoolId;
      toSchoolId = request.toSchoolId;
      requestDate = Time.now();
      reason = request.reason;
      status = "pending";
      documents = request.documents;
      parentApproval = request.parentApproval;
      schoolApproval = false;
      adminApproval = false;
      completedAt = null;
      createdAt = Time.now();
    };
    
    transferRequests := Array.append(transferRequests, [newRequest]);
    nextTransferId += 1;
    return #ok(newRequest.id);
  };

  public func updateTransferStatus(id: Text, status: Text, approverType: Text) : async Result.Result<Bool, Text> {
    switch (Array.find<TransferRequest>(transferRequests, func(t) { t.id == id })) {
      case (?request) {
        let schoolApproval = if (approverType == "school") { true } else { request.schoolApproval };
        let adminApproval = if (approverType == "admin") { true } else { request.adminApproval };
        
        let updatedRequest = {
          id = request.id;
          studentId = request.studentId;
          fromSchoolId = request.fromSchoolId;
          toSchoolId = request.toSchoolId;
          requestDate = request.requestDate;
          reason = request.reason;
          status = status;
          documents = request.documents;
          parentApproval = request.parentApproval;
          schoolApproval = schoolApproval;
          adminApproval = adminApproval;
          completedAt = if (status == "completed") ?Time.now() else null;
          createdAt = request.createdAt;
        };
        
        transferRequests := Array.map<TransferRequest, TransferRequest>(transferRequests, func(t) {
          if (t.id == id) { updatedRequest } else { t }
        });
        return #ok(true);
      };
      case null {
        return #err("Transfer request not found");
      };
    }
  };

  // School management
  public func createSchool(school: {
    name: Text;
    code: Text;
    address: Text;
    phone: Text;
    email: Text;
    principalName: Text;
    schoolType: Text;
    gradesOffered: [Text];
    maxCapacity: Nat;
  }) : async Result.Result<Text, Text> {
    let newSchool = {
      id = "SCH-" # Nat.toText(nextSchoolId);
      name = school.name;
      code = school.code;
      address = school.address;
      phone = school.phone;
      email = school.email;
      principalName = school.principalName;
      schoolType = school.schoolType;
      gradesOffered = school.gradesOffered;
      maxCapacity = school.maxCapacity;
      currentEnrollment = 0;
      isActive = true;
      createdAt = Time.now();
    };
    
    schools := Array.append(schools, [newSchool]);
    nextSchoolId += 1;
    return #ok(newSchool.id);
  };

  public func getSchoolById(id: Text) : async ?School {
    Array.find<School>(schools, func(s) { s.id == id })
  };

  public func getAllSchools() : async [School] {
    schools
  };

  public func getStudentsBySchool(schoolId: Text) : async [Student] {
    Array.filter<Student>(students, func(s) { s.currentSchoolId == schoolId })
  };

  public func getStudentsByParent(parentId: Text) : async [Student] {
    Array.filter<Student>(students, func(s) { Array.contains<Text>(s.parentIds, func(p) { p == parentId }) })
  };

  public func getTransferRequestsByStudent(studentId: Text) : async [TransferRequest] {
    Array.filter<TransferRequest>(transferRequests, func(t) { t.studentId == studentId })
  };

  public func getTransferRequestsBySchool(schoolId: Text) : async [TransferRequest] {
    Array.filter<TransferRequest>(transferRequests, func(t) { 
      t.fromSchoolId == schoolId or t.toSchoolId == schoolId 
    })
  };

  // Analytics and reporting
  public func getSchoolAnalytics(schoolId: Text) : async {
    totalStudents: Nat;
    activeStudents: Nat;
    transferredStudents: Nat;
    graduatedStudents: Nat;
    averageGPA: Float;
    averageAttendance: Float;
  } {
    let schoolStudents = Array.filter<Student>(students, func(s) { s.currentSchoolId == schoolId });
    let totalStudents = Array.size(schoolStudents);
    let activeStudents = Array.size(Array.filter<Student>(schoolStudents, func(s) { s.status == "active" }));
    let transferredStudents = Array.size(Array.filter<Student>(schoolStudents, func(s) { s.status == "transferred" }));
    let graduatedStudents = Array.size(Array.filter<Student>(schoolStudents, func(s) { s.status == "graduated" }));
    
    let schoolRecords = Array.filter<AcademicRecord>(academicRecords, func(r) { r.schoolId == schoolId });
    let averageGPA = if (Array.size(schoolRecords) == 0) { 0.0 } else {
      Float.fromInt(Array.foldLeft<AcademicRecord, Nat>(schoolRecords, 0, func(acc, r) { acc + Float.toInt(r.overallGPA) })) / Float.fromInt(Array.size(schoolRecords))
    };
    
    let schoolAttendance = Array.filter<AttendanceRecord>(attendanceRecords, func(a) { a.schoolId == schoolId });
    let averageAttendance = if (Array.size(schoolAttendance) == 0) { 0.0 } else {
      Float.fromInt(Array.foldLeft<AttendanceRecord, Nat>(schoolAttendance, 0, func(acc, a) { acc + Float.toInt(a.attendancePercentage) })) / Float.fromInt(Array.size(schoolAttendance))
    };
    
    {
      totalStudents = totalStudents;
      activeStudents = activeStudents;
      transferredStudents = transferredStudents;
      graduatedStudents = graduatedStudents;
      averageGPA = averageGPA;
      averageAttendance = averageAttendance;
    }
  };

  public func getStudentAnalytics(studentId: Text) : async {
    currentGrade: Text;
    totalAcademicRecords: Nat;
    averageGPA: Float;
    totalAttendanceDays: Nat;
    attendanceRate: Float;
    transferRequests: Nat;
  } {
    let studentRecords = Array.filter<AcademicRecord>(academicRecords, func(r) { r.studentId == studentId });
    let studentAttendance = Array.filter<AttendanceRecord>(attendanceRecords, func(a) { a.studentId == studentId });
    let studentTransfers = Array.filter<TransferRequest>(transferRequests, func(t) { t.studentId == studentId });
    
    let student = Array.find<Student>(students, func(s) { s.id == studentId });
    let currentGrade = switch (student) {
      case (?s) s.currentGrade;
      case null "N/A";
    };
    
    let totalAcademicRecords = Array.size(studentRecords);
    let averageGPA = if (Array.size(studentRecords) == 0) { 0.0 } else {
      Float.fromInt(Array.foldLeft<AcademicRecord, Nat>(studentRecords, 0, func(acc, r) { acc + Float.toInt(r.overallGPA) })) / Float.fromInt(Array.size(studentRecords))
    };
    
    let totalAttendanceDays = Array.size(studentAttendance);
    let attendanceRate = if (totalAttendanceDays == 0) { 0.0 } else {
      Float.fromInt(Array.foldLeft<AttendanceRecord, Nat>(studentAttendance, 0, func(acc, a) { 
        if (a.status == "present") { acc + 1 } else { acc }
      })) / Float.fromInt(totalAttendanceDays) * 100.0
    };
    
    {
      currentGrade = currentGrade;
      totalAcademicRecords = totalAcademicRecords;
      averageGPA = averageGPA;
      totalAttendanceDays = totalAttendanceDays;
      attendanceRate = attendanceRate;
      transferRequests = Array.size(studentTransfers);
    }
  };
};

