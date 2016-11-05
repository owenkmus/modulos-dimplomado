import { Component, Input } from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'user-detail',
    templateUrl: 'app/templates/user-detail.html'
})

export class UserDetailComponent {
   
    @Input()
    user: User;

    constructor(private userService: UserService, private route: ActivatedRoute,){

    }

    save(): void {
        this.userService.update(this.user)
            .subscribe(
                response => {console.log(response)},
                err => { console.log(err)});
    }
}
