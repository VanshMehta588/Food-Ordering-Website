import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { filter } from 'rxjs';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  foodpagetags?:string;
  @Input()
  justifyContent:string='center';
  foodsData:undefined | Foods[];
  @Output() filterTagData = new EventEmitter<Foods[] | []>()
  tags:Tag[]=[];

  constructor(private fs:FoodService) {

  }
  ngOnInit(): void{
    if(!this.foodpagetags)
    this.tags =  this.fs.getAllTag();
    console.log(this.tags);
  }

  getAllFoodByTag(tag:string){
    debugger
    this.fs.getAll().subscribe((temp:any) => {
      this.foodsData = temp;

      if(tag == 'All'){
        this.foodsData = temp;
        this.filterTagData.emit(this.foodsData);
      }
      else{
        let filterdata = this.foodsData?.filter((e:any) => { return e.tags.includes(tag)});
        this.foodsData = filterdata;
        this.filterTagData.emit(this.foodsData);

      }
    });

  }
}
