import { Component, OnInit } from '@angular/core';
import { UIConstants } from '../../constants/ui.constants'

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
  stockTableHeaders: string[] = [];
  // hard coded data to be removed
  cars = [{
    stock: 'TCS',
    qty: 1
  },
  {
    stock: 'Infy',
    qty: 2
  }];
  constructor() { }

  ngOnInit() {
    this.stockTableHeaders = UIConstants.STOCK_TABLE_HEADERS;
  }

}
