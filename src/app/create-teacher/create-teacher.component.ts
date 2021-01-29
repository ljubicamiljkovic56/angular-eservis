import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../model/teacher';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  teacher: Teacher = new Teacher();
  constructor(private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTeacher(){
    this.teacherService.createTeacher(this.teacher).subscribe(data => {
      console.log(data);
      this.goToTeacherList();
    }),
    error => console.log(error);
  }

  goToTeacherList(){
    this.router.navigate(['/teachers']);
  }

  onSubmit(){
    console.log(this.teacher);
    this.saveTeacher();
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
