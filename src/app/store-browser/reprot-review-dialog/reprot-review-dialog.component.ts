import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reprot-review-dialog',
  templateUrl: './reprot-review-dialog.component.html',
  styleUrls: ['./reprot-review-dialog.component.css']
})
export class ReprotReviewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReprotReviewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
