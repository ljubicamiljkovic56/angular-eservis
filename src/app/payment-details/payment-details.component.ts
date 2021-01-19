import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute,
    private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.payment = new Payment();
    this.paymentService.getPaymentById(this.id).subscribe(data => {
      this.payment = data;
    });
  }

}
