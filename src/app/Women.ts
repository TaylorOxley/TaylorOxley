import { Component } from '@angular/core';
import { women_mock_product_list} from "./women_mock_product_list"
import { ProductService } from "./product.service";
import { ProductItemModel } from "./products.service"
{
@Component({
  selector: 'Women',
  templateUrl: './women',
  styleUrls: ['./women.css']
})
export class Women {
  Title = 'Women';
  Attribute = 'women';
}

constructor(private, ProductService:ProductService) {
for (var product of women_mock_product_list) {
  console.log(product);
  this.products.push(product);
  }
}

ngOnInit(): void{
  this.productsService.getProduct().subscribe((data: ProductItemModel []) => {
    console.log("Fetching products");
    for (var product of data)
     console.log(data);
     this.products.push(product);
    } 
  });
 }
}
function constructor(private: any, ProductService: any, ProductService1: any) {
  throw new Error('Function not implemented.');
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

