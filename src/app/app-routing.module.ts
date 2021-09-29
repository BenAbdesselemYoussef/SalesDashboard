import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './store-admin/admin-product/admin-product.component';
import { AdminReportsComponent } from './store-admin/admin-reports/admin-reports.component';
import { AdminReviewsComponent } from './store-admin/admin-reviews/admin-reviews.component';
import { AdminSectionComponent } from './store-admin/admin-section/admin-section.component';
import { AdminStatsComponent } from './store-admin/admin-stats/admin-stats.component';
import { AdminStoreComponent } from './store-admin/admin-store/admin-store.component';
import { StoreAdminComponent } from './store-admin/store-admin.component';
import { ProductComponent } from './store-management/product/product.component';
import { RatingsComponent } from './store-management/ratings/ratings.component';
import { ReviewsComponent } from './store-management/reviews/reviews.component';
import { SalesComponent } from './store-management/sales/sales.component';
import { SectionComponent } from './store-management/section/section.component';
import { StatsComponent } from './store-management/stats/stats.component';
import { StoreManagementComponent } from './store-management/store-management.component';
import { StoreComponent } from './store-management/store/store.component';
import { StoreBrowserComponent } from './store-browser/store-browser.component';
import { StoresContentComponent } from './store-browser/stores-content/stores-content.component';
import { StoreDisplayComponent } from './store-browser/store-display/store-display.component';
import { FinaliseOrderComponent } from './store-browser/finalise-order/finalise-order.component';
import { BrowseSectionsComponent } from './store-browser/browse-sections/browse-sections.component';
import { BrowseReviewsComponent } from './store-browser/browse-reviews/browse-reviews.component';
import { AdminUsersComponent } from './store-admin/admin-users/admin-users.component';
import { AdminOrdersComponent } from './store-admin/admin-orders/admin-orders.component';
import { FavoriteDisplayComponent } from './store-browser/favorite-display/favorite-display.component';
import { OrdersDisplayComponent } from './store-browser/orders-display/orders-display.component';
import { ProfileDisplayComponent } from './store-browser/profile-display/profile-display.component';

const routes: Routes = [
  { path: "manage", component: StoreManagementComponent, children:[
    {path:"", redirectTo:"store" , pathMatch: "full"},
    {path:"store", component: StoreComponent},
    {path:"product", component: ProductComponent},
    {path:"section", component: SectionComponent},
    {path:"sales", component: SalesComponent},
    {path:"reviews", component: ReviewsComponent},
    {path:"ratings", component: RatingsComponent},
    {path:"stats", component: StatsComponent}
  ] },
  { path: "admin", component: StoreAdminComponent, children:[
    {path:"", redirectTo:"reports" , pathMatch: "full"},
    {path:"users", component: AdminUsersComponent},
    {path:"stores", component: AdminStoreComponent},
    {path:"products", component: AdminProductComponent},
    {path:"sections", component: AdminSectionComponent},
    {path:"orders", component: AdminOrdersComponent},
    {path:"reviews", component: AdminReviewsComponent},
    {path:"reports", component: AdminReportsComponent},
    {path:"stats", component: AdminStatsComponent},
  ] },
  { path:"browse", component: StoreBrowserComponent, children:[
    {path:"", component: StoresContentComponent},
    {path:"favorite", component: FavoriteDisplayComponent},
    {path:"orders", component: OrdersDisplayComponent},
    {path:"profile", component: ProfileDisplayComponent},
    {path:"store/:id", component: StoreDisplayComponent, children:[
      {path:"", component: BrowseSectionsComponent},
      {path:"order", component: FinaliseOrderComponent},
      {path:"reviews", component: BrowseReviewsComponent},
    ]},
  ]},
  {path:"", redirectTo:"browse" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StoreManagementComponent, StoreComponent, StatsComponent, SalesComponent, SectionComponent, ReviewsComponent, RatingsComponent, ProductComponent, AdminProductComponent, AdminReviewsComponent, AdminSectionComponent, AdminStatsComponent, AdminStoreComponent, StoreAdminComponent, AdminReportsComponent, AdminUsersComponent, AdminOrdersComponent, StoreBrowserComponent, StoresContentComponent, StoreDisplayComponent, BrowseSectionsComponent, FinaliseOrderComponent, BrowseReviewsComponent, ProfileDisplayComponent, OrdersDisplayComponent, FavoriteDisplayComponent,]