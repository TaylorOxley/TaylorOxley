
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { men_mock_product_list } from "./women_mock_product_list"

@Injectable(
    {provideIn: 'root'}
)
export class MenService {
    private baseUrl:string = "https://hollister-app-fb5ab-default-rtdb.firebaseio.com/";
    private productEndPoint:String = "women.json";

    constructor(private http:HttpClient) {

    }

    getProducts() {
        return this.http.get<men_mock_product_list []>(this.baseUrl + this.productEndPoint);  
    }

    getProduct(index:number) {
        return this.http.get<men_mock_product_list>(this.baseUrl + 'product' + '/' + index + '.json')
    }





}

 