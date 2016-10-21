import { Component } from '@angular/core';

 export class User {
 	id: number;
 	name: string;
 	address: string;
 	phone: number;
 }

@Component({
  selector: 'my-app',
  template: '<h1>{{user.id}}</h1><br />' + 
  			'<h2>{{user.name}}</h2><br />' +
  			'<h2>{{user.address}}</h2><br />' +
  			'<h2>{{user.phone}}</h2><br />' 
})
export class AppComponent {
	user: User = {
		id: 2,
		name: "Cristian",
		address: "Av falsa 123",
		phone: 3008142457
	}
}