import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { item } from 'src/app/services/data-type';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = '';
  userImageUrl: string = '';
  adminName: string = '';
  searchResult: undefined | item[];
  cartItems=0;

  constructor(public route: Router, private item:ItemService,private userService:UserService) { }

  ngOnInit(): void {
  this.route.events.subscribe((val: any) => {
    if (val.url) {
      if(localStorage.getItem('user')){
        this.menuType = 'user'
        let userStore = localStorage.getItem('user');
        let userData = userStore && JSON.parse(userStore);
        this.userName = userData.username;
        this.userImageUrl=userData.imageUrl
        this.menuType = 'user';
      }

      else {
        this.menuType = 'default'
      }
    }
  });
  let cartData = localStorage.getItem('localCart')
  if(cartData){
    this.cartItems=JSON.parse(cartData).length
  }
  this.item.cartData.subscribe((items)=>{
    this.cartItems=items.length
  })
}
userlogout() {
  localStorage.removeItem('user');
  this.route.navigate(['/']);
}
searchProduct(query: KeyboardEvent) {
  if (query) {
    const element = query.target as HTMLInputElement;
    console.warn(element.value);
    this.item.searchItems(element.value).subscribe((result) => {
      console.warn(result);
      if(result.length>5){
        result.length=5;
      }
      this.searchResult = result;

    })

  }
}
hideSearch(){
  this.searchResult=undefined
}
redirectToDetails(id:number){
  this.route.navigate(['/details/'+id]);
}
submitSearch(value:string){
  console.warn(value);
  this.route.navigate([`search/${value}`]);

}
}
