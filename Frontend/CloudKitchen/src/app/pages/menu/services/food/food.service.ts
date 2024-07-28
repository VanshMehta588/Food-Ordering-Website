import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  // getFoodById(id:number): Foods{
  //   return  this.getAll().find(food=>food.id == id)!;
  // }
  // getFoodById(tag:string){

  //     }



  // getAllFoodByTag(tag:string):Foods[]{
  //   return tag == "All" ? this.getAll() : this.getAll().((food:any) => food.tags?.includes(tag));
  //  }


  getAllTag():Tag[]{
    return[
      { name: 'All', count:10 },
      { name: 'Drinks', count:2 },
      { name: 'Lunch', count:1 },
      { name: 'Dinner', count:1 },
      { name: 'Fastfood', count:5 },
      { name: 'Combo', count:1 },
      { name: 'Dessert', count:3 },
      { name: 'Farsaan', count:4 },



    ]
  }


  getAll(){
    return this.http.get<Foods[]>('https://localhost:7054/api/Menu');
  }
  addFood(data: Foods) {
    return this.http.post('https://localhost:7054/api/Menu', data);
  }
  getFoodById(id: number) {
    return this.http.get<Foods[]>(`https://localhost:7054/api/Menu/${id}`);
  }
  updateFood(data: Foods) {
    return this.http.put<Foods[]>(`https://localhost:7054/api/Menu/${data.id}`, data);
  }
  trendyFoods() {
    return this.http.get<Foods[]>('https://localhost:7054/api/Menu?_limit=4');
  }
  deleteFood(id: number) {
    return this.http.delete(`https://localhost:7054/api/Menu/${id}`)
  }
}
  //   return[
  //    {
  //     id:1,
  //     name:'France Speciality',
  //     cookTime:'10-20 ',
  //     price:10,
  //     favourite:false,
  //     star: 3.5,
  //     origins:['France'],
  //     imageUrl:'/assets/food1.jpg',
  //     tags:['Dessert','Tasty']
  //    },
  //    {
  //     id:2,
  //     name:'Pan Cakes',
  //     cookTime:'10-20 ',
  //     price:30,
  //     favourite:false,
  //     star: 4.5,
  //     origins:['America'],
  //     imageUrl:'/assets/food2.jpg',
  //     tags:['Dessert','Tasty']
  //    },
  //    {
  //     id:3,
  //     name:'Mix Salad',
  //     cookTime:'10-20 ',
  //     price:10,
  //     favourite:false,
  //     star: 4.0,
  //     origins:['France'],
  //     imageUrl:'/assets/food3.jpg',
  //     tags:['Diet Friendly','Tasty']
  //    },
  //    {
  //     id:4,
  //     name:'Red Sauce Pasta',
  //     cookTime:'10-20 ',
  //     price:15,
  //     favourite:false,
  //     star: 5.0,
  //     origins:['Italy'],
  //     imageUrl:'/assets/food4.jpg',
  //     tags:['Fastfood','Tasty']
  //    },
  //    {
  //     id:5,
  //     name:'Noodles',
  //     cookTime:'10-20 ',
  //     price:9,
  //     favourite:false,
  //     star: 4.5,
  //     origins:['China'],
  //     imageUrl:'/assets/food5.jpg',
  //     tags:['Lunch','Dinner','Tasty']
  //    },
  //    {
  //     id:6,
  //     name:'Bun Bread',
  //     cookTime:'10 ',
  //     price:8,
  //     favourite:false,
  //     star:  3  ,
  //     origins:['France'],
  //     imageUrl:'/assets/food6.jpg',
  //     tags:['Dessert','Tasty']
  //    },
  //    {
  //     id:7,
  //     name:'Sandwich + French Fries',
  //     cookTime:'10-20 ',
  //     price:40,
  //     favourite:false,
  //     star: 5,
  //     origins:['France','Belgium'],
  //     imageUrl:'/assets/food7.jpg',
  //     tags:['Combo','Fastfood','Tasty']
  //    },
  //    {
  //     id:8,
  //     name:'Burger + French Fries',
  //     cookTime:'10-20 ',
  //     price:50,
  //     favourite:false,
  //     star: 4.5,
  //     origins:['Germany','Belgium'],
  //     imageUrl:'/assets/food8.jpg',
  //     tags:['Fastfood','Combo','Tasty']
  //    },
  //    {
  //     id:9,
  //     name:'Authentic Bread',
  //     cookTime:'10-20 ',
  //     price:10,
  //     favourite:false,
  //     star: 4.6,
  //     origins:['Portugal'],
  //     imageUrl:'/assets/food9.jpg',
  //     tags:['Fastfood','Tasty']
  //    },
  //    {
  //     id:10,
  //     name:'Burger',
  //     cookTime:'10-20 ',
  //     price:30,
  //     favourite:false,
  //     star: 4.9,
  //     origins:['Germany'],
  //     imageUrl:'/assets/food10.jpg',
  //     tags:['Fastfood','Tasty']
  //    }

  //   ];
//   }
// }
