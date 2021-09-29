import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { OrderDetailDialogComponent } from '../order-detail-dialog/order-detail-dialog.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales = [
    {index:1,
    status:"Shipping",
    nop:5,
    totalprice:100,
    shippmentfee:10,
    batches:[
      {product:
        {index:1,
        logo:"https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
        name:"Dress Model 1",
        quantity:22,
        unitprice:24,
        description:"custom made dress model 1 of my store hope you like it."},
      quantity:2},
      {product:
        {index:2,
        logo:"https://media.gq.com/photos/5f316a14c22d07d47bca3e9b/master/w_2000,h_1333,c_limit/Mother-The-Neat-cuff-ankle-fray-jean.jpg",
        name:"Jeans Model 1",
        quantity:15,
        unitprice:10,
        description:"standard jeans model 1 of my store hope you like it."},
      quantity:3},
      {product:
        {index:3,
        logo:"https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=XTR001e2",
        name:"Gaming keyboard",
        quantity:50,
        unitprice:10,
        description:"best seller keyboard on amazon."},
      quantity:1},
      {product:
        {index:4,
        logo:"https://www.gamegear.fr/images/razer_viper_8K_1.png",
        name:"Gaming Mouse",
        quantity:40,
        unitprice:30,
        description:"best seller mouse on amazon."},
      quantity:2},
      {product:
        {index:5,
        logo:"https://m.media-amazon.com/images/I/61p4EhExkSL._AC_SX466_.jpg",
        name:"Potato peeler",
        quantity:20,
        unitprice:2,
        description:"nothing as good as a simple potato peeler."},
      quantity:5}
      ]},
    {index:2,
    status:"Shipping",
    nop:2,
    shippmentfee:15,
    totalprice:20,
    batches:[
      {product:
        {index:1,
        logo:"https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
        name:"Dress Model 1",
        quantity:22,
        unitprice:24,
        description:"custom made dress model 1 of my store hope you like it."},
      quantity:2},
      {product:
        {index:2,
        logo:"https://media.gq.com/photos/5f316a14c22d07d47bca3e9b/master/w_2000,h_1333,c_limit/Mother-The-Neat-cuff-ankle-fray-jean.jpg",
        name:"Jeans Model 1",
        quantity:15,
        unitprice:10,
        description:"standard jeans model 1 of my store hope you like it."},
      quantity:5}]},
    {index:3,
    status:"Shipped",
    nop:3,
    totalprice:50,
    shippmentfee:10,
    batches:[
      {product:
        {index:1,
        logo:"https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
        name:"Dress Model 1",
        quantity:22,
        unitprice:24,
        description:"custom made dress model 1 of my store hope you like it."},
      quantity:3},
      {product:{index:2,
        logo:"https://media.gq.com/photos/5f316a14c22d07d47bca3e9b/master/w_2000,h_1333,c_limit/Mother-The-Neat-cuff-ankle-fray-jean.jpg",
        name:"Jeans Model 1",
        quantity:15,
        unitprice:10,
        description:"standard jeans model 1 of my store hope you like it."},
      quantity:2},
      {product:
        {index:3,
        logo:"https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=XTR001e2",
        name:"Gaming keyboard",
        quantity:50,
        unitprice:10,
        description:"best seller keyboard on amazon."},
      quantity:5}
      ]}]
  constructor(public dialog: MatDialog ) { }
  openOrderDetailDialog(order:any){
    this.dialog.open(OrderDetailDialogComponent,{
      width: '700px',
      data: { 
        order:order
      }
    })
  }
  ngOnInit(): void {
  }

}
