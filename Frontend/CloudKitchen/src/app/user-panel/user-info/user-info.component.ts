import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { signUp } from 'src/app/services/data-type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  userName: string = '';
  userEmail: string = '';
  userPhoneNo: string = '';
  userImageUrl: string = '';
  userPassword: string = '';
  userId:number=0;
  userFlatno:string='';
  userStreet:string='';
  userCity:string='';
  userState:string='';
  userZipCode:string='';
  constructor(private route:ActivatedRoute,private router:Router,private user:UserService){ }

  ngOnInit():void{
    this.list();
  }

  list(){
    debugger
    (localStorage.getItem('user'))
    {
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.userId = userData.id;
      this.userName = userData.username;
      this.userEmail = userData.email;
      this.userPhoneNo = userData.number;
      this.userImageUrl = userData.imageUrl;
      this.userPassword = userData.password;
      this.userFlatno = userData.flatno;
      this.userStreet = userData.street;
      this.userCity = userData.city;
      this.userState = userData.state;
      this.userZipCode = userData.zipCode;

    }
}
updateUser(id:number){
  debugger
  this.router.navigate(['/user-panel/user-update-info/',id]);

}
}
