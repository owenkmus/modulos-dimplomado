import { Component } from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})
export class UserComponent {
    title: string = "Usuarios";

    selectedUser: User;

    users: User[];

    constructor(private router: Router, private userService: UserService) {

    }

    getUsers() {
        this.userService.getUsers()
            .subscribe(
            users => {
                this.users = users;
            },

            error => {
                console.log(error);
            }
        );
    }

    ngOnInit(): void {
        this.getUsers();
    }

    onSelectUser(user: User){
        this.selectedUser = user;
    }

    add(firstname: string): void {
        firstname = firstname.trim();
        if (!firstname) { return; }
        this.userService.create(firstname)
            .subscribe(user => {
                this.users.push(user);
                this.selectedUser = null;
            });
    }

    gotoUserDetail(): void {
        this.router.navigate(['user/detail/', this.selectedUser.id]);
    }
}