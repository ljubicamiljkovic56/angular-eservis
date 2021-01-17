import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enrollment } from '../model/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private baseURL = "http://localhost:8080/api/enrollments";

  constructor(private httpClient: HttpClient) { }

  getEnrollmentsList(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(`${this.baseURL}`);
  }

  createEnrollment(enrollment: Enrollment): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, enrollment);
  }

  getEnrollmentById(id: number): Observable<Enrollment> {
    return this.httpClient.get<Enrollment>(`${this.baseURL}/enrollmentDetails/${id}`);
  }

  updateEnrollment(id: number, enrollment: Enrollment): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateEnrollment/${id}`, enrollment);
  }
  
  deleteEnrollment(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteEnrollment/${id}`);
  }
}
