import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-stores-content',
  templateUrl: './stores-content.component.html',
  styleUrls: ['./stores-content.component.css']
})
export class StoresContentComponent implements OnInit {
  selector = "Store name"
  selectorList = ["Store name", "Store Code"]
  storesinit = [
    {
      index:1,
      code:1432,
      logo:"https://www.keejob.com/media/recruiter/recruiter_13008/logo-13008-20170712-104243.png",
      name:"Jumia Food",
      open:true,
      description:"first food delivery platform in tunisia."
    },
    {
      index:2,
      code:1322,
      logo:"https://www.keejob.com/media/recruiter/recruiter_18845/logo-18845-20190911-133102.png",
      name:"Tunisia Net",
      open:true,
      description:"Best prices for the best products."
    },
    {
      index:3,
      code:1342,
      logo:"https://i.pinimg.com/originals/f6/db/eb/f6dbeb17951cb9d12c450eb26e42e484.jpg",
      name:"Indie supermarket",
      open:false,
      description:"Just your casual neighborhood market."
    },
    {
      index:4,
      code:1562,
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuIAlci3psUYbyzCCc2IS_A6dV4wm2TtnyQ&usqp=CAU",
      name:"Familios",
      open:true,
      description:"Restaurant familial A bourj sedria."
    },
    {
      index:5,
      code:5554,
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNI41DMEWkkfeEj0pcUMuCQzCyV7jLDY_Hw&usqp=CAU",
      name:"Chokkri's apple",
      open:true,
      description:"Apple store but its mine. Regards chokkri."
    },
    {
      index:6,
      code:6666,
      logo:"data:image/jpeg;base64,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",
      name:"Monsef bay gucci",
      open:false,
      description:"GUCCI but second handed. All products are authentic i swear"
    },
  ]
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(){
  }

  visitstore(store:any){
    this.router.navigate(['/browse/store', store.index])
  }

}
