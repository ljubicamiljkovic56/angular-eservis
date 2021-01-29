import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../model/exam';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  exams: Exam[];

  constructor(private examService: ExamService,
    private router: Router) { }

  ngOnInit(): void {
    this.getExams();
  }

  private getExams(){
    this.examService.getExamsList().subscribe(data => {
      this.exams = data;
    });
  }

  updateExam(id: number){
    this.router.navigate(['update-exam',  id]);
  }

  deleteExam(id: number) {
    this.examService.deleteExam(id).subscribe(data => {
      console.log(data);
      this.getExams();
    });
  }

  examDetails(id: number) {
    this.router.navigate(['exam-details', id]);
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
