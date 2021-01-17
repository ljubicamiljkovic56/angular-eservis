import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enrollment } from '../model/enrollment';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {

  enrollments: Enrollment[];

  constructor(private enrollmentService: EnrollmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEnrollments();
  }

  private getEnrollments(){
    this.enrollmentService.getEnrollmentsList().subscribe(data => {
      this.enrollments = data;
    });
  }

  updateEnrollment(id: number){
    this.router.navigate(['update-enrollment',  id]);
  }

  deleteEnrollment(id: number) {
    this.enrollmentService.deleteEnrollment(id).subscribe(data => {
      console.log(data);
      this.getEnrollments();
    });
  }

  enrollmentDetails(id: number) {
    this.router.navigate(['enrollment-details', id]);
  }

}
