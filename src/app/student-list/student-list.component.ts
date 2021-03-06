import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../app/model/student';
import { StudentService } from '../../app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents() {
    this.studentService.getStudentsList().subscribe(data => {
        this.students = data;
    });
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    });
  }

  studentDetails(id: number) {
    this.router.navigate(['student-details', id]);
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
