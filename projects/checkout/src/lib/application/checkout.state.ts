import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsSummaryLinesQueryPort } from './ports/primary/query/gets-summary-lines.query-port';
import { SUMMARY_CONTEXT_PORT, SummaryContextPort } from './ports/secondary/context/summary.context-port';
import { SummaryLineQuery } from './ports/primary/query/summary-line.query';

@Injectable()
export class CheckoutState implements GetsSummaryLinesQueryPort {
  constructor(@Inject(SUMMARY_CONTEXT_PORT) private _summaryContextPort: SummaryContextPort) {
  }

  getSummaryLines(): Observable<SummaryLineQuery[]> {
    return this._summaryContextPort.select().pipe(
      map(data => [{ label: 'Subtotal', value: data.productTotal },
        { label: 'Shipping', value: data.shipping }, { label: 'Total', value: data.shipping + data.productTotal }]));
  }
}
