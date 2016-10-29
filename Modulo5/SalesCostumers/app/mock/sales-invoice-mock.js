"use strict";
var costumer_mock_1 = require('../mock/costumer-mock');
var line_item_mock_1 = require('../mock/line-item-mock');
exports.SALESINVOICES = [
    {
        id: 1,
        costumerId: costumer_mock_1.COSTUMERS[0].id,
        invoiceAmount: line_item_mock_1.LINEITEMS[0].purchasePrice,
        tax: 10000,
    },
    {
        id: 2,
        costumerId: costumer_mock_1.COSTUMERS[1].id,
        invoiceAmount: line_item_mock_1.LINEITEMS[1].purchasePrice,
        tax: 20000
    },
    {
        id: 3,
        costumerId: costumer_mock_1.COSTUMERS[2].id,
        invoiceAmount: line_item_mock_1.LINEITEMS[2].purchasePrice,
        tax: 30000
    }
];
//# sourceMappingURL=sales-invoice-mock.js.map