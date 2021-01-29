import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../model/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments: Payment[];

  constructor(private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPayments();
  }

  private getPayments(){
    this.paymentService.getPaymentsList().subscribe(data => {
      this.payments = data;
    });
  }

  updatePayment(id: number){
    this.router.navigate(['update-payment',  id]);
  }

  deletePayment(id: number) {
    this.paymentService.deletePayment(id).subscribe(data => {
      console.log(data);
      this.getPayments();
    });
  }

  paymentDetails(id: number) {
    this.router.navigate(['payment-details', id]);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  logout(){
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');

    console.log('Logout');

    this.goToLogin();
  }

}
