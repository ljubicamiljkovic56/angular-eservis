import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role: string;
  username: string;
  password: string;
  form: FormGroup;
  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.form = this.formBuilder.group({
        username : [null, Validators.required],
        password: [null, Validators.required]
      });
    }

  ngOnInit(): void {
    localStorage.removeItem('username');
		console.log(localStorage.getItem('username'));
  }

  onSubmit(){
    console.log('Logovanje');
		this.username = this.form.value.username;
    this.password = this.form.value.password;
    const auth: any = {};
		auth.username = this.form.value.username;
		auth.password = this.form.value.password;
    console.log(this.username);
    console.log(this.password);
    console.log(auth.username);
    console.log(auth.password);
    this.authService.login(auth).subscribe(data =>{
      console.log(data);
      localStorage.setItem('id', data.id);
      localStorage.setItem('username', data.username);
      localStorage.setItem('password', data.password);
      console.log(localStorage);
      console.log(data.username);
					var user = {
						username : '',
						role : [ 
							{authority : data.authority.name}
						]
          }
          user.username = this.form.value.username;
          console.log(user);
          var token = localStorage.getItem('username');
          console.log(token);
          if(typeof token !== 'undefined'){
            console.log(token);
						console.log(user);
						this.role = user.role[0].authority;
						console.log(this.role);
						localStorage.setItem('role',this.role);
						if(this.role === 'ROLE_ADMIN') {
							this.router.navigate(['/for-admin'])
						}else if(this.role === 'ROLE_TEACHER') {
							this.router.navigate(['/for-teacher'])
						}else if(this.role === 'ROLE_STUDENT'){
							this.router.navigate(['/for-student'])
						}else {
              this.router.navigate(['/login'])
            }
          }
    });
  }

}
