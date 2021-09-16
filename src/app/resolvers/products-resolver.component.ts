import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { ProductsServiceComponent } from "../services/products-service.component";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class ProductsResolverService implements Resolve<any> {

    constructor(private productService: ProductsServiceComponent) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      localStorage.setItem('currentTypeName', route.queryParams["name"]);
      return this.productService.getProducts(route.queryParams["id"]).pipe(
        catchError(error => {
          return of(error);
        })
      );
    }
  }

