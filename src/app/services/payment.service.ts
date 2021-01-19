import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseURL = "http://localhost:8080/api/payments";

  constructor(private httpClient: HttpClient) { }

  getPaymentsList(): Observable<Payment[]> {
    return this.httpClient.get<Payment[]>(`${this.baseURL}`);
  }

  createPayment(payment: Payment): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, payment);
  }

  getPaymentById(id: number): Observable<Payment> {
    return this.httpClient.get<Payment>(`${this.baseURL}/paymentDetails/${id}`);
  }

  updatePayment(id: number, payment: Payment): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/updatePayment/${id}`, payment);
  }
  
  deletePayment(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletePayment/${id}`);
  }
}
