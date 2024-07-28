import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/pages/menu/services/food/food.service';
import { Foods } from 'src/app/pages/menu/shared/models/food';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  foodList:undefined | Foods[]
  foodMessage:undefined|string;
  constructor(private food:FoodService,private router:Router){ }


  ngOnInit():void{
  this.list();
  }

  deleteProduct(id:number){
    // console.warn("test id",id);


  this.food.deleteFood(id).subscribe((result)=>{
    if(result){
      this.foodMessage="Food item is deleted";
      this.list()
    }
  })
  setTimeout(()=>{
    this.foodMessage=undefined
  },3000);
  }

  addItem(){
    this.router.navigate(['/admin-dashboard/selleradd']);
  }
  updateProduct(id:number){
    this.router.navigate(['/admin-dashboard/sellerupdate/',id]);

  }
  list(){
    this.food.getAll().subscribe((result)=>{
      console.warn(result);
      if(result){
        this.foodList=result;
      }
    })
  }
}
