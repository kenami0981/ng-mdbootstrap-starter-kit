import { NgModule } from '@angular/core';
import { CheckoutState } from './checkout.state';
import { GETS_SUMMARY_LINES_QUERY_PORT } from './ports/primary/query/gets-summary-lines.query-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [CheckoutState, { provide: GETS_SUMMARY_LINES_QUERY_PORT, useExisting: CheckoutState }],
  exports: []
})
export class CheckoutStateModule {
}
