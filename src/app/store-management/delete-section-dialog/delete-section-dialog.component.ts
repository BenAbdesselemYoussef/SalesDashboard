import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-section-dialog',
  templateUrl: './delete-section-dialog.component.html',
  styleUrls: ['./delete-section-dialog.component.css']
})
export class DeleteSectionDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteSectionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

}
