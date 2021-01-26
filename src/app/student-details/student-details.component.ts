import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Document } from '../model/document';
import { Enrollment } from '../model/enrollment';
import { Exam } from '../model/exam';
import { Payment } from '../model/payment';
import { Student } from '../model/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id: number;
  student: Student;
  enrollments: Enrollment[];
  exams: Exam[];
  payments: Payment[];
  documents: Document[];
  constructor(private route: ActivatedRoute,
    private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
    }, error => console.log(error));

    this.studentService.getStudentsEnrollments(this.id).subscribe(data => {
      console.log(data);
      this.enrollments = data;
    }, error => console.log(error));

    this.studentService.getStudentsExams(this.id).subscribe(data => {
      console.log(data);
      this.exams = data;
    }, error => console.log(error));

    this.studentService.getStudentsPayments(this.id).subscribe(data => {
      console.log(data);
      this.payments = data;
    }, error => console.log(error));

    this.studentService.getStudentsDocuments(this.id).subscribe(data => {
      console.log(data);
      this.documents = data;
    }, error => console.log(error));
  }

}
