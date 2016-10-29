import {Component, OnInit} from '@angular/core';
import { SalesInvoice } from '../model/sales-invoice';
import {SalesInvoiceService} from "../service/sales-invoice.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sales-invoice-list-app',
    templateUrl: 'app/templates/sales-invoice-list.html',
    providers: [SalesInvoiceService]
})
export class SalesInvoiceListComponent implements OnInit {
    title: string = "Sales";

    selectedSales: SalesInvoice;

    salesInvoices: SalesInvoice[];

    constructor(private router: Router, private salesInvoiceService: SalesInvoiceService) {

    }

    getSalesInvoices() {
        this.salesInvoiceService.getSalesInvoices().then(salesInvoices => this.salesInvoices = salesInvoices);
    }

    ngOnInit(): void {
        this.getSalesInvoices();
    }

    onSelectSales(salesInvoice: SalesInvoice){
        this.selectedSales = salesInvoice;
    }

    gotoSalesDetail(): void {
        this.router.navigate(['sales-invoice/detail/', this.selectedSales.id]);
    }
}