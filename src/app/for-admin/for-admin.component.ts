import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-for-admin',
  templateUrl: './for-admin.component.html',
  styleUrls: ['./for-admin.component.css']
})
export class ForAdminComponent implements OnInit {

  role:string;
  id: number;
  admin: Admin;
  adminId: number; 
  constructor(private router: Router, private authService: AuthService,
    private adminService: AdminService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn() == false){
      this.router.navigate(['login']);
    }
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('password'));

    this.role = localStorage.getItem('role');
    this.id = Number(localStorage.getItem('id'));
    if(this.role === 'ROLE_ADMIN'){
      this.adminService.getAdminByUserId(this.id).subscribe(data => {
        console.log(this.id);
        console.log(data);
        console.log(data.id);
        this.adminId = Number(data.id);
        console.log(this.adminId);
        this.admin = data;
        this.admin.firstname = data.firstname;
        this.admin.lastname = data.lastname;
      }, error => console.log(error));
    }
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
