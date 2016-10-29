import { Component } from '@angular/core';
import { Product } from '../model/product';
import { PRODUCTS } from '../mock/product-mock';

@Component({
  selector: 'product-app',
  templateUrl: 'app/templates/product-list.html'
})

export class ProductListComponent {
	
	title: 'Mis productos';
	products: Product[] = PRODUCTS;

}