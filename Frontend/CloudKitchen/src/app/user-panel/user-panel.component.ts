import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  isSideNavCollapsed =false;
  screenWidth=0;

  onToggleSidenav(data:SideNavToggle): void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
  onCloseSidenav(event:any){
    debugger
    this.screenWidth=event.screenWidth;
    this.isSideNavCollapsed=event.collapsed;
  }

  ngOnInit(): void{

  }
}
