import { Men } from "@angular/core";
import { men_mock_product_list } from './men_mock_product_list';
import { db } from "../firebase";
import { Component } from "@angular/core";
import { CardFormComponent } from "./card-form/card-form.component";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CardService } from '../card.service';



@Component({
  selector: 'men',
  templateUrl: './Men.html',
  styleUrls: ['./Men.css']
})
export class men {
  cardForm = new FormGroup({
    Image: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required),
  });

  constructor(private cardService: CardService) {}

  onSubmit() {
    this.cardService.addCard(this.cardForm.value).subscribe();
  }
}







  
 
  

  

  
  
  
  

  








  
  