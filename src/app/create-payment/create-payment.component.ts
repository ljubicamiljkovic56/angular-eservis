import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../model/payment';
import { Student } from '../model/student';
import { PaymentService } from '../services/payment.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  students: Student[];
  id: number;
  studentId: number;
  payment: Payment = new Payment();
  form: FormGroup;
  constructor(private paymentService: PaymentService,
    private studentService: StudentService,
    private router: Router,  private formBuilder: FormBuilder,
    private route: ActivatedRoute, private httpClient: HttpClient) {
      
      this.form = this.formBuilder.group({
        svrha : [null, Validators.required],
        amount : [null, Validators.required], 
        datum : [null, Validators.required],
        students : ['']
      });
    }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/api/students').subscribe(
      data => {
        this.students = data as Student[];
      }, error => console.error(error));
  }

  savePayment(){
    this.payment = this.form.value;
    this.studentId = this.form.value['students'];
    this.studentService.getStudentById(this.studentId).subscribe(data => {
      console.log(data);
      this.payment.student = data;
      this.paymentService.createPayment(this.payment).subscribe(data => {
        console.log(data);
        this.goToPaymentsList();
      }, error => console.error(error));
    }, error => console.error(error));
  }

  goToPaymentsList(){
    this.router.navigate(['/payments']);
  }

  onSubmit() {
    console.log(this.payment);
    this.savePayment();
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
