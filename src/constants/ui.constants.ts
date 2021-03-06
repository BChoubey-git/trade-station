export class UIConstants {
    public static TITLE = 'TradeStation';
    public static SUCCESS = 'success';
    public static STATUS_CODE = 200;
    public static LAST_REFRESH = 'Last Refresh';
    public static redirectURL = 'https://kite.zerodha.com/chart/ext/ciq/NSE/';
    public static STOCK_TABLE_HEADERS = [
        { field: 'stock_name', header: 'Stock' },
        { field: 'sector_name', header: 'Sector' },
        { field: 'margin', header: 'Margin(M)' },
        { field: 'quantity', header: 'Quantity(Q)' },
        { field: 'mps', header: 'MPS' },
        { field: 'buyFuture', header: 'Buy Future' },
        { field: 'sellFuture', header: 'Sell Future' },
        { field: 'viewChart', header: 'View Chart' },
        { field: 'viewFutureChart', header: 'View Future Chart' }
    ];
}