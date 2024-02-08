import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'Angular Reactive forms';

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private authService: AuthService) {
    this.contactForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
    })
  };

  onSubmit()
  {
   if(this.authService.login(this.contactForm.controls['username'].value,this.contactForm.controls['password'].value))
   {
    this.router.navigateByUrl(this.authService.isAdminUser()? '/dashboard':'/public');
   }
   else
   {
    alert('Login failed');
   }

  }
}


