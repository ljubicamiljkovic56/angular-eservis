import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../model/exam';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-exam-details',
  templateUrl: './exam-details.component.html',
  styleUrls: ['./exam-details.component.css']
})
export class ExamDetailsComponent implements OnInit {

  id: number;
  exam: Exam;
  constructor(private route: ActivatedRoute,
    private examService: ExamService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.exam = new Exam();
    this.examService.getExamById(this.id).subscribe(data => {
      this.exam = data;
    });
  }

}
