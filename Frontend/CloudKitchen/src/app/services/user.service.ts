import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { login, signUp } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }
  // isLoginError=new EventEmitter<boolean>(false)


  private baseUrl:string = "https://localhost:44346/api/User/"

  // userSignUp(user:signUp){
  //   // this.http.post("https://localhost:7056/api/User"
  //   this.http.post<any>("https://localhost:7056/api/User/signup",user)
  //   // ,{observe:'response'}).subscribe((result)=>{
  //   //   console.warn(result);

  //   //   if(result){
  //   //     localStorage.setItem('user',JSON.stringify(result.body));
  //   //     this.router.navigate(['/']);
  //   //   }
  //   // })
  // }
  userSignUp(user:signUp){
      return this.http.post('https://localhost:7054/api/User/signup',user)
  }
  getUserByEmail(email:any){
    return this.http.get(`https://localhost:7054/api/User/GetByEmail/${email}`)
  }
  getUserById(id:number){
    return this.http.get(`https://localhost:7054/api/User/${id}`)
  }
  getAllUser(){
    return this.http.get<signUp[]>('https://localhost:7054/api/User');
  }
  updateUser(data: signUp) {
    return this.http.put<signUp[]>(`https://localhost:7054/api/User/${data.id}`, data);
  }
  deleteUser(id: number) {
    return this.http.delete(`https://localhost:7054/api/User/${id}`)
  }
  userLogin(data:any):Observable<any>{
    return this.http.post('https://localhost:7054/api/User/authenticate', data);
  }
//   userLogin(data:any):Observable<any>{
//     // this.http.post(`http://localhost:3000/seller?title=json-server&author=typicode`,
//     // this.http.get(`https://localhost:7056/api/User?email=${data.email}&password=${data.password}`,
//     return this.http.post("https://localhost:7056/api/User/authenticate", data);
//     // {observe:'response'}).subscribe((result:any)=>{
//     //   console.warn(result);
//     //   if(result && result.body && result.body.length){
//     //     console.warn("user logged in")
//     //      localStorage.setItem('user',JSON.stringify(result.body))
//     //   this.router.navigate(['/']);
//     //   }
//     // else{
//     //     console.warn("login failed")
//     //     this.isLoginError.emit(true)
//     //   }
//     // })
//  }
  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/'])
    }
  }
}
