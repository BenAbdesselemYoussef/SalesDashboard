import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {
  datas = [
    {index:1,
    content:"inappropriate product",
    type:"Product",
    offenderId:1},
    {index:2,
    content:"illegal product",
    type:"Product",
    offenderId:3},
    {index:3,
    content:"inappropriate store name",
    type:"Store",
    offenderId:2},
    {index:4,
    content:"inappropriate store products",
    type:"Store",
    offenderId:1},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
