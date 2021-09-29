import { Component, OnInit } from '@angular/core';
import { StockStatusService } from '../../service/stock-status.service';
import { UIConstants } from '../../constants/ui.constants'

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.scss']
})
export class StockStatusComponent implements OnInit {
  gridOptions: any = {
    defaultColDef: {
      headerClass: "header-class",
      width: 70, cellStyle: { border: '1px solid' }
    }
  }
  // data = [
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:15"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:20"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:25"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:30"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:35"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:40"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:45"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:50"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "09:55"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:00"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:05"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:10"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:15"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:20"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:25"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:30"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:35"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:40"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:45"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:50"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "10:55"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:00"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:05"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:10"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:15"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:20"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:25"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:30"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:35"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:40"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:45"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:50"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "11:55"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:00"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:05"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:10"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:15"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:20"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:25"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:30"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:35"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:40"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:45"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:50"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "12:55"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:00"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:05"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:10"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:15"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:20"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:25"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:30"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:35"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:40"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:45"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:50"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "13:55"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:00"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:05"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:10"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:15"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:20"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:25"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:30"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:35"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:40"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:45"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:50"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "14:55"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "15:00"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "15:05"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "15:10"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "15:15"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "15:20"
  //   },
  //   {
  //     "isCurrentTime": false,
  //     "time": "15:25"
  //   }
  // ];
  columnDefs = [];
  // rowData = [];
  // rowData = [{
  //   "stock_name": "ABC",
  //   "time_09:15": "red",
  //   "time_09:20": ""
  // },
  // {
  //   "stock_name": "XYZ",
  //   "time_09:15": "",
  //   "time_09:20": "green"
  // }];
  rowData = [];
  newVal: any = {};
  mainArr = [];

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
          width: 70,
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
