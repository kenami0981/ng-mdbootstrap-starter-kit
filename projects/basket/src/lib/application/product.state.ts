import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { LoadsAllProductsCommandPort } from './ports/primary/command/loads-all-products.command-port';
import { GETS_ALL_PRODUCTS_DTO_PORT, GetsAllProductsDtoPort } from './ports/secondary/dto/gets-all-products.dto-port';
import { PRODUCT_CONTEXT_PORT, ProductContextPort } from './ports/secondary/context/product.context-port';


@Injectable()
export class ProductState implements LoadsAllProductsCommandPort {
  constructor(@Inject(GETS_ALL_PRODUCTS_DTO_PORT) private _getsAllProductsDtoPort: GetsAllProductsDtoPort, @Inject(PRODUCT_CONTEXT_PORT) private _productContextPort: ProductContextPort) {
  }

  loadAllProducts(): Observable<void> {
    return this._getsAllProductsDtoPort.getAll().pipe(
      switchMap(products => this._productContextPort.setState({all: products}))
    );
  }


}
