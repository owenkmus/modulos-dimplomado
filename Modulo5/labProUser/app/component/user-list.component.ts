import { Component, Input } from '@angular/core';
import { User } from '../model/user';
import { USERS } from '../mock/user-mock';

@Component({
  selector: 'user-app',
  templateUrl: 'app/templates/user-list.html'
})

export class UserListComponent {
	
	title: 'Usuarios';
 	users: User[] = USERS;

}