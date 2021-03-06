import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchStockComponent } from '../components/search-stock/search-stock.component';
import { StockDetailsComponent } from '../components/stock-details/stock-details.component';
import { StockStatusComponent } from '../components/stock-status/stock-status.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    SearchStockComponent,
    StockDetailsComponent,
    StockStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    TabViewModule,
    TableModule,
    MessagesModule,
    ButtonModule,
    FormsModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
