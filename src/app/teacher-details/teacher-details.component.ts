import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { Teacher } from '../model/teacher';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  id: number;
  teacher: Teacher;
  courses: Course[];
  constructor(private route: ActivatedRoute, private router: Router,
    private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teacher = new Teacher();
    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;
    }, error => console.log(error));

    this.teacherService.getTeachersCourses(this.id).subscribe(data => {
      console.log(data);
      this.courses = data;
    }, error => console.log(error));
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
