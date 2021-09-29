import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ban-store-dialog',
  templateUrl: './ban-store-dialog.component.html',
  styleUrls: ['./ban-store-dialog.component.css']
})
export class BanStoreDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BanStoreDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
