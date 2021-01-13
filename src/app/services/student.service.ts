import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../app/model/student';
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
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateStudent/${id}`, student);
  }
}
