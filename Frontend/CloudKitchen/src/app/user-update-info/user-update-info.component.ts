import { Component } from '@angular/core';
import { signUp } from '../services/data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
declare var $:any;

@Component({
  selector: 'app-user-update-info',
  templateUrl: './user-update-info.component.html',
  styleUrls: ['./user-update-info.component.css']
})
export class UserUpdateInfoComponent {
  userData:undefined|signUp;
  updateMessage:undefined | string;
  userImageUrl:string='';
  userName:string='';
  userEmail:string='';
  udp:any;

  constructor(private route:ActivatedRoute,private user:UserService,private router:Router){ }

  ngOnInit():void{
    debugger
    let UserId=this.route.snapshot.paramMap.get('id');
    console.warn(UserId);
    UserId && this.user.getUserById(Number(UserId)).subscribe((data:any)=>{
      this.userData = data;
      this.udp=data;
    console.warn(data);

    })
    this.list();
  }

  submit(data:any){
    console.warn(data);
    if(this.userData){
      data.id=this.userData.id
    }
    this.user.updateUser(data).subscribe((result)=>{
      if(result){
        this.updateMessage="User has updated"
        localStorage.setItem('user',JSON.stringify(data));
        // window.location.reload();
        this.router.navigate(['/user-panel/user-info']);
      }
    });
    setTimeout(()=>{
      this.updateMessage = undefined;
    },3000);
  }

  list(){
    debugger
    (localStorage.getItem('user'))
    {
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.userName = userData.username;
      this.userEmail = userData.email;
      this.userImageUrl = userData.imageUrl;
    }
}
}

