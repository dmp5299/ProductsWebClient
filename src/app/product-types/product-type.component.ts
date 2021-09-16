import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsServiceComponent } from "../services/products-service.component";

@Component({
    selector: 'product-types',
    templateUrl: './product-type.component.html',
    styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit{
    productTypes: any;
    errorMessage = '';
 
    constructor(private productsService: ProductsServiceComponent, private route: Router){
    }

    rowClick(productType:any){
        let route = '/products';
        this.route.navigate([route], { queryParams: { id: productType.Id, name: productType.Name } });
    }

    ngOnInit(){
        console.log("Eherere")
        this.productsService.getProductTypes().subscribe(
            productTypes => {
                console.log("here")
                this.productTypes =  productTypes;
            },
            err => this.handleError(err)
        );
    }
    
    handleError(err:any){
        console.log(err)
        this.errorMessage = err.message;
    }
}