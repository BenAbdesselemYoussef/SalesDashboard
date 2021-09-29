import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-orders-details-dialog',
  templateUrl: './orders-details-dialog.component.html',
  styleUrls: ['./orders-details-dialog.component.css']
})
export class OrdersDetailsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrdersDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
