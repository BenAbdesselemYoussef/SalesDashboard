import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ReprotReviewDialogComponent } from '../reprot-review-dialog/reprot-review-dialog.component';

@Component({
  selector: 'app-browse-reviews',
  templateUrl: './browse-reviews.component.html',
  styleUrls: ['./browse-reviews.component.css']
})
export class BrowseReviewsComponent implements OnInit {

  opinions=[
    {index:1, user:{firstname:"Youssef",lastname:"Ben Abdesselem",logo:"https://therichpost.com/wp-content/uploads/2021/03/avatar2.png"},review:{content:"nice store although the sections seems to be everywhere."}},
    {index:2, user:{firstname:"Youssef",lastname:"Ben Abdesselem",logo:"https://therichpost.com/wp-content/uploads/2021/03/avatar2.png"},rating:{score:4.5}},
    {index:3, user:{firstname:"Yassine",lastname:"Ben Abdesselem",logo:"https://therichpost.com/wp-content/uploads/2021/03/avatar1.png"},review:{content:"legit products thank god."}},
    {index:4, user:{firstname:"Yassine",lastname:"Ben Abdesselem",logo:"https://therichpost.com/wp-content/uploads/2021/03/avatar1.png"},rating:{score:4}},
  ]
  wantsToOpinion = false
  content =""
  score=0
  constructor(public dialog: MatDialog) { }
  toogleWantsToOpinion(){
    this.wantsToOpinion = ! this.wantsToOpinion
  }
  ngOnInit(): void {
  }
  reportReview(opinion:any){
    console.log("opening");
    
    this.dialog.open(ReprotReviewDialogComponent,{
      width: '600px',
      data: { 
        opinion:opinion
      }
    })
  }
  PostOpinion(){
    if(this.score != 0){
      console.log("sending rating");
    }
    if(this.content != ''){
      console.log("sending review");
    }
  }
}
