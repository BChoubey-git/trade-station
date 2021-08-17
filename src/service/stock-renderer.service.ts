import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import timedStockDetails from '../mocks/timedStockDetails.json';
import stockDetails from '../mocks/stockDetails.json';
import buyStock from '../mocks/buyStock.json';
import sellStock from '../mocks/sellStock.json';
import timeList from '../mocks/timeList.json';

@Injectable({
  providedIn: 'root'
})
export class StockRendererService {

  constructor(private httpClient: HttpClient) { }

  public getStock() {
    // below line to be uncommented when making service call, URL to be corrected.
    return this.httpClient.get("http://localhost:5050/");

    // loading data from hard coded JSON file, stockDetails.json
    // return stockDetails;
  }

  public getTimedStock(time) {
    // below line to be uncommented when making service call, URL to be corrected.
    return this.httpClient.get("http://localhost:5050/getBreakoutDataByTime?time=" + time);

    // loading data from hard coded JSON file, timedStockDetails.json
    // return timedStockDetails;
  }

  public getTime() {
    // below line to be uncommented when making service call, URL to be corrected.
    return this.httpClient.get("http://localhost:5050/getTimeList");

    // loading data from hard coded JSON file, timeList.json
    // return timeList;
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
