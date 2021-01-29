import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../model/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  id: number;
  payment: Payment;
  constructor(private route: ActivatedRoute, private router: Router,
    private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.payment = new Payment();
    this.paymentService.getPaymentById(this.id).subscribe(data => {
      this.payment = data;
    });
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
