import { NgModule } from '@angular/core';
import { CheckoutComponentModule, CheckoutStateModule, InMemorySummaryContextStorageModule } from '@checkout';
import { HomePage } from './home.page';

@NgModule({
  imports: [CheckoutComponentModule, CheckoutStateModule, InMemorySummaryContextStorageModule],
  declarations: [HomePage],
  providers: [],
  exports: [HomePage]
})
export class HomePageModule {
}
