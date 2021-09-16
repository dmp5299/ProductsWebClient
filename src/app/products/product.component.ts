import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductType } from "../models/productType";
import { ProductsServiceComponent } from "../services/products-service.component";

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
    products: any;
    productTypeName: any;
    errorMessage: string = '';
 
    constructor(
        private activatedRoute: ActivatedRoute, private router : Router){
    }

    ngOnInit(){
        this.productTypeName = localStorage.getItem('currentTypeName');
        this.activatedRoute.data.subscribe((response: any) => {
            if(response.products.error){
                this.handleError(response.products.message)
            }
            else{
                this.products = response.products; 
            }
        },
        );
    }

    backButtonClicked(){
        this.router.navigate(['/productTypes'])
    }

    handleError(err:any){
        this.errorMessage = err;
    }
}