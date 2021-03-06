import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../app/model/student';
import { Course } from '../model/course';
import { Enrollment } from '../model/enrollment';
import { Exam } from '../model/exam';
import { Payment } from '../model/payment';
import { Document } from '../model/document';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/api/students";
  
  constructor(private httpClient: HttpClient) { }

  getStudentsList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/studentDetails/${id}`);
  }

  getStudentByUserId(userid: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/studentDetailsUserId/${userid}`);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateStudent/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteStudent/${id}`);
  }

  getStudentsEnrollments(studentId: number): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(`${this.baseURL}/${studentId}/enrollments`);
  }

  getStudentsExams(studentId: number): Observable<Exam[]>{
    return this.httpClient.get<Exam[]>(`${this.baseURL}/${studentId}/exams`);
  }

  getStudentsPayments(studentId: number): Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(`${this.baseURL}/${studentId}/payments`);
  }

  getStudentsDocuments(studentId: number): Observable<Document[]>{
    return this.httpClient.get<Document[]>(`${this.baseURL}/${studentId}/documents`);
  }
}
