"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./component/app.component');
var app_routing_module_1 = require("./routing/app-routing.module");
var common_1 = require("@angular/common");
var product_list_component_1 = require("./component/product-list.component");
var product_detail_component_1 = require("./component/product-detail.component");
var costumer_list_component_1 = require("./component/costumer-list.component");
var costumer_detail_component_1 = require("./component/costumer-detail.component");
var line_item_list_component_1 = require("./component/line-item-list.component");
var line_item_detail_component_1 = require("./component/line-item-detail.component");
var sales_invoice_list_component_1 = require("./component/sales-invoice-list.component");
var sales_invoice_detail_component_1 = require("./component/sales-invoice-detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                costumer_list_component_1.CostumerListComponent,
                costumer_detail_component_1.CostumerDetailComponent,
                line_item_list_component_1.LineItemListComponent,
                line_item_detail_component_1.LineItemDetailComponent,
                sales_invoice_list_component_1.SalesInvoiceListComponent,
                sales_invoice_detail_component_1.SalesInvoiceDetailComponent
            ],
            providers: [
                {
                    provide: common_1.APP_BASE_HREF, useValue: '/'
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map