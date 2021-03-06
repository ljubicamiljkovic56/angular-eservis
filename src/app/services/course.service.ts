import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { Enrollment } from '../model/enrollment';
import { Exam } from '../model/exam';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private baseURL = "http://localhost:8080/api/courses";

  constructor(private httpClient: HttpClient) { }

  getCoursesList(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.baseURL}`);
  }

  createCourse(course: Course): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, course);
  }

  getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.baseURL}/courseDetails/${id}`);
  }

  updateCourse(id: number, course: Course): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateCourse/${id}`, course);
  }
  
  deleteCourse(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteCourse/${id}`);
  }


  getCourseEnrollments(courseId: number): Observable<Enrollment[]>{
    return this.httpClient.get<Enrollment[]>(`${this.baseURL}/${courseId}/enrollments`);
  }

  getCourseExams(courseId: number): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(`${this.baseURL}/${courseId}/exams`);
  }
}
