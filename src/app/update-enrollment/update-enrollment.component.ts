import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { Enrollment } from '../model/enrollment';
import { Student } from '../model/student';
import { CourseService } from '../services/course.service';
import { EnrollmentService } from '../services/enrollment.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-enrollment',
  templateUrl: './update-enrollment.component.html',
  styleUrls: ['./update-enrollment.component.css']
})
export class UpdateEnrollmentComponent implements OnInit {

  courses: Course[];
  students: Student[];
  enrollment: Enrollment = new Enrollment();
  form: FormGroup;
  id: number;
  courseId: number;
  studentId: number;

  constructor(private enrollmentService: EnrollmentService, 
    private courseService: CourseService, private studentService: StudentService,
    private router: Router, private formBuilder: FormBuilder,
    private route: ActivatedRoute, private httpClient: HttpClient) { 
      
      this.form = this.formBuilder.group({
        startDate : [null, Validators.required],
        endDate : [null, Validators.required], 
        courses: [''],
        students : ['']
      });
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpClient.get('http://localhost:8080/api/courses').subscribe(
      data => {
        this.courses = data as Course[];
      }, error => console.error(error));

    this.httpClient.get('http://localhost:8080/api/students').subscribe(
      data => {
        this.students = data as Student[];
      }, error => console.error(error));
  }

  updateEnrollment(){
    this.enrollment = this.form.value;
    this.enrollment.id = this.id;
    this.courseId = this.form.value['courses'];
    this.studentId = this.form.value['students'];
    this.courseService.getCourseById(this.courseId).subscribe(data => {
      this.enrollment.course = data;
      console.log(data);
      this.studentService.getStudentById(this.studentId).subscribe(data => {
        this.enrollment.student = data;
        console.log(data);
        this.enrollmentService.updateEnrollment(this.id, this.enrollment).subscribe(data => {
          console.log(data);
          this.enrollment = new Enrollment();
          this.goToEnrollmentsList();
        }, error => console.error(error));
      }, error => console.error(error));
    }, error => console.error(error));

  }

  goToEnrollmentsList(){
    this.router.navigate(['/enrollments']);
  }

  onSubmit(){
    console.log(this.enrollment);
    this.updateEnrollment();
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
