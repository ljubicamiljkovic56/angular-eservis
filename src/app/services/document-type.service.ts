import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  private baseURL = "http://localhost:8080/api/types";

  constructor(private httpClient: HttpClient) { }

  getDocumentTypesList(): Observable<DocumentType[]> {
    return this.httpClient.get<DocumentType[]>(`${this.baseURL}`);
  }

  getDocumentTypeById(id: number): Observable<DocumentType> {
    return this.httpClient.get<DocumentType>(`${this.baseURL}/typeDetails/${id}`);
  }
}
