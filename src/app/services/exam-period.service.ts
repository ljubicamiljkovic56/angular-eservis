import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamPeriod } from '../model/exam-period';

@Injectable({
  providedIn: 'root'
})
export class ExamPeriodService {

  private baseURL = "http://localhost:8080/api/examperiods";

  constructor(private httpClient: HttpClient) { }

  getExamPeriodsList(): Observable<ExamPeriod[]> {
    return this.httpClient.get<ExamPeriod[]>(`${this.baseURL}`);
  }

  createExamPeriod(examPeriod: ExamPeriod): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, examPeriod);
  }

  getExamPeriodById(id: number): Observable<ExamPeriod> {
    return this.httpClient.get<ExamPeriod>(`${this.baseURL}/examPeriodDetails/${id}`);
  }

  updateExamPeriod(id: number, examPeriod: ExamPeriod): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateExamPeriod/${id}`, examPeriod);
  }
  
  deleteExamPeriod(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteExamPeriod/${id}`);
  }
}
