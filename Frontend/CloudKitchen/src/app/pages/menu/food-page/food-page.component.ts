import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:Foods;
  foodId!:number;
  cart!:Cart;
  CartItem:any;
  qunt:number = 1;
  private routeSub!: Subscription;

  constructor(private ActivatedRoute:ActivatedRoute,
    private FoodService : FoodService , private cartService:CartService,
    private router:Router){
      // this.setCart();
   // ActivatedRoute.params.subscribe((params)=>{
      // if (params['id'])
      //  this.food = FoodService.getFoodById(params['id'])
    //})
  }
  // @Output() this.qunt = new EventEmitter<>()


  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe(params => {
      this.foodId = params['id']
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
    });
    this.FoodService.getFoodById(this.foodId).subscribe((res:any) => {
      this.food = res;
    })
  }
   addToCart(){
    this.cartService.addToCart(this.food,this.qunt);
    this.router.navigateByUrl('/menu/cart-page')
  }

  // setCart(){
  //   debugger
  //   this.cart=this.cartService.getCart();
  // }
  // changeQuantity(cartItem:CartItem, quantityInString:string){
  //   debugger
  //   const quantity = parseInt(quantityInString);
  //   this.cartService.changeQuantity(cartItem.food.id,quantity);
  //   this.setCart();
  // }
  handleQuantity(val:string){
    debugger
    // var itemid =this.cart.items[]
    if(this.qunt<20 && val==='plus'){
      this.qunt +=1
    }
    else if(this.qunt > 1 && val==='min'){
      this.qunt -=1
    }
    this.qunt=this.qunt
    //this.cart.items[0].quantity = this.qunt;
  }

}
