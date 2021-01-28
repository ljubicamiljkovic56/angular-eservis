import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../model/teacher';
import { AuthService } from '../services/auth.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {

  role: string;
  id: number;
  teacherId: number;
  teacher: Teacher = new Teacher();
  constructor(private teacherService: TeacherService,
    private route: ActivatedRoute, private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;
    }, error => console.log(error));
  }

  editTeacher(){
    if(this.authService.isLoggedIn() == false){
      this.router.navigate(['login']);
    }
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('password'));

    this.role = localStorage.getItem('role');
    this.id = Number(localStorage.getItem('id'));
    console.log(this.id);
    if(this.role === 'ROLE_TEACHER'){
      this.teacherService.getTeacherByUserId(this.id).subscribe(data => {
        console.log(this.id);
        console.log(data);
        console.log(data.id);
        this.teacherId = Number(data.id);
        console.log(this.teacherId);
        //this.teacher = data;
        this.teacherService.updateTeacher(this.teacherId, this.teacher).subscribe(data => {
          this.teacher = new Teacher();
          this.goBackToTeacher();
        }, error => console.log(error));
      }, error => console.log(error));
    }
  }

  goBackToTeacher(){
    this.router.navigate(['/for-teacher']);
  }


  onSubmit(){
    this.editTeacher();
  }
}
