import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboardsales';
  date = new Date();
  routes = [
    {
      route: "/store",
      crumb: "Store",
      icon: "fa fa-home"
    },
    {
      route: "/products",
      crumb: "Products",
      icon: "fa fa-shopping-bag"
    },
    {
      route: "/sections",
      crumb: "Sections",
      icon: "fa fa-window-minimize"
    },
    {
      route: "/sales",
      crumb: "Sales",
      icon: "fa fa-credit-card"
    },
    {
      route: "/reviews",
      crumb: "Reviews",
      icon: "fa fa-comments"
    },
    {
      route: "/ratings",
      crumb: "Ratings",
      icon: "fa fa-star"
    },
    {
      route: "/stats",
      crumb: "Stats",
      icon: "fa fa-chart-bar"
    }
  ]
  breadcrumb = 'Store'
  setCrumb(crumb: string) {
    this.breadcrumb = crumb
  }
}
