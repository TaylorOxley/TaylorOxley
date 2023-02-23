<ng-container *ngFor="let product of products">
  <div class="card">
    <h2>{{ product1.name }}</h2>
    <p>{{ product1.description }}</p>
    <button (click)="addToCart(product)">Add to Cart</button>
  </div>
</ng-container>

<ng-container *ngFor="let product of products">
  <div class="card">
    <h2>{{ product2.name }}</h2>
    <p>{{ product2.description }}</p>
    <button (click)="addToCart(product)">Add to Cart</button>
  </div>
</ng-container>

<ng-container *ngFor="let product of products">
  <div class="card">
    <h2>{{ product3.name }}</h2>
    <p>{{ product3.description }}</p>
    <button (click)="addToCart(product)">Add to Cart</button>
  </div>
</ng-container>
