import { Component, OnInit } from '@angular/core';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from "@angular/material/dialog";
import { DeleteSectionDialogComponent } from '../delete-section-dialog/delete-section-dialog.component';
import { EditSectionDialogComponent } from '../edit-section-dialog/edit-section-dialog.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  datas = [{index:1,name:"Camping",nop:3,products:[{index:1,
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
    description:"nothing as good as a simple potato peeler."},]},
    {index:2,name:"Gaming",nop:2,products:[{index:1,
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
      ]},
    {index:3,name:"Clothing",nop:2,products:[{index:1,
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
      ]}]
  newSection = {name:""}
  constructor(public dialog: MatDialog) { }
  openDeleteSectionDialog(section :any){
    this.dialog.open(DeleteSectionDialogComponent,{
      width: '600px',
      data: { 
        section:section
      }
    })
  }
  createSection(){
     
  }
  openEditSectionDialog(section: any){
    this.dialog.open(EditSectionDialogComponent,{
      width: '700px',
      data: { 
        section:section
      }
    })
  }
  ngOnInit(): void {
  }

}
