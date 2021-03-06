import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(){
    this.courseService.getCoursesList().subscribe(data => {
      this.courses = data;
    });
  }

  updateCourse(id: number){
    this.router.navigate(['update-course',  id]);
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(data => {
      console.log(data);
      this.getCourses();
    });
  }

  courseDetails(id: number) {
    this.router.navigate(['course-details', id]);
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
