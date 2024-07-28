import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
 cartItem: any;
//  tp = this.cart.totalPrice;
//  ti = this.cart.totalitems
  constructor(private cartService: CartService,private router:Router){
    this.setCart();
  }

  ngOnInit(): void {
  }
  setCart(){
    debugger
    this.cart=this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); //instance Load Data
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    debugger
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  // check(){
  //   debugger

  //   this.router.navigate(['/menu/checkout']);
  //   //this.cartService.gettotal(this.tp,this.ti);
  // }
  // handleQuantity(val:string){
  //   debugger
  //   // var itemid =this.cart.items[]
  //   var qunt = this.cart.items[0].quantity;
  //   if(qunt<20 && val==='plus'){
  //     qunt +=1
  //   }
  //   else if(qunt > 1 && val==='min'){
  //     qunt -=1
  //   }
  //   this.cart.items[0].quantity = qunt;
  // }

}
