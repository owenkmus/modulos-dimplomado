import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { ProductDetailComponent } from './component/product-detail.component';
import { UserDetailComponent } from './component/user-detail.component';
import { UserComponent } from './component/user.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryProductService} from "./mock/in-memory-product.service";
import {ProductService} from "./service/product.service";
import {UserService} from "./service/user.service";


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryProductService),
      AppRoutingModule
  ],
  declarations: [
      AppComponent,
      ProductDetailComponent,
      UserDetailComponent,
      UserComponent
  ],
    providers: [ProductService, UserService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

