import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute,
    private examPeriodService: ExamPeriodService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.examperiod = new ExamPeriod();
    this.examPeriodService.getExamPeriodById(this.id).subscribe(data => {
      this.examperiod = data;
    });
  }

}
