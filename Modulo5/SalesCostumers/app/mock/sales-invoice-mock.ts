import {SalesInvoice} from '../model/sales-invoice';
import {COSTUMERS} from '../mock/costumer-mock';
import {LINEITEMS} from '../mock/line-item-mock';

export const SALESINVOICES : SalesInvoice[] = [
    {
        id: 1,
        costumerId: COSTUMERS [0].id,
        invoiceAmount: LINEITEMS [0].purchasePrice,
        tax: 10000,

    },
    {
        id: 2,
        costumerId: COSTUMERS [1].id,
        invoiceAmount: LINEITEMS [1].purchasePrice,
        tax: 20000
        
    },
    {
        id: 3,
        costumerId: COSTUMERS [2].id,
        invoiceAmount: LINEITEMS [2].purchasePrice,
        tax: 30000
      
    }
];