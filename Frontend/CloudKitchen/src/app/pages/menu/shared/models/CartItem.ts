import { Foods } from "./food";

export class CartItem{
    constructor(food:Foods,qunt:number){
        this.food=food,
        this.quantity=qunt
    }

    food:Foods;
    quantity:number=1;
    get price():number{
        return this.food.price * this.quantity;
    }


}
