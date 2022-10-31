import { NgModule } from '@angular/core';
import { CheckoutComponentModule, CheckoutStateModule, InMemorySummaryContextStorageModule } from '@checkout';
import { HttpProductsServiceModule, InMemoryProductContextStorageModule, ProductListComponentModule, ProductStateModule } from '@basket';
import { HomePage } from './home.page';

@NgModule({
  imports: [CheckoutComponentModule, CheckoutStateModule, InMemorySummaryContextStorageModule, ProductListComponentModule, ProductStateModule, HttpProductsServiceModule, InMemoryProductContextStorageModule],
  declarations: [HomePage],
  providers: [],
  exports: [HomePage]
})
export class HomePageModule {
}
