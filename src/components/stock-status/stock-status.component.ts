import { Component, OnInit } from '@angular/core';
import { StockStatusService } from '../../service/stock-status.service';
import { UIConstants } from '../../constants/ui.constants'

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.scss']
})
export class StockStatusComponent implements OnInit {
  gridOptions: any = {}
  columnDefs = [];
  rowData = [];
  newVal: any = {};

  constructor(private stockStatusService: StockStatusService) { }

  ngOnInit() {
    const stockStatus: any = this.stockStatusService.fetchStockStatus();
    if (stockStatus.result === UIConstants.SUCCESS && stockStatus.status_code === UIConstants.STATUS_CODE) {
      this.columnDefs.push({
        headerName: 'Stock',
        field: 'stock_name',
        pinned: 'left', resizable: true,
        width: 200
      });
      stockStatus.table_header.forEach(d => {
        this.columnDefs.push({
          headerName: d.time,
          field: d.time,
          width: 40,
          cellStyle: function (param) {
            return {
              'background-color': param.value,
              border: '1px solid black',
              color: param.value
            }
          }
        });
      });
      stockStatus.table_rows.forEach((val, i) => {
        this.newVal = {};
        val.data.forEach((value, ii) => {
          this.newVal.stock_name = val.stock_name;
          this.newVal[value.time] = value.color
        })
        this.rowData.push(this.newVal);
      });
    }
  }
}
