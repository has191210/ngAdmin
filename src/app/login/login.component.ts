import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error='';

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
  }

     get f() { return this.loginForm.controls; }

   onSubmit() {
     this.submitted = true;
       // stop here if form is invalid
       if (this.loginForm.invalid) {
        console.log("132456");
           return;
       }
       this.authenticationService.login(this.f.username.value, this.f.password.value)
       .pipe(first())
       .subscribe(
         data=>{
           console.log(data);
           this.router.navigate(['/home']);
           console.log('Test');
         },
         error=>{
           this.error=error;
           console.log(this.error);
         }
       );

     }

}
