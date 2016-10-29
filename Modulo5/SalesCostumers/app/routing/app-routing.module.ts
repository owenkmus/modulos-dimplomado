import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductListComponent} from "../component/product-list.component";
import {ProductDetailComponent} from "../component/product-detail.component";
import {CostumerListComponent} from "../component/costumer-list.component";
import {CostumerDetailComponent} from "../component/costumer-detail.component";
import {LineItemListComponent} from "../component/line-item-list.component";
import {LineItemDetailComponent} from "../component/line-item-detail.component";
import {SalesInvoiceListComponent} from "../component/sales-invoice-list.component";
import {SalesInvoiceDetailComponent} from "../component/sales-invoice-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
    { path: 'costumer-list', component: CostumerListComponent },
    { path: 'costumer/detail/:id', component: CostumerDetailComponent },
    { path: 'line-item-list', component: LineItemListComponent },
    { path: 'line-item/detail/:salesInvoiceId', component: LineItemDetailComponent },
    { path: 'sales-invoice-list', component: SalesInvoiceListComponent },
    { path: 'sales-invoice/detail/:id', component: SalesInvoiceDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}