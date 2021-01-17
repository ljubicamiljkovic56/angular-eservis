import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamPeriod } from '../model/exam-period';
import { ExamPeriodService } from '../services/exam-period.service';

@Component({
  selector: 'app-exam-period-list',
  templateUrl: './exam-period-list.component.html',
  styleUrls: ['./exam-period-list.component.css']
})
export class ExamPeriodListComponent implements OnInit {

  examperiods: ExamPeriod[];

  constructor(private examPeriodService: ExamPeriodService,
    private router: Router) { }

  ngOnInit(): void {
    this.getExamPeriods();
  }

  private getExamPeriods(){
    this.examPeriodService.getExamPeriodsList().subscribe(data => {
      this.examperiods = data;
    });
  }

  updateExamPeriod(id: number){
    this.router.navigate(['update-examperiod',  id]);
  }

  deleteExamPeriod(id: number) {
    this.examPeriodService.deleteExamPeriod(id).subscribe(data => {
      console.log(data);
      this.getExamPeriods();
    });
  }

  examPeriodDetails(id: number) {
    this.router.navigate(['examperiod-details', id]);
  }
}
