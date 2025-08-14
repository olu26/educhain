import { Router } from 'express';
import { asyncHandler } from '../middleware/errorHandler';
import { StudentService } from '../services/student.service';

const router = Router();
const studentService = new StudentService();

// Get all students
router.get('/', asyncHandler(async (req, res) => {
  const { schoolId, parentId } = req.query;
  
  let students;
  if (schoolId) {
    students = await studentService.getStudentsBySchool(schoolId as string);
  } else if (parentId) {
    students = await studentService.getStudentsByParent(parentId as string);
  } else {
    students = await studentService.getAllStudents();
  }
  
  res.json({
    success: true,
    data: students,
    count: students.length
  });
}));

// Get student by ID
router.get('/:id', asyncHandler(async (req, res) => {
  const student = await studentService.getStudentById(req.params.id);
  
  if (!student) {
    res.status(404).json({
      success: false,
      error: 'Student not found'
    });
    return;
  }
  
  res.json({
    success: true,
    data: student
  });
}));

// Create new student
router.post('/', asyncHandler(async (req, res) => {
  const studentId = await studentService.createStudent(req.body);
  
  res.status(201).json({
    success: true,
    data: { id: studentId },
    message: 'Student created successfully'
  });
}));

// Update student
router.put('/:id', asyncHandler(async (req, res) => {
  const updated = await studentService.updateStudent(req.params.id, req.body);
  
  if (!updated) {
    res.status(404).json({
      success: false,
      error: 'Student not found'
    });
    return;
  }
  
  res.json({
    success: true,
    message: 'Student updated successfully'
  });
}));

// Get student analytics
router.get('/:id/analytics', asyncHandler(async (req, res) => {
  const analytics = await studentService.getStudentAnalytics(req.params.id);
  
  res.json({
    success: true,
    data: analytics
  });
}));

export { router as studentRoutes };
