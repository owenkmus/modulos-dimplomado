import { Component } from '@angular/core';

 export class Ride {
 	id: number;
    nombre: string;
    airport: number;
 	pp: number;
 	units: number = 50;
 	festives: number;
 	defaults: number = 4100;
    total: number;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/ride.html'
})
export class AppComponent {

	title: string = "Viajes";
	selected: Ride;
	rides: Ride[] = RIDES;

	onSelect(ride: Ride) {
		this.selected = ride;
	}
}

const RIDES: Ride[] = [

    {
        id: 1,
        nombre: "Aeropuerto",
        airport: 3900,
        pp: 700,
        festives: 1900,
        units: this.units,
        defaults: this.defaults,
        total: ((this.airport+this.pp+this.festives+this.units+this.defaults))
             
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