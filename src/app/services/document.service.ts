import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Document } from '../model/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseURL = "http://localhost:8080/api/documents";

  constructor(private httpClient: HttpClient) { }

  getDocumentsList(): Observable<Document[]> {
    return this.httpClient.get<Document[]>(`${this.baseURL}`);
  }

  createDocument(document: Document): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, document);
  }

  getDocumentById(id: number): Observable<Document> {
    return this.httpClient.get<Document>(`${this.baseURL}/documentDetails/${id}`);
  }

  updateDocument(id: number, document: Document): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updateDocument/${id}`, document);
  }
  
  deleteDocument(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteDocument/${id}`);
  }
}
