import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/pages/menu/services/food/food.service';
import { Foods } from 'src/app/pages/menu/shared/models/food';

@Component({
  selector: 'app-seller-update-item',
  templateUrl: './seller-update-item.component.html',
  styleUrls: ['./seller-update-item.component.css']
})
export class SellerUpdateItemComponent {

  foodData:undefined | Foods;
  foodMessage:undefined | string;
  constructor(private route:ActivatedRoute,private food:FoodService){ }

  ngOnInit():void{
    debugger
    let FoodId=this.route.snapshot.paramMap.get('id');
    console.warn(FoodId);
    FoodId && this.food.getFoodById(Number(FoodId)).subscribe((data:any)=>{
      this.foodData = data;
    console.warn(data);

    })

  }

  submit(data:any){
    console.warn(data);
    if(this.foodData){
      data.id=this.foodData.id
    }
    this.food.updateFood(data).subscribe((result)=>{
      if(result){
        this.foodMessage="Product has been updated"
      }
    });
    setTimeout(()=>{
      this.foodMessage = undefined;
    },3000);
  }
}
