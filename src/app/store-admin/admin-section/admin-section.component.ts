import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {
  sectionID = -1;
  storeID = -1;
  datasinit = [
    {index:1,
    name:"clothing",
    nop:22,
    store:1,},
    {index:2,
    name:"camping",
    nop:10,
    store:1,},
    {index:3,
    name:"cocking",
    nop:5,
    store:2,},
    {index:4,
    name:"driving",
    nop:20,
    store:2,},
    {index:5,
    name:"decoration",
    nop:5,
    store:2,},
    {index:6,
    name:"accessory",
    nop:7,
    store:3,},
    {index:7,
    name:"phones",
    nop:20,
    store:4,},]
    exitop=false;
    datas=[
      {index:0,
      name:"######",
      nop:0,
      store:0}];
  constructor() {
  }
  ngOnInit(): void {
    this.datas = this.datasinit;
  }
  searchproduct(){
    this.datas = [];
    
    if(this.storeID !== -1){
      this.datasinit.forEach(data => {
        if(data.store == this.storeID){
          this.datas.push(data)
        }
      })
      if (this.sectionID !== -1) {
        this.datas = []
        this.datasinit.forEach(data => {
          if(data.index == this.sectionID){
            this.datas.push(data)
          }
        });      
      }
    }
    
  }
  clearsearch(){
    this.datas = this.datasinit
  }
}
