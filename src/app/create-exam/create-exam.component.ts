import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { Exam } from '../model/exam';
import { ExamPeriod } from '../model/exam-period';
import { Student } from '../model/student';
import { CourseService } from '../services/course.service';
import { ExamPeriodService } from '../services/exam-period.service';
import { ExamService } from '../services/exam.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {

  courses: Course[];
  students: Student[];
  examperiods: ExamPeriod[];
  courseId: number;
  studentId: number;
  examPeriodId: number;
  exam: Exam = new Exam();
  form: FormGroup;
  constructor(private examService: ExamService,
    private router: Router, private courseService: CourseService,
    private studentService: StudentService, 
    private examPeriodService: ExamPeriodService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, private httpClient: HttpClient) {
      
      this.form = this.formBuilder.group({
        examPoints : [null, Validators.required],
        labPoints : [null, Validators.required], 
        datum : [null, Validators.required],
        courses : [''],
        students : [''],
        examperiods : ['']
      });
    }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/api/courses').subscribe(
      data => {
        this.courses = data as Course[];
      }, error => console.error(error));
    this.httpClient.get('http://localhost:8080/api/students').subscribe(
      data => {
      this.students = data as Student[];
    }, error => console.error(error));
    this.httpClient.get('http://localhost:8080/api/examperiods').subscribe(
      data => {
      this.examperiods = data as ExamPeriod[];
    }, error => console.error(error));
  }

  saveExam(){
    this.exam = this.form.value;
    this.courseId = this.form.value['courses'];
    this.studentId = this.form.value['students'];
    this.examPeriodId = this.form.value['examperiods'];
    this.courseService.getCourseById(this.courseId).subscribe(data => {
      console.log(data);
      this.exam.course = data;
      this.studentService.getStudentById(this.studentId).subscribe(data => {
        console.log(data);
        this.exam.student = data;
        this.examPeriodService.getExamPeriodById(this.examPeriodId).subscribe(data => {
          console.log(data);
          this.exam.examPeriod = data;
          this.examService.createExam(this.exam).subscribe(data => {
            console.log(data);
            this.goToExamsList();
          }, error => console.error(error));
        }, error => console.error(error));
      }, error => console.error(error));
    }, error => console.error(error));
  }

  goToExamsList(){
    this.router.navigate(['/exams']);
  }

  onSubmit() {
    console.log(this.exam);
    this.saveExam();
  }
}
