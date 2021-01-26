import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute,
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

}
