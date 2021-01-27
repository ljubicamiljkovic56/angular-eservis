import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  id: number;
  form: FormGroup;
  admin: Admin = new Admin();
  constructor(private adminService: AdminService, 
    private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private httpClient: HttpClient) { 
      this.form = this.formBuilder.group({
        firstname : [null, Validators.required],
        lastname : [null, Validators.required]
      });
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminService.getAdminById(this.id).subscribe(data => {
      this.admin = data;
    }, error => console.log(error));
  }


  updateAdmin(){
    this.admin = this.form.value;
    this.admin.id = this.id;
    this.adminService.updateAdmin(this.id, this.admin).subscribe(data =>{
      console.log(this.id);
      console.log(data);
      this.admin = new Admin();
      this.goToAdminsList();
    }, error => console.log(error));
  }

  goToAdminsList(){
    this.router.navigate(['/admins']);
  }

  onSubmit(){
    console.log(this.admin);
    this.updateAdmin();
  }
}
