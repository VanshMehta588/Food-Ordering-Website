import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router } from '@angular/router';
import { item } from 'src/app/services/data-type';
import { ItemService } from 'src/app/services/item.service';
import { usernavbarData } from './user-nav-data';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}

@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.css']
})
export class UserSidenavComponent {
  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<any> = new EventEmitter();
  collapsed = false;
  screenwidth=0;
  navData = usernavbarData;
  menuType: string = 'default';
  adminName: string = '';
  userName: string = '';
  searchResult: undefined | item[];
  cartItems=0;

  constructor(private route: Router,private item:ItemService){}
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenwidth = window.innerWidth;
    if(this.screenwidth <=768){
      this.collapsed =false;
      this.onToggleSidenav.emit({collapsed: this.collapsed,screenWidth: this.screenwidth});

    }
  }

  ngOnInit(){
    this.screenwidth = window.innerWidth;
}
  toggleCollapse():void{
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed,screenWidth: this.screenwidth});
  }
  closeSidenav():void{
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed,screenWidth: this.screenwidth});

  }
}
