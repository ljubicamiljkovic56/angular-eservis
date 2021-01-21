import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../model/payment';
import { Student } from '../model/student';
import { PaymentService } from '../services/payment.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {

  paymentId: number;
  studentId: number;
  students: Student[];
  payment: Payment = new Payment();
  form: FormGroup;
  constructor(private paymentService: PaymentService,
    private studentService: StudentService,
    private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private httpClient: HttpClient) {
      
      this.form = this.formBuilder.group({
        svrha : [null, Validators.required],
        amount : [null, Validators.required], 
        datum : [null, Validators.required],
        students : ['']
      });
    }

  ngOnInit(): void {
    this.paymentId = this.route.snapshot.params['id'];
    this.paymentService.getPaymentById(this.paymentId).subscribe(data => {
      this.payment = data;
    }, error => console.log(error));
    this.httpClient.get('http://localhost:8080/api/students').subscribe(
      data => {
        this.students = data as Student[];
      }, error => console.error(error));
  }

  updatePayment(){
    this.payment = this.form.value;
    this.payment.id = this.paymentId;
    this.studentId = this.form.value['students'];
    this.studentService.getStudentById(this.studentId).subscribe(data => {
      console.log(data);
      this.payment.student = data;
      this.paymentService.updatePayment(this.paymentId, this.payment).subscribe(data => {
        console.log(data);
        this.payment = new Payment();
        this.goToPaymentsList();
      }, error => console.error(error));
    }, error => console.error(error));
  }

  goToPaymentsList(){
    this.router.navigate(['/payments']);
  }

  onSubmit(){
    console.log(this.payment);
    this.updatePayment();
  }
}
