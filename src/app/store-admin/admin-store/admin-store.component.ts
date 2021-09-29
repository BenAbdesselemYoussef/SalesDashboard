import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { BanStoreDialogComponent } from '../ban-store-dialog/ban-store-dialog.component';

@Component({
  selector: 'app-admin-store',
  templateUrl: './admin-store.component.html',
  styleUrls: ['./admin-store.component.css']
})
export class AdminStoreComponent implements OnInit {

  storeID = -1;
  datasinit = [
    {index:1,
    logo:"https://www.keejob.com/media/recruiter/recruiter_13008/logo-13008-20170712-104243.png",
    name:"Jumia Food",
    open:true,
    description:"first food delivery platform in tunisia."},
    {index:2,
    logo:"https://www.keejob.com/media/recruiter/recruiter_18845/logo-18845-20190911-133102.png",
    name:"Tunisia Net",
    open:true,
    description:"Best prices for the best products."},
    {index:3,
    logo:"https://i.pinimg.com/originals/f6/db/eb/f6dbeb17951cb9d12c450eb26e42e484.jpg",
    name:"Indie supermarket",
    open:false,
    description:"Just your casual neighborhood market."},
    ]
    exitop=false;
    datas=[
      {index:0,
      logo:"",
      name:"######",
      open: false,
      description:"#############"}];
  constructor(public dialog: MatDialog) {
  }
  BanDialog(store:any){
    this.dialog.open(BanStoreDialogComponent,{
      width: '600px',
      data: { 
        store:store
      }
    })
  }
  ngOnInit(): void {
    this.datas = this.datasinit;
  }
  searchproduct(){
    this.datas = []
    if (this.storeID !== -1) {
      this.datasinit.forEach(data => {
        if(data.index == this.storeID){
          this.datas.push(data)
        }
      });      
    }
  }
  clearsearch(){
    this.datas = this.datasinit
  }
}
