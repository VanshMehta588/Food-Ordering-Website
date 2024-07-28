import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from 'src/app/services/data-type';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
userData:undefined | signUp[];
userMessage:undefined|string;

constructor(private user:UserService,private router:Router){

}

ngOnInit():void{
  this.list();
}

deleteUser(id:number){
  console.warn("test id",id)


this.user.deleteUser(id).subscribe((result)=>{
  if(result){
    this.userMessage="User Data is deleted";
    this.list()
  }
})
setTimeout(()=>{
  this.userMessage=undefined
},3000);
}

list(){
  this.user.getAllUser().subscribe((result)=>{
    console.warn(result);
    if(result){
      this.userData=result;
    }
  })
}
}
