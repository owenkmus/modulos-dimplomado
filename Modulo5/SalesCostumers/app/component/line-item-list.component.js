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
var line_item_service_1 = require("../service/line-item.service");
var router_1 = require("@angular/router");
var LineItemListComponent = (function () {
    function LineItemListComponent(router, lineItemService) {
        this.router = router;
        this.lineItemService = lineItemService;
        this.title = "Line Items";
    }
    LineItemListComponent.prototype.getLineItems = function () {
        var _this = this;
        this.lineItemService.getLineItems().then(function (lineItems) { return _this.lineItems = lineItems; });
    };
    LineItemListComponent.prototype.ngOnInit = function () {
        this.getLineItems();
    };
    LineItemListComponent.prototype.onSelectLine = function (lineItem) {
        this.selected = lineItem;
    };
    LineItemListComponent.prototype.gotoLineDetail = function () {
        this.router.navigate(['line-item/detail/', this.selected.salesInvoiceId]);
    };
    LineItemListComponent = __decorate([
        core_1.Component({
            selector: 'line-item-list-app',
            templateUrl: 'app/templates/line-item-list.html',
            providers: [line_item_service_1.LineItemService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, line_item_service_1.LineItemService])
    ], LineItemListComponent);
    return LineItemListComponent;
}());
exports.LineItemListComponent = LineItemListComponent;
//# sourceMappingURL=line-item-list.component.js.map