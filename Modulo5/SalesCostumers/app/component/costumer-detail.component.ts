import {Component, OnInit} from '@angular/core';
import { Costumer } from '../model/costumer';
import {CostumerService} from "../service/costumer.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'costumer-detail-app',
    templateUrl: 'app/templates/costumer-detail.html',
    providers: [CostumerService]
})

export class CostumerDetailComponent implements OnInit {

    costumer: Costumer;
    constructor(
        private costumerService: CostumerService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id =+params['id'];
            this.costumerService.getCostumer(id)
                .then(costumer => this.costumer = costumer);
        });
    }
}