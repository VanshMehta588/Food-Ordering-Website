import { Component, EventEmitter, HostListener, Output } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed: boolean;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

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
