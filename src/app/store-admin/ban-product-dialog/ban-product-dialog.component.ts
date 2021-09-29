import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ban-product-dialog',
  templateUrl: './ban-product-dialog.component.html',
  styleUrls: ['./ban-product-dialog.component.css']
})
export class BanProductDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BanProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
