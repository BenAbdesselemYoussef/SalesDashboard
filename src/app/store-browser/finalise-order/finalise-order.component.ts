import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalise-order',
  templateUrl: './finalise-order.component.html',
  styleUrls: ['./finalise-order.component.css']
})
export class FinaliseOrderComponent implements OnInit {

  order:any = []
  orderloaded = false
  orderfound = false
  totalprice = 0
  totalweight = 0
  shippmentfee = 4.5
  total = 0

  constructor() { 
    this.readorder()
    this.recalculate()
  }

  readorder(){
    let orderstr = localStorage.getItem('order')
    
    if (orderstr != null){
      this.order = JSON.parse(orderstr)
      if(this.order.length > 0){this.orderfound = true}
    }
    this.orderloaded = true
    
    
  }
  ngOnInit(): void {
    this.readorder()
  }

  recalculate(){
    let totprice = 0
    this.order.forEach((batch: { product: { unitprice: number; }; quantity: number; }) => {
      totprice+= batch.product.unitprice * batch.quantity
    });
    this.totalprice = totprice
    this.total = this.totalprice+this.shippmentfee
  }
}
