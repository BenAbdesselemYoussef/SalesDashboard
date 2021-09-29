import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-section-dialog',
  templateUrl: './edit-section-dialog.component.html',
  styleUrls: ['./edit-section-dialog.component.css']
})
export class EditSectionDialogComponent implements OnInit {
  productID=-1
  constructor(public dialogRef: MatDialogRef<EditSectionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  addProduct(){}
  removeProduct(){}
  saveSectionName(){  }
}
