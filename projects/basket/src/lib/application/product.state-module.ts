import { NgModule } from '@angular/core';
import { ProductState } from './product.state';
import { LOADS_ALL_PRODUCTS_COMMAND_PORT } from './ports/primary/command/loads-all-products.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [ProductState, { provide: LOADS_ALL_PRODUCTS_COMMAND_PORT, useExisting: ProductState }],
  exports: []
})
export class ProductStateModule {
}
