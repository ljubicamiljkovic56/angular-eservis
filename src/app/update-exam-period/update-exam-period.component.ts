import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamPeriod } from '../model/exam-period';
import { ExamPeriodService } from '../services/exam-period.service';

@Component({
  selector: 'app-update-exam-period',
  templateUrl: './update-exam-period.component.html',
  styleUrls: ['./update-exam-period.component.css']
})
export class UpdateExamPeriodComponent implements OnInit {

  id: number;
  examPeriod: ExamPeriod = new ExamPeriod();
  form: FormGroup;

  constructor(private examPeriodService: ExamPeriodService,
    private router: Router, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private httpClient: HttpClient) { 
    
      this.form = this.formBuilder.group({
        name : [null, Validators.required],
        startDate : [null, Validators.required], 
        endDate: [null, Validators.required]
      });      
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.examPeriodService.getExamPeriodById(this.id).subscribe(data => {
      this.examPeriod = data;
    }, error => console.log(error));
  }

  updateExamPeriod(){
    this.examPeriod = this.form.value;
    this.examPeriod.id = this.id;
    this.examPeriodService.updateExamPeriod(this.id, this.examPeriod).subscribe(data => {
      console.log(data);
      this.examPeriod = new ExamPeriod();
      this.goToExamPeriodsList();
    }, error => console.error(error));
  }

  goToExamPeriodsList(){
    this.router.navigate(['/examperiods']);
  }

  onSubmit(){
    console.log(this.examPeriod);
    this.updateExamPeriod();
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
