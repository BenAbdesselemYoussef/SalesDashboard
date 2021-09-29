import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  storefound=true
  store={
    name:"Jumia",
    description:"Best prices for the best of products",
    open: true,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
