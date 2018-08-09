# dfeed-source

## Coinbase ## 
Websocket Feed: https://docs.pro.coinbase.com/#websocket-feed   <br>
https://github.com/coinbase/gdax-node  <br>

## CEX.IO ##
CEX.IO offers trading cryptocurrency for fiat money, such as USD, EUR, GBP and RUB. <br>
REST API: https://cex.io/rest-api <br>
Realtime data websocket API: https://cex.io/websocket-api <br>
Example: https://github.com/matveyco/cex.io-api-node.js  <br>

### Tiker ###
https://cex.io/api/ticker/{symbol1}/{symbol2}

  | Name    	|  Type	    |                        Description |
  |-----------| ----------| -----------------------------------|
  | bid    | number      | Highest buy order     |
  | ask      | number        |  owest sell order       |
  | low    | string      | Last 24 hours price low     |
  | high      | string        | Last 24 hours price high       |
  | last    | string      | Last price     |
  | volume      | string        | Last 24 hours volume       |
  | volume30d    | string      | Last 30 days volume     |
  | timestamp      | string        |       |
   
 Example: <br>
 https://cex.io/api/ticker/BTC/USD
 ```
 {
  "timestamp": "1533824126",
  "low": "6121",
  "high": "6520",
  "last": "6467",
  "volume": "759.83628759",
  "volume30d": "12362.88254185",
  "bid": 6467.8,
  "ask": 6468
}
```
 
## bittrex ##
API document: https://support.bittrex.com/hc/en-us/articles/115003723911-Developer-s-Guide-API <br>
Example: https://github.com/ZhiweiWang/node-bittrex-api <br>

Accounts will be permitted to make a maximum of 60 API calls per minute, and calls after the limit will fail, with throttle settings automatically resetting at the start of the next minute.<br>
Note: Corporate and high-volume accounts may contact customer support for additional information to ensure that they may continue operating at an optimal level. 

## OKEX ##
https://www.okex.com/v2/spot/markets/index-tickers?limit=100000000<br>
API Document: https://github.com/okcoin-okex/API-docs-OKEx.com <br>
Example: https://github.com/ZhiweiWang/node-okex-api  <br>

## Binance ##
https://api.binance.com/api/v1/exchangeInfo<br>
REST API: https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md <br>
Ticker only return symbol name and price. <br>
24-hour ticker trtuens 24 hour price change statistics. 

Example: <br>
https://api.binance.com/api/v1/ticker/24hr?symbol=BTCUSDT
```
{
  "symbol": "BTCUSDT",
  "priceChange": "2.11000000",
  "priceChangePercent": "0.033",
  "weightedAvgPrice": "6315.19798999",
  "prevClosePrice": "6452.03000000",
  "lastPrice": "6450.00000000",
  "lastQty": "1.44855500",
  "bidPrice": "6448.84000000",
  "bidQty": "1.00000000",
  "askPrice": "6450.65000000",
  "askQty": "0.30181800",
  "openPrice": "6447.89000000",
  "highPrice": "6501.00000000",
  "lowPrice": "6123.00000000",
  "volume": "55664.13178100",
  "quoteVolume": "351530013.13772599",
  "openTime": 1533739404378,
  "closeTime": 1533825804378,
  "firstId": 61858310,
  "lastId": 62131594,
  "count": 273285
}
```
### API Limit - 1200 per minute (note it is measured by "weight" of the request. ### <br>
```
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "limit": 1200
    },
    {
      "rateLimitType": "ORDERS",
      "interval": "SECOND",
      "limit": 10
    },
    {
      "rateLimitType": "ORDERS",
      "interval": "DAY",
      "limit": 100000
    }
  ],
```

