import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './intex.html',
  styleUrls: ['./styles.css']
})
export class ProductListComponent {
  products = [
    { name: 'Product-1', description: '1' },
    { name: 'Product-2', description: '2' },
    { name: 'Product-3', description: '3' },
  ];

  addToCart(product) {
    // Implement your "Add to Cart" functionality here
  }
}
