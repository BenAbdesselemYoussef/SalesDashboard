import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-admin',
  templateUrl: './store-admin.component.html',
  styleUrls: ['./store-admin.component.css']
})
export class StoreAdminComponent implements OnInit {
  date = new Date();
  routes = [
    {
      route: "/admin/reports",
      crumb: "Reports",
      icon: "fa fa-exclamation"
    },
    {
      route: "/admin/users",
      crumb: "Users",
      icon: "fa fa-user"
    },
    {
      route: "/admin/stores",
      crumb: "Stores",
      icon: "fa fa-home"
    },
    {
      route: "/admin/products",
      crumb: "Products",
      icon: "fa fa-shopping-bag"
    },
    {
      route: "/admin/sections",
      crumb: "Sections",
      icon: "fa fa-window-minimize"
    },
    {
      route: "/admin/orders",
      crumb: "Orders",
      icon: "fa fa-credit-card"
    },
    {
      route: "/admin/reviews",
      crumb: "Reviews",
      icon: "fa fa-comments"
    },
    {
      route: "/admin/stats",
      crumb: "Stats",
      icon: "fa fa-chart-bar"
    }
  ];
  breadcrumb = 'Stores';
  setCrumb(crumb: string) {
    this.breadcrumb = crumb
  }
  constructor() { }

  ngOnInit(): void {
  }

}
