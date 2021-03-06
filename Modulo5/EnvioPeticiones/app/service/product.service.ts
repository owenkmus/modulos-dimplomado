﻿import {Injectable} from "@angular/core";
import {Product} from "../model/product";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

    private productsURI = 'app/products';

    constructor(private http: Http) { }

    getProducts(): Promise<Product[]> {
        return this.http.get('http://138.68.0.83:7070/api/v1/product/list')
        //'http://localhost:3000/api/products'
            .toPromise()
            .then(response => response.json() as Product[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}