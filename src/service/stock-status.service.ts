import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import stockStatus from '../mocks/stockStatus.json';

@Injectable({
  providedIn: 'root'
})
export class StockStatusService {

  constructor(private httpClient: HttpClient) { }

  public fetchStockStatus() {
    // below line to be uncommented when making service call, URL to be corrected.
    // return this.httpClient.get("http://localhost:5050/");

    // loading data from hard coded JSON file, stockStatus.json
    return stockStatus;
  }
}
