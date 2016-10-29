import { Component, Input } from '@angular/core';
import { User } from '../model/user';

@Component({
	selector: 'user-list',
	templateUrl: 'app/templates/user-list.html'
})

export class UserListComponent {
	@Input()
	user: User;
}