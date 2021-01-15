import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { Course } from '../model/course';
import { Teacher } from '../model/teacher';
import { CourseService } from '../services/course.service';
import { TeacherService } from '../services/teacher.service';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  id: number;
  teacherid: number;
  form: FormGroup;
  course: Course = new Course();
  teachers: Teacher[];
  idString: string[];
  constructor(private courseService: CourseService,
    private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private httpClient: HttpClient,
    private teacherService: TeacherService) { 

      this.form = this.formBuilder.group({
        name : [null, Validators.required],
        espb : [null, Validators.required], 
        semester: [null, Validators.required],
        teachers : ['']
      });
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data;
    }, error => console.log(error));
    this.httpClient.get('http://localhost:8080/api/teachers').subscribe(
      data => {
        this.teachers = data as Teacher[];
      }, error => console.error(error));
  }

  updateCourse(){
    this.course = this.form.value;
    this.course.id = this.id;
    this.teacherid = this.form.value['teachers'];
    console.log(this.teacherid);
    this.teacherService.getTeacherById(this.teacherid).subscribe(data =>{
      this.course.teacher = data;
      console.log(data);
      this.courseService.updateCourse(this.id, this.course).subscribe(data => {
        console.log(this.id)
        console.log(this.course.name)
        console.log(data);
        this.course = new Course();
        this.goToCourseList();
      }, error => console.error(error));
    }, error => console.error(error));
  }

  goToCourseList(){
    this.router.navigate(['/courses']);
  }

  onSubmit(){
    console.log(this.course);
    this.updateCourse();
  }
}
