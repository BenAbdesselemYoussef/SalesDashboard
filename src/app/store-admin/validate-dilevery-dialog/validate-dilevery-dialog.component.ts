import { Component, OnInit , Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-validate-dilevery-dialog',
  templateUrl: './validate-dilevery-dialog.component.html',
  styleUrls: ['./validate-dilevery-dialog.component.css']
})
export class ValidateDileveryDialogComponent implements OnInit {
  Arrived = false
  BuyerCIN = "00000000"
  constructor(public dialogRef: MatDialogRef<ValidateDileveryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.order.status=="Arrived"){
      this.Arrived = true
    }
  }

}
