import { Component } from '@angular/core';
import { FoodService } from 'src/app/pages/menu/services/food/food.service';
import { Foods } from 'src/app/pages/menu/shared/models/food';

@Component({
  selector: 'app-seller-add-item',
  templateUrl: './seller-add-item.component.html',
  styleUrls: ['./seller-add-item.component.css']
})
export class SellerAddItemComponent {

  addFoodMessage:string | undefined;
  constructor(private Food:FoodService ){}

  ngOnInit():void{

  }


  submit(data:Foods){
    this.Food.addFood(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addFoodMessage="Product is Successfully added"
      }
      setTimeout(() => (this.addFoodMessage = undefined),3000);
    })
  }

}

