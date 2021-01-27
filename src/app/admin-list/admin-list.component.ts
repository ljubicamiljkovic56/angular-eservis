import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins: Admin[];
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  private getAdmins(){
    this.adminService.getAdminsList().subscribe(data => {
      this.admins = data;
    });
  }

  updateAdmin(id: number){
    this.router.navigate(['update-admin',  id]);
  }

  deleteAdmin(id: number) {
    this.adminService.deleteAdmin(id).subscribe(data => {
      console.log(data);
      this.getAdmins();
    });
  }

  adminDetails(id: number) {
    this.router.navigate(['admin-details', id]);
  }

}
