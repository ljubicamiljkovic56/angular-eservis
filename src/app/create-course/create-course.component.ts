import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../model/course';
import { Teacher } from '../model/teacher';
import { CourseService } from '../services/course.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  teachers: Teacher[];
  id: number;
  courseId: number;
  course: Course = new Course();
  form: FormGroup;
  idString: string[];
  constructor(private courseService: CourseService,
    private router: Router, private teacherService: TeacherService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, private httpClient: HttpClient) {
      
      this.form = this.formBuilder.group({
        name : [null, Validators.required],
        espb : [null, Validators.required], 
        semester: [null, Validators.required],
        teachers : ['']
      });
     }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/api/teachers').subscribe(
      data => {
        this.teachers = data as Teacher[];
      }, error => console.error(error));
  }



  saveCourse() {
    this.course = this.form.value;
    this.id = this.form.value['teachers'];
   // this.id = this.course.teacher.id;
    console.log(this.id);
    this.teacherService.getTeacherById(this.id).subscribe(data =>{
      this.course.teacher = data;
      console.log(data);
      this.courseService.createCourse(this.course).subscribe(data => {
        console.log(this.course.name)
        console.log(data);
        this.goToCoursesList();
      }, error => console.error(error));
    }, error => console.error(error));
  
  }

  goToCoursesList(){
    this.router.navigate(['/courses']);
  }

  onSubmit() {
    console.log(this.course);
    this.saveCourse();
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
