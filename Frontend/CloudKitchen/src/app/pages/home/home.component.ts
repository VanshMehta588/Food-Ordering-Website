import { Component } from '@angular/core';
import { item } from 'src/app/services/data-type';
import { FoodService } from '../menu/services/food/food.service';
import { Foods } from '../menu/shared/models/food';
// import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foodData:undefined | Foods[];

  constructor(private food:FoodService) {}
  ngOnInit():void{
    debugger
    // this.product.popularProducts().subscribe((data)=>{
    //   console.warn(data);
    //   this.popularProducts=data;
    //     });
        this.food.trendyFoods().subscribe((data)=>{
          this.foodData=data;
        });

  }





}
