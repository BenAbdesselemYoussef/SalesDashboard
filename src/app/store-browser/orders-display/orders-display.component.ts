import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { OrdersDetailsDialogComponent } from '../orders-details-dialog/orders-details-dialog.component';

@Component({
  selector: 'app-orders-display',
  templateUrl: './orders-display.component.html',
  styleUrls: ['./orders-display.component.css']
})
export class OrdersDisplayComponent implements OnInit {
  orderId=-1
  datasinit = 
  [
    {
      index:1,
      status:"Arrived",
      nop:5,
      totalprice:100,
      totalweight:500,
      shippmentfee:10,
      buyer:1,
      vendor:2,
      batches:
      [
        {
          product:
            {
              index:1,
              logo:"https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
              name:"Dress Model 1",
              quantity:22,
              unitprice:24,
              description:"custom made dress model 1 of my store hope you like it."
            },
          quantity:2
        },
        {
          product:
            {
              index:2,
              logo:"https://media.gq.com/photos/5f316a14c22d07d47bca3e9b/master/w_2000,h_1333,c_limit/Mother-The-Neat-cuff-ankle-fray-jean.jpg",
              name:"Jeans Model 1",
              quantity:15,
              unitprice:10,
              description:"standard jeans model 1 of my store hope you like it."
            },
          quantity:3
        },
        {
          product:
            {
              index:3,
              logo:"https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=XTR001e2",
              name:"Gaming keyboard",
              quantity:50,
              unitprice:10,
              description:"best seller keyboard on amazon."
            },
          quantity:1
        },
        {
          product:
            {
              index:4,
              logo:"https://www.gamegear.fr/images/razer_viper_8K_1.png",
              name:"Gaming Mouse",
              quantity:40,
              unitprice:30,
              description:"best seller mouse on amazon."
            },
          quantity:2
        },
        {
          product:
            {
              index:5,
              logo:"https://m.media-amazon.com/images/I/61p4EhExkSL._AC_SX466_.jpg",
              name:"Potato peeler",
              quantity:20,
              unitprice:2,
              description:"nothing as good as a simple potato peeler."
            },
          quantity:5
        }
      ]
    },
    {
      index:2,
      status:"Shipping",
      nop:2,
      shippmentfee:15,
      totalprice:20,
      totalweight:1000,
      buyer:1,
      vendor:2,
      batches:
      [
        {
          product:
            {
              index:1,
              logo:"https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
              name:"Dress Model 1",
              quantity:22,
              unitprice:24,
              description:"custom made dress model 1 of my store hope you like it."
            },
          quantity:2
        },
        {
          product:
            {
              index:2,
              logo:"https://media.gq.com/photos/5f316a14c22d07d47bca3e9b/master/w_2000,h_1333,c_limit/Mother-The-Neat-cuff-ankle-fray-jean.jpg",
              name:"Jeans Model 1",
              quantity:15,
              unitprice:10,
              description:"standard jeans model 1 of my store hope you like it."
            },
          quantity:5
        }
      ]
    },
    {
      index:3,
      status:"Delivered",
      nop:3,
      totalprice:50,
      totalweight:400,
      shippmentfee:10,
      buyer:2,
      vendor:3,
      batches:
      [
        {
          product:
            {
              index:1,
              logo:"https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
              name:"Dress Model 1",
              quantity:22,
              unitprice:24,
              description:"custom made dress model 1 of my store hope you like it."
            },
          quantity:3
        },
        {
          product:
            {
              index:2,
              logo:"https://media.gq.com/photos/5f316a14c22d07d47bca3e9b/master/w_2000,h_1333,c_limit/Mother-The-Neat-cuff-ankle-fray-jean.jpg",
              name:"Jeans Model 1",
              quantity:15,
              unitprice:10,
              description:"standard jeans model 1 of my store hope you like it."
            },
          quantity:2
        },
        {
          product:
            {
              index:3,
              logo:"https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=XTR001e2",
              name:"Gaming keyboard",
              quantity:50,
              unitprice:10,
              description:"best seller keyboard on amazon."
            },
          quantity:5
        }
      ]
    },
    {
      index:4,
      status:"Cancelled",
      nop:2,
      shippmentfee:15,
      totalprice:20,
      totalweight:350,
      buyer:1,
      vendor:2,
      batches:
      [
        {
          product:
            {
              index:1,
              logo:"https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
              name:"Dress Model 1",
              quantity:22,
              unitprice:24,
              description:"custom made dress model 1 of my store hope you like it."
            },
          quantity:2
        },
        {
          product:
            {
              index:2,
              logo:"https://media.gq.com/photos/5f316a14c22d07d47bca3e9b/master/w_2000,h_1333,c_limit/Mother-The-Neat-cuff-ankle-fray-jean.jpg",
              name:"Jeans Model 1",
              quantity:15,
              unitprice:10,
              description:"standard jeans model 1 of my store hope you like it."
            },
          quantity:5
        }
      ]
    },
  ]
    exitop=false;
    datas=[
      {index:0,
        status:"Delivered",
        nop:0,
        totalprice:0,
        totalweight:0,
        buyer:0,
        vendor:0,
        shippmentfee:0,
        batches:[{product:
          {index:0,
          logo:"https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=XTR001e2",
          name:"########",
          quantity:0,
          unitprice:0,
          description:"#############"},
        quantity:0}]
      },
    ];
  delivered = "Delivered"
  shipped = "Shipped"
  shipping = "Shipping"
  pending = "Pending"
  arrived = "Arrived"
  cancelled = "Cancelled"
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.datas = this.datasinit;
  }

  openOrderDetailsDialog(order:any){
    this.dialog.open(OrdersDetailsDialogComponent,{
      width: '700px',
      data: { 
        order:order
      }
    })
  }
  searchproduct(){
    this.datas = []
    if (this.orderId !== -1) {
      this.datasinit.forEach(data => {
        if(data.index == this.orderId){
          this.datas.push(data)
        }
      });      
    }
  }
  clearsearch(){
    this.datas = this.datasinit
  }

}
