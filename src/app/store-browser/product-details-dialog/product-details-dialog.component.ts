import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css']
})
export class ProductDetailsDialogComponent implements OnInit {

  quantity= 1;
  constructor(public dialogRef: MatDialogRef<ProductDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

  addToCart(){
    let orderstr = localStorage.getItem('order')
    let order = [];
    if (orderstr != null){
      order = JSON.parse(orderstr)
    }
    let batch = {product:this.data.product,quantity:this.quantity}
    order.push(batch)
    console.log(order);    
    localStorage.setItem('order',JSON.stringify(order))
  }
  
}
