import { Component, OnInit } from '@angular/core';
import { UIConstants } from '../../constants/ui.constants'
import { StockRendererService } from '../../service/stock-renderer.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {
  stockTableHeaders: any[];
  cols: any[];
  stockTableData: any[];

  constructor(private stockRendererService: StockRendererService) { }

  ngOnInit() {
    this.stockTableHeaders = UIConstants.STOCK_TABLE_HEADERS;

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
      this.stockTableData = data.data;
    }
  }
}
