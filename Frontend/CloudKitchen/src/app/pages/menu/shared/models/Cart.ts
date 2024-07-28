import { CartItem } from "./CartItem";

export class Cart{
    items:CartItem[]=[];

    get totalitems(){
      let totalitems:number=0;
      this.items.forEach(data=>{
        totalitems+=data.quantity;
      });
      return totalitems;
    }

    get totalPrice():number{
        debugger
        let totalPrice=0;
        this.items.forEach(item =>{
            totalPrice += item.price;
        })
        return totalPrice;
    }
}
