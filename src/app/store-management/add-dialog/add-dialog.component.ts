import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent{
  public product = {
    name:"",
    description:"",
    quantity:0,
    unitprice:0,
    weight:0,
    logo: new File([""],"")
  }
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
  }
  showdata(){
    var uploadData = new FormData()
    uploadData.append('name',this.product.name)
    uploadData.append('description',this.product.description)
    uploadData.append('quantity',this.product.quantity.toString())
    uploadData.append('price',this.product.unitprice.toString())
    uploadData.append('weight',this.product.weight.toString())
    uploadData.append('logo', this.product.logo, this.product.logo.name)
  }
  logochange(event:any){
    this.product.logo = event.target.files[0]
  }
}
