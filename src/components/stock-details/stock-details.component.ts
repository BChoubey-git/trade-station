import { Component, OnInit } from '@angular/core';
import { UIConstants } from '../../constants/ui.constants'
import { StockRendererService } from '../../service/stock-renderer.service';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
  stockTableHeaders: any[];
  cols: any[];
  stockTableData: any[];
  stockTimeStamp: string;
  refresh: string;
  growlMsg: any[];

  constructor(private stockRendererService: StockRendererService) { }

  ngOnInit() {
    this.stockTableHeaders = UIConstants.STOCK_TABLE_HEADERS;
    this.refresh = UIConstants.LAST_REFRESH;
    this.fetchStockDetails();
  }

  private fetchStockDetails() {
    // Below code to be uncommented when making service call
    // this.stockRendererService.getStock().subscribe((data) => {
    //   if (data.result === UIConstants.SUCCESS
    //     && data.status_code === UIConstants.STATUS_CODE) {
    //     this.stockTableData = data.data;
    //   }
    // });

    // loading data from mock json, stockDetails.json
    const data = this.stockRendererService.getStock();
    if (data.result === UIConstants.SUCCESS
      && data.status_code === UIConstants.STATUS_CODE) {
      this.stockTimeStamp = data.time_stamp;
      this.stockTableData = data.data;
    }
  }

  private buyStock(index: number) {
    this.growlMsg = [];
    // Below code to be uncommented when making service call
    // this.stockRendererService.getStock().subscribe((buyStockResp) => {
    //   if (buyStockResp.result === UIConstants.SUCCESS
    //     && buyStockResp.status_code === UIConstants.STATUS_CODE) {
    //     this.growlMsg = buyStockResp.message;
    //   }
    // });

    // loading data from mock json, buyStock.json
    const buyStockResp = this.stockRendererService.buyStock();
    if (buyStockResp.result === UIConstants.SUCCESS
      && buyStockResp.status_code === UIConstants.STATUS_CODE) {
      this.growlMsg.push({ severity: 'success', summary: buyStockResp.message, detail: 'Order ID: ' + buyStockResp.data.order_id });
      this.stockTableData[index].disabledBuy = true;
    } else {
      this.growlMsg.push({ severity: 'error', summary: buyStockResp.message, detail: '' });
      this.stockTableData[index].disabledBuy = false;
    }
  }

  private sellStock(index: number) {
    this.growlMsg = [];
    // Below code to be uncommented when making service call
    // this.stockRendererService.getStock().subscribe((sellStockResp) => {
    //   if (sellStockResp.result === UIConstants.SUCCESS
    //     && sellStockResp.status_code === UIConstants.STATUS_CODE) {
    //     this.growlMsg = sellStockResp.message;
    //   }
    // });

    // loading data from mock json, sellStock.json
    const sellStockResp = this.stockRendererService.sellStock();
    if (sellStockResp.result === UIConstants.SUCCESS
      && sellStockResp.status_code === UIConstants.STATUS_CODE) {
      this.growlMsg.push({ severity: 'success', summary: sellStockResp.message, detail: 'Order ID: ' + sellStockResp.data.order_id });
      this.stockTableData[index].disabledSell = true;
    } else {
      this.growlMsg.push({ severity: 'error', summary: sellStockResp.message, detail: '' });
      this.stockTableData[index].disabledSell = false;
    }
  }

  private openChart(data) {
    const URL = 'https://kite.zerodha.com/chart/ext/ciq/NSE/';
    let siteURL = URL
      + data.stock_name
      + '/'
      + data.stock_instrument;
    window.open("" + siteURL, '_blank');
  }
}
