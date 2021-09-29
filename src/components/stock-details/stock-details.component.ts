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
  timeList: any = [];
  time: any = [];
  selectedTime;
  inProgress: boolean = false;

  constructor(private stockRendererService: StockRendererService) { }

  ngOnInit() {
    this.inProgress = true;
    this.stockTableHeaders = UIConstants.STOCK_TABLE_HEADERS;
    this.refresh = UIConstants.LAST_REFRESH;
    this.fetchStockDetails();
    this.fetchTime();
  }

  private fetchStockDetails() {
    this.inProgress = true;
    this.growlMsg = [];
    // Below code to be uncommented when making service call
    // this.stockRendererService.getStock().subscribe((data:any) => {
    //   if (data.result === UIConstants.SUCCESS
    //     && data.status_code === UIConstants.STATUS_CODE) {
    //     this.inProgress = false;
    //     this.stockTimeStamp = data.time_stamp;
    //     this.stockTableData = data.data;
    //     this.stockTableData.forEach((val, i) => {
    //       val.index = i;
    //       val.disableBuy = false;
    //       val.disableSell = false;
    //     });
    //   } else {
    //     this.inProgress = false;
    //     this.growlMsg.push({
    //       severity: 'error',
    //       summary: 'Error occured while loading the stocks, please try again',
    //       detail: ''
    //     });
    //   }
    // });

    // loading data from mock json, stockDetails.json
    const data:any = this.stockRendererService.getStock();
    if (data.result === UIConstants.SUCCESS
      && data.status_code === UIConstants.STATUS_CODE) {
      this.inProgress = false;
      this.stockTimeStamp = data.time_stamp;
      this.stockTableData = data.data;
      this.stockTableData.forEach((val, i) => {
        val.index = i;
        val.disableBuy = false;
        val.disableSell = false;
      });
    } else {
      this.inProgress = false;
      this.growlMsg.push({
        severity: 'error',
        summary: 'Error occured while loading the stocks, please try again',
        detail: ''
      });
    }
  }

  private fetchTime() {
    this.timeList = this.stockRendererService.getTime().subscribe((data:any) => {
      if (data.result === UIConstants.SUCCESS &&
        data.status_code === UIConstants.STATUS_CODE) {
        this.time = [];
        let aTime: any = DropDown;
        // console.log('time-> ', this.time);
        data.data.forEach(item => {
          aTime = {} as DropDown;
          // console.log('time-> ', item);
          aTime.value = item,
            aTime.label = item
          // console.log('aTime-> ', aTime)
          this.time.push(aTime);
          // console.log('a-> ', this.time)
        });
        // this.time = timeArray;
        // console.log('a-> ', this.time)
      }
    });    
  }

  private onTimeChange(event) {
    this.selectedTime = event.value;
    const timedStock = this.stockRendererService.getTimedStock(this.selectedTime).subscribe((data:any) => {
      if (data.result === UIConstants.SUCCESS
        && data.status_code === UIConstants.STATUS_CODE) {
        this.inProgress = false;
        this.stockTimeStamp = data.time_stamp;
        this.stockTableData = data.data;
        this.stockTableData.forEach((val, i) => {
          val.index = i;
          val.disableBuy = false;
          val.disableSell = false;
        });
      } else {
        this.inProgress = false;
        this.growlMsg.push({
          severity: 'error',
          summary: 'Error occured while loading the stocks, please try again',
          detail: ''
        });
      }
    });
  }

  private buyStock(stock) {
    this.inProgress = true;
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
      stock.disableBuy = true;
      this.inProgress = false;
    } else {
      this.growlMsg.push({ severity: 'error', summary: buyStockResp.message, detail: '' });
      stock.disableBuy = false;
    }
  }

  private sellStock(stock) {
    this.inProgress = true;
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
      stock.disableSell = true;
      this.inProgress = false;
    } else {
      this.growlMsg.push({ severity: 'error', summary: sellStockResp.message, detail: '' });
      stock.disableSell = false;
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

  private openFutureChart(data) {
    console.log(data);
    const URL = 'https://kite.zerodha.com/chart/ext/ciq/NSE/';
    let siteURL = URL
      + data.future_name
      + '/'
      + data.future_instrument;
    window.open("" + siteURL, '_blank');
  }
}

export class DropDown {
  label?: string;
  value?: string;
}
