import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamPeriod } from '../model/exam-period';
import { ExamPeriodService } from '../services/exam-period.service';

@Component({
  selector: 'app-create-exam-period',
  templateUrl: './create-exam-period.component.html',
  styleUrls: ['./create-exam-period.component.css']
})
export class CreateExamPeriodComponent implements OnInit {

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
  }

  saveExamPeriod(){
    this.examPeriod = this.form.value;
    this.examPeriodService.createExamPeriod(this.examPeriod).subscribe(data => {
      console.log(data);
      this.goToExamPeriodsList();
    }),
    error => console.log(error);
  }

  goToExamPeriodsList(){
    this.router.navigate(['/examperiods']);
  }

  onSubmit() {
    console.log(this.examPeriod);
    this.saveExamPeriod();
  }
}
