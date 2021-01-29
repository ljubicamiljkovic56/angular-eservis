import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../model/payment';
import { Student } from '../model/student';
import { AuthService } from '../services/auth.service';
import { PaymentService } from '../services/payment.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-students-payment',
  templateUrl: './students-payment.component.html',
  styleUrls: ['./students-payment.component.css']
})
export class StudentsPaymentComponent implements OnInit {

  role: string;
  id:number;
  studentId: number;
  student: Student;
  payment: Payment;
  form: FormGroup;
  constructor(private router: Router, private authService: AuthService,
    private route: ActivatedRoute, private formBuilder: FormBuilder,
    private studentService: StudentService,
    private paymentService: PaymentService) {

      this.form = this.formBuilder.group({
        'svrha' : [null, Validators.required],
        'amount' : [null, Validators.required], 
        'datum' : [null, Validators.required]
      });
    }

  ngOnInit(): void {
  }

  createStudentsPayment(){
    this.payment = this.form.value;
    if(this.authService.isLoggedIn() == false){
      this.router.navigate(['login']);
    }
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('password'));

    this.role = localStorage.getItem('role');
    this.id = Number(localStorage.getItem('id'));
    if(this.role === 'ROLE_STUDENT') {
      console.log(this.payment);
      this.studentService.getStudentByUserId(this.id).subscribe(data => {
        console.log(this.id);
        console.log(data);
        console.log(data.id);
        this.studentId = Number(data.id);
        console.log(this.studentId);
        this.payment.student = data;
        this.paymentService.addStudentsPayment(this.studentId, this.payment).subscribe(data =>{
          console.log(data);
          this.goBackToStudent();
        }, error => console.log(error));
      }, error => console.log(error));
    }
  }

  goBackToStudent(){
    this.router.navigate(['/for-student']);
  }

  onSubmit() {
    console.log(this.payment);
    this.createStudentsPayment();
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
