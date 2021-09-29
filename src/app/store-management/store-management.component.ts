import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.css']
})
export class StoreManagementComponent implements OnInit {
  date = new Date();
  routes = [
    {
      route: "/manage/store",
      crumb: "Store",
      icon: "fa fa-home"
    },
    {
      route: "/manage/product",
      crumb: "Products",
      icon: "fa fa-shopping-bag"
    },
    {
      route: "/manage/section",
      crumb: "Sections",
      icon: "fa fa-window-minimize"
    },
    {
      route: "/manage/sales",
      crumb: "Sales",
      icon: "fa fa-credit-card"
    },
    {
      route: "/manage/reviews",
      crumb: "Reviews",
      icon: "fa fa-comments"
    },
    {
      route: "/manage/ratings",
      crumb: "Ratings",
      icon: "fa fa-star"
    },
    {
      route: "/manage/stats",
      crumb: "Stats",
      icon: "fa fa-chart-bar"
    }
  ];
  breadcrumb = 'Store';
  setCrumb(crumb: string) {
    this.breadcrumb = crumb
  }
  constructor() { }

  ngOnInit(): void {
  }

}
