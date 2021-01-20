import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseURL = "http://localhost:8080/api/teachers";

  constructor(private httpClient: HttpClient) { }

  getTeachersList(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.baseURL}`);
  }

  createTeacher(teacher: Teacher): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, teacher);
  }

  getTeacherById(id: number): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.baseURL}/teacherDetails/${id}`);
  }

  updateTeacher(id: number, teacher: Teacher): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateTeacher/${id}`, teacher);
  }

  deleteTeacher(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteTeacher/${id}`);
  }

}
