import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enrollment } from '../model/enrollment';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-enrollment-details',
  templateUrl: './enrollment-details.component.html',
  styleUrls: ['./enrollment-details.component.css']
})
export class EnrollmentDetailsComponent implements OnInit {

  id: number;
  enrollment: Enrollment;
  constructor(private route: ActivatedRoute, private router: Router,
    private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.enrollment = new Enrollment();
    this.enrollmentService.getEnrollmentById(this.id).subscribe(data => {
      this.enrollment = data;
    });
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
