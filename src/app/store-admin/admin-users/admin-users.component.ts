import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { BanUserDialogComponent } from '../ban-user-dialog/ban-user-dialog.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  userID = -1;
  datasinit = [
    {index:1,
    firstname:"Youssef",
    lastname:"Ben Abdesselem"},
    {index:2,
    firstname:"Yassine",
    lastname:"Ben Abdesselem"},
    {index:3,
    firstname:"Aymen",
    lastname:"Bouzidi"},
    ]
    exitop=false;
    datas=[
      {index:0,
      firstname:"######",
      lastname:"######",}];
  constructor(public dialog: MatDialog) {
  }
  BanDialog(user:any){
    this.dialog.open(BanUserDialogComponent,{
      width: '600px',
      data: { 
        user:user
      }
    })
  }
  ngOnInit(): void {
    this.datas = this.datasinit;
  }
  searchproduct(){
    this.datas = []
    if (this.userID !== -1) {
      this.datasinit.forEach(data => {
        if(data.index == this.userID){
          this.datas.push(data)
        }
      });      
    }
  }
  clearsearch(){
    this.datas = this.datasinit
  }
}
