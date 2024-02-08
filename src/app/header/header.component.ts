import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private auth: AuthService,private router:Router){}

  getAuthStatus()
  {
    if(this.auth.isAdminUser())
    {
      return true;
    }
    return false;
  }

  logout()
  {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
