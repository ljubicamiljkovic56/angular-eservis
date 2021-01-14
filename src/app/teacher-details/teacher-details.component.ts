import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute,
    private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teacher = new Teacher();
    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;
    });
  }

}
