import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-invoice',
  // template:'<button click="pay()">PayNow</button>',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  buttonType="buy"
  buttonColor="black"
  paymentRequest={
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'INR',
      countryCode: 'IN'
    }
  }
  onLoadPaymentData(event:any):void{
    console.log("Load Payment Data",event.detail);

  }
  invoiceData:any;
  cart!:Cart;
  userName:string='';
  userNumber:string='';
  userFlatno:string='';
  userStreet:string='';
  userCity:string='';
  userState:string='';
  userZipCode:string='';
  totalAmount:number = 0;
  currentDate = new Date();
constructor() {}

  ngOnInit(){
      let cartStore = localStorage.getItem('cart');
      let cartData = cartStore && JSON.parse(cartStore);
      this.invoiceData = cartData.items;
      this.calTotalAmount();
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.userName = userData.username;
      this.userNumber=userData.number;
      this.userFlatno = userData.flatno;
      this.userStreet = userData.street;
      this.userCity = userData.city;
      this.userState = userData.state;
      this.userZipCode = userData.zipCode

  }
  calTotalAmount(){
    this.invoiceData.forEach((element:any) => {
      let tempAmount = element.food.price * element.quantity
      this.totalAmount += tempAmount
    });

  }
}
