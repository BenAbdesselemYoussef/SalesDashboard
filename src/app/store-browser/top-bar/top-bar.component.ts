import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
 clicked=false;
  constructor() { }

  ngOnInit(): void {
  }

  toogleClicked(){
    this.clicked = !this.clicked
  }
  outOfFocus(){
    this.clicked = false
  }

}
