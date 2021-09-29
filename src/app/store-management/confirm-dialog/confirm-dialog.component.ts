import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent{
  logoup = new File([""],"");
  logochanged = false;
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
  }
  showdata(){
    var uploadData = new FormData()
    uploadData.append('name',this.data.product.name)
    uploadData.append('description',this.data.product.description)
    uploadData.append('quantity',this.data.product.quantity.toString())
    uploadData.append('price',this.data.product.unitprice.toString())
    if (this.logochanged){
    uploadData.append('logo', this.logoup, this.logoup.name)}
    uploadData.forEach(dataup => console.log(dataup))
  }
  logochange(event:any){
    this.logoup = event.target.files[0]
    this.logochanged = true
  }
}
