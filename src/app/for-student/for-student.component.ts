import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { Enrollment } from '../model/enrollment';
import { Exam } from '../model/exam';
import { Student } from '../model/student';
import { AuthService } from '../services/auth.service';
import { CourseService } from '../services/course.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-for-student',
  templateUrl: './for-student.component.html',
  styleUrls: ['./for-student.component.css']
})
export class ForStudentComponent implements OnInit {

  role: string;
  id: number;
  student: Student;
  enrollments: Enrollment[];
  exams: Exam[];
  studentId: number;
  constructor(private router: Router, private authService: AuthService,
    private studentService: StudentService,
    private courseService: CourseService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn() == false){
      this.router.navigate(['login']);
    }
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('password'));

    this.role = localStorage.getItem('role');
    this.id = Number(localStorage.getItem('id'));
    if(this.role === 'ROLE_STUDENT') {
      this.studentService.getStudentByUserId(this.id).subscribe(data => {
        console.log(this.id);
        console.log(data);
        console.log(data.id);
        this.studentId = Number(data.id);
        console.log(this.studentId);
        this.student = data;
        this.studentService.getStudentsEnrollments(this.studentId).subscribe(data => {
          console.log(this.studentId);
          console.log(data);
          this.enrollments = data;
          console.log(this.enrollments[0]);
          //this.studentService
        }, error => console.log(error));
      },error => console.error(error));
      
    }
  }

}
