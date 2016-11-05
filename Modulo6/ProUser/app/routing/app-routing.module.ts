import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "../component/app.component";
import {ProductDetailComponent} from "../component/product-detail.component";
import {UserComponent} from "../component/user.component";
import {UserDetailComponent} from "../component/user-detail.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'product-list', component: AppComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
    { path: 'user-list', component: UserComponent },
    { path: 'user/detail/:id', component: UserDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}