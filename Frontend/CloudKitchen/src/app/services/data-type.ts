export interface signUp{
    id:number,
    username:string,
    email:string,
    number:string,
    password:string,
    imageUrl:string,
    flatno:string,
    street:string,
    city:string,
    state:string,
    zipCode:string
  }

export interface login{
    email:String,
    password:String
}
export interface item{
    name:string,
    // favourite:boolean=false,
    price:number,
    category:string,
    details:string,
    image:string,
    description:string,
    id:number,
    quantity:undefined | number
}
export interface cart{
    name:string,
    price:number,
    category:string,
    details:string,
    image:string,
    description:string,
    id:number | undefined,
    quantity:undefined | number,
    itemId:number,
    userId:number
}
