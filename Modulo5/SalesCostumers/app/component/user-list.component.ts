import {Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'user-list-app',
    templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})
export class UserListComponent implements OnInit {
    title: string = "Usuarios";

    selectedUser: User;

    users: User[];

    constructor(private router: Router, private userService: UserService) {

    }

    getUser() {
        this.userService.getUsers().then(users => this.users = users);
    }

    ngOnInit(): void {
        this.getUser();
    }

    onSelectUser(user: User){
        this.selectedUser = user;
    }

    gotoUserDetail(): void {
        this.router.navigate(['user/detail/', this.selectedUser.id]);
    }
}