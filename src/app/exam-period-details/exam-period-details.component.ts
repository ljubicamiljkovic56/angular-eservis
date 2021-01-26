import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../model/exam';
import { ExamPeriod } from '../model/exam-period';
import { ExamPeriodService } from '../services/exam-period.service';

@Component({
  selector: 'app-exam-period-details',
  templateUrl: './exam-period-details.component.html',
  styleUrls: ['./exam-period-details.component.css']
})
export class ExamPeriodDetailsComponent implements OnInit {

  id: number;
  examperiod: ExamPeriod;
  exams: Exam[];
  constructor(private route: ActivatedRoute,
    private examPeriodService: ExamPeriodService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.examperiod = new ExamPeriod();
    this.examPeriodService.getExamPeriodById(this.id).subscribe(data => {
      this.examperiod = data;
    }, error => console.log(error));

    this.examPeriodService.getExamPeriodExams(this.id).subscribe(data => {
      console.log(data);
      this.exams = data;
    }, error => console.log(error));
  }

}
