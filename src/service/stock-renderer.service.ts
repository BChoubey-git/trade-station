import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import stockDetails from '../mocks/stockDetails.json';
import buyStock from '../mocks/buyStock.json';
import sellStock from '../mocks/sellStock.json';

@Injectable({
  providedIn: 'root'
})
export class StockRendererService {

  constructor(private httpClient: HttpClient) { }

  public getStock() {
    // below line to be uncommented when making service call, URL to be corrected.
    return this.httpClient.get(`https://tools.learningcontainer.com/sample-json.json`);

    // loading data from hard coded JSON file, stockDetails.json
    // return stockDetails;
  }

  public buyStock() {
    // below line to be uncommented when making service call, URL to be corrected.
    // return this.httpClient.get(`https://tools.learningcontainer.com/sample-json.json`);

    // loading data from hard coded JSON file, buyStock.json
    return buyStock;
  }

  public sellStock() {
    // below line to be uncommented when making service call, URL to be corrected.
    // return this.httpClient.get(`https://tools.learningcontainer.com/sample-json.json`);

    // loading data from hard coded JSON file, sellStock.json
    return sellStock;
  }

  public viewChart() {
    // below line to be uncommented when making service call, URL to be corrected.
    // return this.httpClient.get(`https://tools.learningcontainer.com/sample-json.json`);

    // loading data from hard coded JSON file, stockDetails.json
    return stockDetails;
  }
}
