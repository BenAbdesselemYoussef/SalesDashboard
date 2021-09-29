import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-ban-user-dialog',
  templateUrl: './ban-user-dialog.component.html',
  styleUrls: ['./ban-user-dialog.component.css']
})
export class BanUserDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BanUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
