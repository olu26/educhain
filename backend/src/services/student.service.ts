import { CANISTER_IDS, createActor } from '../config/ic.config';
import { Student, CreateStudentRequest, UpdateStudentRequest } from '../types';
import { idlFactory } from '../idl/student_records.idl';

export class StudentService {
  private studentRecordsActor: any;

  constructor() {
    this.studentRecordsActor = createActor(
      idlFactory,
      CANISTER_IDS.studentRecords
    );
  }

  async getAllStudents(): Promise<Student[]> {
    try {
      const result = await this.studentRecordsActor.getAllStudents();
      return result.ok || [];
    } catch (error) {
      console.error('Error fetching all students:', error);
      throw new Error('Failed to fetch students');
    }
  }

  async getStudentById(id: string): Promise<Student | null> {
    try {
      const result = await this.studentRecordsActor.getStudentById(id);
      return result.ok || null;
    } catch (error) {
      console.error(`Error fetching student ${id}:`, error);
      throw new Error('Failed to fetch student');
    }
  }

  async getStudentsBySchool(schoolId: string): Promise<Student[]> {
    try {
      const result = await this.studentRecordsActor.getStudentsBySchool(schoolId);
      return result.ok || [];
    } catch (error) {
      console.error(`Error fetching students for school ${schoolId}:`, error);
      throw new Error('Failed to fetch students by school');
    }
  }

  async getStudentsByParent(parentId: string): Promise<Student[]> {
    try {
      const result = await this.studentRecordsActor.getStudentsByParent(parentId);
      return result.ok || [];
    } catch (error) {
      console.error(`Error fetching students for parent ${parentId}:`, error);
      throw new Error('Failed to fetch students by parent');
    }
  }

  async createStudent(data: CreateStudentRequest): Promise<string> {
    try {
      const result = await this.studentRecordsActor.createStudent(data);
      if (result.ok) {
        return result.ok;
      } else {
        throw new Error(result.err || 'Failed to create student');
      }
    } catch (error) {
      console.error('Error creating student:', error);
      throw new Error('Failed to create student');
    }
  }

  async updateStudent(id: string, data: UpdateStudentRequest): Promise<boolean> {
    try {
      const result = await this.studentRecordsActor.updateStudent(id, data);
      if (result.ok) {
        return result.ok;
      } else {
        throw new Error(result.err || 'Failed to update student');
      }
    } catch (error) {
      console.error(`Error updating student ${id}:`, error);
      throw new Error('Failed to update student');
    }
  }

  async getStudentAnalytics(studentId: string): Promise<Record<string, unknown>> {
    try {
      const result = await this.studentRecordsActor.getStudentAnalytics(studentId);
      return result.ok || {};
    } catch (error) {
      console.error(`Error fetching analytics for student ${studentId}:`, error);
      throw new Error('Failed to fetch student analytics');
    }
  }
}
