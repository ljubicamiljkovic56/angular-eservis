import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {

  id: number;
  admin: Admin;
  constructor(private route: ActivatedRoute,
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.admin = new Admin();
    this.adminService.getAdminById(this.id).subscribe(data => {
      this.admin= data;
    }, error => console.log(error));

  }

}
