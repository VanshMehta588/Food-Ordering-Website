import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  foods:Foods[]=[];
  tempData :any;
  searchItem:string='';


  constructor(private fs:FoodService,private route:ActivatedRoute,private router:Router){ }


  ngOnInit(): void {
    console.log(this.tempData)
    // this.route.params.subscribe(params =>{
      //if(params['searchItem'])
      // this.foods=this.fs.getAll().filter(foods=>foods.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      //console.log(this.foods);

    //   if(params['tag'])
    //    this.filterTagData(params['tag'])
    //   else
    //   this.fs.getAll();
    // })
    this.fs.getAll().subscribe((e:any) =>{
      this.tempData = e;
    } );


  }

  filterTagData(event:any){
   this.tempData = event;

   console.log(this.tempData)
  }

  search(searchItem:any):void{
      debugger
      this.fs.getAll().subscribe((result:any) => {
          let filtersearch = result.filter((e:any) => { return e.name.toLowerCase().includes(searchItem.toLowerCase())});
          this.tempData = filtersearch;
          // this.filterTagData.emit(this.foods);
      });
  }

}


