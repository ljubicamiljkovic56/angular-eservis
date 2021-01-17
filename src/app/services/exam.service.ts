import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../model/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseURL = "http://localhost:8080/api/exams";

  constructor(private httpClient: HttpClient) { }

  getExamsList(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(`${this.baseURL}`);
  }

  createExam(exam: Exam): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, exam);
  }

  getExamById(id: number): Observable<Exam> {
    return this.httpClient.get<Exam>(`${this.baseURL}/examDetails/${id}`);
  }

  updateExam(id: number, exam: Exam): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateExam/${id}`, exam);
  }
  
  deleteExam(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteExam/${id}`);
  }
}
