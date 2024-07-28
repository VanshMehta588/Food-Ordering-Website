import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../adminservices/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private admin: AdminService,private router:Router) { }
  showLogin : boolean=true;
  showSignUp : boolean = false;
  authError: string = '';
  adminLoginForm!:FormGroup;
  isAdminLogin:boolean = false;

  ngOnInit(): void {
    this.adminLoginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
  });
    //this.admin.adminAuthReload();
  }


  login(){
     debugger
    this.admin.adminLogin(this.adminLoginForm.value).subscribe({
      next:((res:any) => {

      alert(res.message);

      this.admin.getAdminByEmail(this.adminLoginForm.value.email).subscribe(data => {
        localStorage.setItem('admin',JSON.stringify(data));
        this.router.navigate(['/admin-dashboard']);
        this.adminLoginForm.reset();
      })



    }),
    error:(err=>{
    alert(err?.error.message);
  })
})
}
  // openLogin(){
  //   this.showLogin=true;
  // }
  // openSignUp(){
  //   this.showLogin=true;
  //   this.showSignUp=false;
  // }


}
