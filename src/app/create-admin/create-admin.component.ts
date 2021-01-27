import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  id: number;
  admin: Admin = new Admin();
  form: FormGroup;
  constructor(private adminService: AdminService,
    private router: Router, private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        firstname : [null, Validators.required],
        lastname : [null, Validators.required]
      });
     }

  ngOnInit(): void {
  }

  saveAdmin() {
    this.admin = this.form.value;
    this.adminService.createAdmin(this.admin).subscribe(data => {
      console.log(data);
      this.goToAdminsList();
    }),
    error => console.log(error);
  }

  goToAdminsList(){
    this.router.navigate(['/admins']);
  }

  onSubmit() {
    console.log(this.admin);
    this.saveAdmin();
  }
}
