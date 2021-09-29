import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './store-management/confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';
import { AddDialogComponent } from './store-management/add-dialog/add-dialog.component';
import { DeleteDialogComponent } from './store-management/delete-dialog/delete-dialog.component';
import { DeleteSectionDialogComponent } from './store-management/delete-section-dialog/delete-section-dialog.component';
import { AddSectionProductsDialogComponent } from './store-management/add-section-products-dialog/add-section-products-dialog.component';
import { EditSectionDialogComponent } from './store-management/edit-section-dialog/edit-section-dialog.component';
import { OrderDetailDialogComponent } from './store-management/order-detail-dialog/order-detail-dialog.component';
import { BanProductDialogComponent } from './store-admin/ban-product-dialog/ban-product-dialog.component';
import { BanStoreDialogComponent } from './store-admin/ban-store-dialog/ban-store-dialog.component';
import { TopBarComponent } from './store-browser/top-bar/top-bar.component';

import { MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailsDialogComponent } from './store-browser/product-details-dialog/product-details-dialog.component';
import { BanUserDialogComponent } from './store-admin/ban-user-dialog/ban-user-dialog.component';
import { ValidateDileveryDialogComponent } from './store-admin/validate-dilevery-dialog/validate-dilevery-dialog.component';
import { ReprotReviewDialogComponent } from './store-browser/reprot-review-dialog/reprot-review-dialog.component';
import { OrdersDetailsDialogComponent } from './store-browser/orders-details-dialog/orders-details-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ConfirmDialogComponent,
    AddDialogComponent,
    DeleteDialogComponent,
    DeleteSectionDialogComponent,
    AddSectionProductsDialogComponent,
    EditSectionDialogComponent,
    OrderDetailDialogComponent,
    BanProductDialogComponent,
    BanStoreDialogComponent,
    TopBarComponent,
    ProductDetailsDialogComponent,
    BanUserDialogComponent,
    ValidateDileveryDialogComponent,
    ReprotReviewDialogComponent,
    OrdersDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
