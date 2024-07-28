import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem:string='';
  tempData :any;

  constructor(private route:ActivatedRoute,private router:Router,private fs:FoodService) { }

  ngOnInit():void{
    this.route.params.subscribe(params => {
      if(params['searchItem'])

      this.searchItem =params['searchItem']
    })
  }
  search(searchItem:any):void{
    this.router.navigateByUrl('/menu/search/' +this.searchItem)
    this.fs.getAll().subscribe((result:any) => {
        let filtersearch = result.filter((e:any) => { return e.name.toLowerCase().includes(searchItem)});
        this.tempData = filtersearch;
        // this.filterTagData.emit(this.foods);

    });
  }
}
