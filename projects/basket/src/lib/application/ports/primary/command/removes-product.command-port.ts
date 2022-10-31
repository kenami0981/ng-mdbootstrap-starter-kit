import { InjectionToken } from '@angular/core';
import {RemoveProductCommand} from "./remove-product.command";
import {Observable} from "rxjs";

export const REMOVES_PRODUCT_COMMAND_PORT = new InjectionToken<RemovesProductCommandPort>('REMOVES_PRODUCT_COMMAND_PORT');

export interface RemovesProductCommandPort {
  removeProduct(command: RemoveProductCommand): Observable<void>;

}
