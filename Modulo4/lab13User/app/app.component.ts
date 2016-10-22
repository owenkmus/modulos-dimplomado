import { Component } from '@angular/core';

 export class User {
 	id: number;
 	name: string;
 	address: string;
 	phone: number;
 }

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/user.html'
})
export class AppComponent {
	
	title = "Usuarios";
	selected: User;
	users: User[] = USERS;

	onSelect(user: User) {
		this.selected = user;
	}
}

const USERS: User[] = [
    {
        id: 1,
        name: "Cristian",
        address: "Av falsa 123",
        phone: 3008124572
    },
    {
        id: 2,
        name: "Camilo",
        address: "Calle 3 No. 48",
        phone: 3135824697
    },
    {
        id: 3,
        name: "Ricardo",
        address: "Cra 102 # 141 - 34",
        phone: 3165879685
    }
];