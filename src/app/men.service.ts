
import { Injectable } from "@angular/core";
import { men_mock_product_list } from "./women_mock_product_list"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    provideIn: 'root'
})

export class CardService {
    private baseUrl:string = "https://hollister-app-fb5ab-default-rtdb.firebaseio.com";
    private productEndPoint:String = "men.json";

    constructor(private http: HttpClient) {}

    addCard(cardData: any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this.baseUrl, cardData, { headers });
    }
  }




}

 