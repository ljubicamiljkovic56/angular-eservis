import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-for-teacher',
  templateUrl: './for-teacher.component.html',
  styleUrls: ['./for-teacher.component.css']
})
export class ForTeacherComponent implements OnInit {

  role: string;
  id: number;
  constructor(private router: Router, private authService: AuthService,
    private teacherService: TeacherService) { }

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
      this.teacherService.getTeacherById(this.id).subscribe(data => {
        console.log(data);
      })
    }
  }
  
  

}
