import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id: number;
  course: Course;
  constructor(private route: ActivatedRoute,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.course = new Course();
    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data;
    });
  }

}
