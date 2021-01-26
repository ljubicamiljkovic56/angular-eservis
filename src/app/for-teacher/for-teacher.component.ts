import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { Teacher } from '../model/teacher';
import { AuthService } from '../services/auth.service';
import { CourseService } from '../services/course.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-for-teacher',
  templateUrl: './for-teacher.component.html',
  styleUrls: ['./for-teacher.component.css']
})
export class ForTeacherComponent implements OnInit {

  role: string;
  id: number;
  teacher: Teacher;
  courses: Course[];
  teacherId: number;
  constructor(private router: Router, private authService: AuthService,
    private teacherService: TeacherService, private courseService: CourseService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn() == false){
      this.router.navigate(['login']);
    }
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('password'));

    this.role = localStorage.getItem('role');
    this.id = Number(localStorage.getItem('id'));
    if(this.role === 'ROLE_TEACHER'){
      this.teacherService.getTeacherByUserId(this.id).subscribe(data => {
        console.log(this.id);
        console.log(data);
        console.log(data.id);
        this.teacherId = Number(data.id);
        console.log(this.teacherId);
        this.teacher = data;
        this.teacherService.getTeachersCourses(this.teacherId).subscribe(data => {
          console.log(this.teacherId);
          console.log(data);
          this.courses = data;
        }, error => console.error(error));
      }, error => console.error(error));
    }
  }

  
  

}
