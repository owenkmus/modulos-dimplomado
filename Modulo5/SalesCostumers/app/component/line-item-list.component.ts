import {Component, OnInit} from '@angular/core';
import { LineItem } from '../model/line-item';
import {LineItemService} from "../service/line-item.service";
import {Router} from "@angular/router";

@Component({
    selector: 'line-item-list-app',
    templateUrl: 'app/templates/line-item-list.html',
    providers: [LineItemService]
})
export class LineItemListComponent implements OnInit {
    title: string = "Line Items";

    selected: LineItem;

    lineItems: LineItem[];

    constructor(private router: Router, private lineItemService: LineItemService) {

    }

    getLineItems() {
        this.lineItemService.getLineItems().then(lineItems => this.lineItems = lineItems);
    }

    ngOnInit(): void {
        this.getLineItems();
    }

    onSelectLine(lineItem: LineItem){
        this.selected = lineItem;
    }

    gotoLineDetail(): void {
        this.router.navigate(['line-item/detail/', this.selected.salesInvoiceId]);
    }
}