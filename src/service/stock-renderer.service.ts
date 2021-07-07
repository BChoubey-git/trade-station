import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import stockDetails from '../mocks/stockDetails.json';

@Injectable({
  providedIn: 'root'
})
export class StockRendererService {

  constructor(private httpClient: HttpClient) { }

  public getStock() {
    // below line to be uncommented when making service call, URL to be corrected.
    // return this.httpClient.get(`https://tools.learningcontainer.com/sample-json.json`);

    // loading data from hard coded JSON file, stockDetails.json
    return stockDetails;
  }
}
