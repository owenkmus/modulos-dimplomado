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
var Ride = (function () {
    function Ride() {
        this.units = 50;
        this.defaults = 4100;
    }
    return Ride;
}());
exports.Ride = Ride;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Viajes";
        this.rides = RIDES;
    }
    AppComponent.prototype.onSelect = function (ride) {
        this.selected = ride;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/ride.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var RIDES = [
    {
        id: 1,
        nombre: "Aeropuerto",
        airport: 3900,
        pp: 700,
        festives: 1900,
        units: this.Ride.units,
        defaults: this.Ride.defaults,
        total: ((this.airport + this.pp + this.festives + this.units + this.defaults))
    },
    {
        id: 2,
        nombre: "Normal",
        airport: 0,
        pp: 0,
        festives: 1900,
        units: 50,
        defaults: 4100,
        total: ((this.airport + this.app + this.festives + this.units + this.defaults))
    },
    {
        id: 3,
        nombre: "Varios destinos",
        airport: 0,
        pp: 700,
        festives: 1900,
        units: this.units,
        defaults: this.defaults,
        total: ((this.airport + this.app + this.festives + this.units + this.defaults))
    }
];
//# sourceMappingURL=app.component.js.map