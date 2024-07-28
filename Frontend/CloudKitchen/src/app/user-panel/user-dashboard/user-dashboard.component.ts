import { Component } from '@angular/core';
import { signUp } from 'src/app/services/data-type';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  userId: string = '';
  userName: string ='';
  userPhone: string ='';
  userEmail: string ='';
  userPassword: string ='';
  userImageUrl: string ='';
constructor(private user:UserService){}


ngOnInit(): void {
    if(localStorage.getItem('user'))
    {
      debugger
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.userId = userData.id;
      this.userName=userData.username;
      this.userPhone=userData.number;
      this.userEmail=userData.email;
      this.userPassword=userData.password;
      this.userImageUrl=userData.imageUrl;
    }
  }
}
