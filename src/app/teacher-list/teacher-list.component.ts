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

}
