import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../model/exam';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  id: number;
  exam: Exam = new Exam();
  form: FormGroup;
  constructor(private examService: ExamService,
    private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private httpClient: HttpClient) {
      
      this.form = this.formBuilder.group({
        examPoints : [null, Validators.required],
        labPoints : [null, Validators.required], 
        datum: [null, Validators.required]
      });
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.examService.getExamById(this.id).subscribe(data => {
      this.exam = data;
    }, error => console.log(error));

  }

  updateExam(){
    this.exam = this.form.value;
    this.exam.id = this.id;
    this.examService.updateExam(this.id, this.exam).subscribe(data => {
      console.log(data);
      this.exam = new Exam();
      this.goToExamsList();
    }, error => console.error(error));
  }

  goToExamsList(){
    this.router.navigate(['/exams']);
  }

  onSubmit(){
    console.log(this.exam);
    this.updateExam();
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
