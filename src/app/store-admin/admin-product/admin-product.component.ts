import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { BanProductDialogComponent } from '../ban-product-dialog/ban-product-dialog.component';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  productID = -1;
  datasinit = [
    {index:1,
    logo:"https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/919x1208.jpg?1505296014",
    name:"Dress Model 1",
    quantity:22,
    unitprice:24,
    description:"custom made dress model 1 of my store hope you like it."},
    {index:2,
    logo:"https://media.gq.com/photos/5f316a14c22d07d47bca3e9b/master/w_2000,h_1333,c_limit/Mother-The-Neat-cuff-ankle-fray-jean.jpg",
    name:"Jeans Model 1",
    quantity:15,
    unitprice:10,
    description:"standard jeans model 1 of my store hope you like it."},
    {index:3,
    logo:"https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=XTR001e2",
    name:"Gaming keyboard",
    quantity:50,
    unitprice:10,
    description:"best seller keyboard on amazon."},
    {index:4,
    logo:"https://www.gamegear.fr/images/razer_viper_8K_1.png",
    name:"Gaming Mouse",
    quantity:40,
    unitprice:30,
    description:"best seller mouse on amazon."},
    {index:5,
    logo:"https://m.media-amazon.com/images/I/61p4EhExkSL._AC_SX466_.jpg",
    name:"Potato peeler",
    quantity:20,
    unitprice:2,
    description:"nothing as good as a simple potato peeler."},
    {index:6,
    logo:"https://mobileimages.lowes.com/productimages/57d8a1fb-4279-457c-851b-f5ce7d0f1820/12454850.jpg?size=pdhi",
    name:"Pocket Knife",
    quantity:2,
    unitprice:50,
    description:"this may look cute but its actually really sharp be carefull."},
    {index:7,
    logo:"https://m.media-amazon.com/images/I/71pARlVu1yL._AC_SX425_.jpg",
    name:"Camping Tent",
    quantity:10,
    unitprice:55,
    description:"comfy ꒰๑ ᷄ω ᷅꒱ ꒰๑ ᷄ω ᷅꒱"},]
    exitop=false;
    datas=[{index:0,
      logo:"",
      name:"######",
      quantity:0,
      unitprice:0,
      description:"#############"}];
  constructor(public dialog: MatDialog) {
  }
  BanDialog(product:any){
    this.dialog.open(BanProductDialogComponent,{
      width: '600px',
      data: { 
        product:product
      }
    })
  }
  ngOnInit(): void {
    this.datas = this.datasinit;
  }
  searchproduct(){
    this.datas = []
    if (this.productID !== -1) {
      this.datasinit.forEach(data => {
        if(data.index == this.productID){
          this.datas.push(data)
        }
      });      
    }
  }
  clearsearch(){
    this.datas = this.datasinit
  }

}
