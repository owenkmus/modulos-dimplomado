import {Component, OnInit} from '@angular/core';
import { Costumer } from '../model/costumer';
import {CostumerService} from "../service/costumer.service";
import {Router} from "@angular/router";

@Component({
    selector: 'costumer-list-app',
    templateUrl: 'app/templates/costumer-list.html',
    providers: [CostumerService]
})
export class CostumerListComponent implements OnInit {
    title: string = "Usuarios";

    selectedCostumer: Costumer;

    costumers: Costumer[];

    constructor(private router: Router, private costumerService: CostumerService) {

    }

    getCostumer() {
        this.costumerService.getCostumers().then(costumers => this.costumers = costumers);
    }

    ngOnInit(): void {
        this.getCostumer();
    }

    onSelectCostumer(costumer: Costumer){
        this.selectedCostumer = costumer;
    }

    gotoCostumerDetail(): void {
        this.router.navigate(['costumer/detail/', this.selectedCostumer.id]);
    }
}