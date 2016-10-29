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
var costumer_service_1 = require("../service/costumer.service");
var router_1 = require("@angular/router");
var CostumerListComponent = (function () {
    function CostumerListComponent(router, costumerService) {
        this.router = router;
        this.costumerService = costumerService;
        this.title = "Usuarios";
    }
    CostumerListComponent.prototype.getCostumer = function () {
        var _this = this;
        this.costumerService.getCostumers().then(function (costumers) { return _this.costumers = costumers; });
    };
    CostumerListComponent.prototype.ngOnInit = function () {
        this.getCostumer();
    };
    CostumerListComponent.prototype.onSelectCostumer = function (costumer) {
        this.selectedCostumer = costumer;
    };
    CostumerListComponent.prototype.gotoCostumerDetail = function () {
        this.router.navigate(['costumer/detail/', this.selectedCostumer.id]);
    };
    CostumerListComponent = __decorate([
        core_1.Component({
            selector: 'costumer-list-app',
            templateUrl: 'app/templates/costumer-list.html',
            providers: [costumer_service_1.CostumerService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, costumer_service_1.CostumerService])
    ], CostumerListComponent);
    return CostumerListComponent;
}());
exports.CostumerListComponent = CostumerListComponent;
//# sourceMappingURL=costumer-list.component.js.map