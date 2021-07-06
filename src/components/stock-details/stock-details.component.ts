import { Component, OnInit } from '@angular/core';
import { UIConstants } from '../../constants/ui.constants'

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
  stockTableHeaders: any[];
  cols: any[];
  // hard coded data to be removed
  stockTableData = [{
    stock_name: 'TCS',
    quantity: 1,
    sector_name: 'IT',
    margin: '',
    mps: '432'
  },
  {
    stock_name: 'Acc',
    quantity: 10,
    sector_name: 'Non-IT',
    margin: '88',
    mps: '123'
  },
  {
    stock_name: 'IRCTC',
    quantity: 1,
    sector_name: 'Non-IT',
    margin: '543',
    mps: ''
  },
  {
    stock_name: 'ICT',
    quantity: 2,
    sector_name: '',
    margin: '2345',
    mps: '54'
  },
  {
    stock_name: 'BTC',
    quantity: 12,
    sector_name: '',
    margin: '',
    mps: ''
  },
  {
    stock_name: 'DB',
    quantity: 1,
    sector_name: '',
    margin: '',
    mps: ''
  },
  {
    stock_name: 'Wipro',
    quantity: 1,
    sector_name: '',
    margin: '',
    mps: ''
  },
  {
    stock_name: 'Infy',
    quantity: 1,
    sector_name: '',
    margin: '',
    mps: ''
  }];
  constructor() { }

  ngOnInit() {
    this.stockTableHeaders = UIConstants.STOCK_TABLE_HEADERS;
  }
}
