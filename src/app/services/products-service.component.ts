import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

const productsUrl = `${environment.apiEndPoint}/products`;
const headers = new HttpHeaders({
    'Content-Type': 'application/json'
})

@Injectable({
    providedIn: 'root',
})
export class ProductsServiceComponent{

    constructor(private http: HttpClient){}

    getProductTypes(){
        console.log(environment)
        console.log(`${productsUrl}/productTypes`)
        return this.http.get(`${productsUrl}/productTypes`, { headers: headers});
    }

    getProducts(id:number){
        return this.http.post(`${productsUrl}/products`, id, { headers: headers});
    }
}