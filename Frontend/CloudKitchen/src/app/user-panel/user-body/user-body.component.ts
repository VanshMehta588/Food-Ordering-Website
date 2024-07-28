import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrls: ['./user-body.component.css']
})
export class UserBodyComponent {
  constructor(private location:Location) {}
  @Input() collapsed =false;
  @Input() screenWidth=0;
  getBodyClass():string{
    let styleClass ='';
    if(this.collapsed && this.screenWidth >768){
    styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <=768 && this.screenWidth>0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
  // goBack():void{
  //   this.location.back();
  //   // window.location.reload();
  // }
}
