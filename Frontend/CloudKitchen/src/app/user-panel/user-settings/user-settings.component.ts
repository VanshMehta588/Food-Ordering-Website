import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  constructor(public route: Router){}

  userlogout() {
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth']);
  }
}
