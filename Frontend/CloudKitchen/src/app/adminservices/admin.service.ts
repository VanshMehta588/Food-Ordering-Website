import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { login } from '../services/data-type';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private router:Router) { }
  isAdminLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError=new EventEmitter<boolean>(false)

  private baseUrl:string = "https://localhost:7054/api/Admin/"

  adminLogin(data:any):Observable<any>{
    return this.http.post("https://localhost:7054/api/Admin/authenticate", data);

  }
  getAdminByEmail(email:any){
    return this.http.get(`https://localhost:7054/api/Admin/GetByEmail/${email}`)
  }

//   adminLogin(data:login){
//     // this.http.post(`http://localhost:3000/seller?title=json-server&author=typicode`,
//     this.http.get(`http://localhost:3000/admins?email=${data.email}&password=${data.password}`,
//     {observe:'response'}).subscribe((result:any)=>{
//       console.warn(result);
//       if(result && result.body && result.body.length){
//         console.warn("admin logged in")
//          localStorage.setItem('admin',JSON.stringify(result.body))
//       this.router.navigate(['/admin-dashboard']);
//       }else{
//         console.warn("login failed")
//         this.isLoginError.emit(true)
//       }
//     })
//  }
  adminAuthReload(){
    if(localStorage.getItem('admin')){
      this.router.navigate(['/admin-dashboard'])
    }
  }
}
