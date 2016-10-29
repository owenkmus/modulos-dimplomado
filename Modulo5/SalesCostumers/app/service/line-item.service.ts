import {Injectable} from "@angular/core";
import {LINEITEMS} from "../mock/line-item-mock";
import {LineItem} from "../model/line-item";

@Injectable()
export class LineItemService{
    getLineItems(): Promise<LineItem[]>{
        return Promise.resolve(LINEITEMS);
    }

    getLineItem(salesInvoiceId: number): Promise<LineItem> {
        return this.getLineItems()
            .then(lineItem => lineItem.find(lineItem => lineItem.salesInvoiceId === salesInvoiceId));
    }
}