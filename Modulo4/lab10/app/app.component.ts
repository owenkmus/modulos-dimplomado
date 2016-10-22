import { Component } from '@angular/core';

 export class User {
 	id: number;
 	name: string;
 	address: string;
 	phone: number;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})
export class AppComponent {
	user: User = {
		id: 2,
		name: "Cristian",
		address: "Av falsa 123",
		phone: 3008142457
	}
}