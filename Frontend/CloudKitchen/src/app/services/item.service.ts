import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, item } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  cartData = new EventEmitter<item[] | []>()


  constructor(private http: HttpClient) { }
  addItem(data: item) {
    return this.http.post('http://localhost:3000/items', data);
  }
  itemList() {
    return this.http.get<item[]>('http://localhost:3000/items');
  }
  deleteItem(id: number) {
    return this.http.delete(`http://localhost:3000/items/${id}`)
  }
  getItem(id: string) {
    return this.http.get<item>(`http://localhost:3000/items/${id}`);
  }
  updateItem(item: item) {
    return this.http.put<item>(`http://localhost:3000/items/${item.id}`,item);
  }
  popularItems() {
    return this.http.get<item[]>('http://localhost:3000/items?_limit=3');
  }
  trendyItems() {
    return this.http.get<item[]>('http://localhost:3000/items?_limit=8');
  }
  allItems() {
    return this.http.get<item[]>('http://localhost:3000/items');
  }
  searchItems(query: string) {
    return this.http.get<item[]>(`http://localhost:3000/items?q=${query}`);
  }
  localAddtoCart(data: item) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    }
    else {
      cartData = JSON.parse(localCart);
      cartData.push(data)
      localStorage.setItem('localCart', JSON.stringify(cartData))
      this.cartData.emit(cartData);
    }

  }
  removeItemFromCart(productId: number){
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: item[] = JSON.parse(cartData);
      items = items.filter((item: item) => {
        productId !== item.id
        console.warn(items);
        localStorage.setItem('localCart',JSON.stringify(items));
        this.cartData.emit(items);
      })

    }
  }
  addtoCart(cartData:cart){
    return this.http.post('http://localhost:3000/cart',cartData);
  }
}

