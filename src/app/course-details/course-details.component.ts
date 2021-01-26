import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
import { Enrollment } from '../model/enrollment';
import { Exam } from '../model/exam';
import { Student } from '../model/student';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  id: number;
  course: Course;
  students: Student[];
  enrollments: Enrollment[];
  exams: Exam[];
  constructor(private route: ActivatedRoute,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.course = new Course();
    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data;
    }, error => console.log(error));

    this.courseService.getCourseEnrollments(this.id).subscribe(data => {
      console.log(data);
      this.enrollments = data;
    }, error => console.log(error));

    this.courseService.getCourseExams(this.id).subscribe(data => {
      console.log(data);
      this.exams = data;
    }, error => console.log(error));
  }

}
