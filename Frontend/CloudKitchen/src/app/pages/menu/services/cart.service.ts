import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();
addToCart(food:Foods,qunt:number) :void{
  debugger
  let cartItem = this.cart.items.find(item => item.food.id === food.id)

  if(cartItem){
    this.changeQuantity(food.id, qunt)
    localStorage.setItem('cart',JSON.stringify(this.cart))
    return;
  }
  this.cart.items.push(new CartItem(food,qunt));

  localStorage.setItem('cart',JSON.stringify(this.cart))
}
removeFromCart(foodId:number):void{
  this.cart.items = this.cart.items.filter(item =>item.food.id !=foodId)
}
changeQuantity(foodId:number,quantity:number){
  let cartItem=this.cart.items.find(item => item.food.id === foodId);
  cartItem!.quantity = quantity;

}
getCart():Cart{
  return this.cart;
}

// gettotal(this.tp,this.ti){

// }

//  handleQuantity(val:string){
//     if(this.quantity && val==='plus'){
//       this.productQuantity+=1
//     }
//     else if(this.quantity>1 && val==='min'){
//       this.productQuantity-=1
//     }
//   }
}
