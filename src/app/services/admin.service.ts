import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8080/api/admins";

  constructor(private httpClient: HttpClient) { }

  getAdminsList(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(`${this.baseURL}`);
  }

  createAdmin(admin: Admin): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, admin);
  }

  getAdminById(id: number): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}/adminDetails/${id}`);
  }

  getAdminByUserId(userid: number): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}/adminDetailsUserId/${userid}`);
  }

  updateAdmin(id: number, admin: Admin): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateAdmin/${id}`, admin);
  }

  deleteAdmin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteAdmin/${id}`);
  }
}
