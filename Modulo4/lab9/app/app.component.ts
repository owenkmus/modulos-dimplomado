import { Component } from '@angular/core';

 export class Product {
 	id: number;
 	name: string;
 	description: string;
 	type: string;
 	price: number;
 	quantity: number;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})
export class AppComponent {

	title = "Mi producto";
	product: Product = {
		id: 1,
		name: "Galax7 7",
		description: "Granada de mano",
		type: "smartphone",
		price: 500000,
		quantity: 10
	}
}
