import { Men } from "@angular/core";
import { men_mock_product_list } from './men_mock_product_list';
import { db } from "../firebase";
import { Component } from "@angular/core";
import { CardFormComponent } from "./card-form/card-form.component";



export class CardFormComponent {
  img: string;
  name: string;
  price: string;

  onSubmit() {
    db.collection("men-product-form").add({
      img: this.img,
      name: this.name,
      price: this.price,
    });
    this.img = "";
    this.name = "";
    this.price = "";
  }
}







  
 
  

  

  
  
  
  

  








  
  