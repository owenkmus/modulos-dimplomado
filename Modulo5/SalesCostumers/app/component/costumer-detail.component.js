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
var CostumerDetailComponent = (function () {
    function CostumerDetailComponent(costumerService, route) {
        this.costumerService = costumerService;
        this.route = route;
    }
    CostumerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.costumerService.getCostumer(id)
                .then(function (costumer) { return _this.costumer = costumer; });
        });
    };
    CostumerDetailComponent = __decorate([
        core_1.Component({
            selector: 'costumer-detail-app',
            templateUrl: 'app/templates/costumer-detail.html',
            providers: [costumer_service_1.CostumerService]
        }), 
        __metadata('design:paramtypes', [costumer_service_1.CostumerService, router_1.ActivatedRoute])
    ], CostumerDetailComponent);
    return CostumerDetailComponent;
}());
exports.CostumerDetailComponent = CostumerDetailComponent;
//# sourceMappingURL=costumer-detail.component.js.map