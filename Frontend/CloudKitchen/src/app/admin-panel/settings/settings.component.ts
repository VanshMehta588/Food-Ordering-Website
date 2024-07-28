import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  constructor(public route: Router){}

  logout() {
    localStorage.removeItem('admin');
    this.route.navigate(['/admin']);
  }
}
