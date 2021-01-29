import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../model/teacher';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  
  teachers: Teacher[];
  
  constructor(private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers() {
    this.teacherService.getTeachersList().subscribe(data => {
      this.teachers = data;
    });
  }

  updateTeacher(id: number){
    this.router.navigate(['update-teacher', id]);
  }

  deleteTeacher(id: number){
    this.teacherService.deleteTeacher(id).subscribe(data => {
      console.log(data);
      this.getTeachers();
    });
  }

  teacherDetails(id: number){
    this.router.navigate(['teacher-details', id]);
  }

  teacherDetailsByUserId(userid: number) {
    this.router.navigate(['for-teacher', userid]);
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
