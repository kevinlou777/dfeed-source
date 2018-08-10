# CRYPTOCURRENCY #

## Coinbase ## 
Websocket Feed: https://docs.pro.coinbase.com/#websocket-feed   <br>
Node Library: https://github.com/coinbase/gdax-node  <br>

Coinbase has a REST API but only provides very limited request options. There is a Node.js library we can use. Here is an examploe:
```
const GDAX = require('gdax');
 
const publicClient = new GDAX.PublicClient();

const callback = (error, response, data) => {
    if (error)
        return console.dir(error);
    return console.dir(data);
}

publicClient.getProductTicker(BTC-USD, callback);
```
Return JSON object:
```
{ trade_id: 6539398,
  price: '610.01000000',
  size: '0.07831207',
  bid: '610',
  ask: '610.01',
  volume: '14226.94254497',
  time: '2018-08-10T01:41:24.242000Z' }
  ```
  
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

Example:<br>

https://bittrex.com/api/v1.1/public/getticker?market=USD-BTC
```
{
  "success": true,
  "message": "",
  "result": {
    "Bid": 6422.60000000,
    "Ask": 6475.00000000,
    "Last": 6475.00000000
  }
}
```
https://bittrex.com/api/v1.1/public/getmarketsummary?market=USD-BTC
```
{
  "success": true,
  "message": "",
  "result": [
    {
      "MarketName": "USD-BTC",
      "High": 6550.00000000,
      "Low": 6150.00000000,
      "Volume": 115.63218732,
      "Last": 6475.00000000,
      "BaseVolume": 728882.75359400,
      "TimeStamp": "2018-08-09T15:47:18.253",
      "Bid": 6422.60000000,
      "Ask": 6475.00000000,
      "OpenBuyOrders": 171,
      "OpenSellOrders": 113,
      "PrevDay": 6460.49000000,
      "Created": "2018-05-31T13:24:40.77"
    }
  ]
}
```

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
**API Limit - 1200 per minute (note it is measured by "weight" of the request.** <br>
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

# STOCK #

# iextrading.com #

API Reference: https://iextrading.com/developer/docs/ <br>

Example <br>
https://api.iextrading.com/1.0/stock/aapl/quote
```
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "primaryExchange": "Nasdaq Global Select",
  "sector": "Technology",
  "calculationPrice": "tops",
  "open": 207.5,
  "openTime": 1533821400756,
  "close": 207.25,
  "closeTime": 1533758400500,
  "high": 209.59,
  "low": 207.2,
  "latestPrice": 209.5,
  "latestSource": "IEX real time price",
  "latestTime": "1:04:48 PM",
  "latestUpdate": 1533834288340,
  "latestVolume": 14497513,
  "iexRealtimePrice": 209.5,
  "iexRealtimeSize": 100,
  "iexLastUpdated": 1533834288340,
  "delayedPrice": 209.35,
  "delayedPriceTime": 1533833404580,
  "extendedPrice": 209.5,
  "extendedChange": 0,
  "extendedChangePercent": 0,
  "extendedPriceTime": 1533834288340,
  "previousClose": 207.25,
  "change": 2.25,
  "changePercent": 1.086,
  "iexMarketPercent": 2.453,
  "iexVolume": 355624,
  "avgTotalVolume": 23559148,
  "iexBidPrice": 209.48,
  "iexBidSize": 100,
  "iexAskPrice": 209.59,
  "iexAskSize": 250,
  "marketCap": 1011869497000,
  "peRatio": 20.22,
  "week52High": 209.5,
  "week52Low": 149.16,
  "ytdChange": 22.354684008039722
}
```

IEX also provides data feed for cryptocurreny. <br>
Example: <br>
https://api.iextrading.com/1.0/stock/market/crypto
```
[
  {
    "symbol": "BTCUSDT",
    "companyName": "Bitcoin USD",
    "primaryExchange": "crypto",
    "sector": "cryptocurrency",
    "calculationPrice": "realtime",
    "open": 6255,
    "openTime": 1533748460454,
    "close": 6329.26734044,
    "closeTime": 1533834860454,
    "high": 6550,
    "low": 6123,
    "latestPrice": 6453.88,
    "latestSource": "Real time price",
    "latestTime": "1:14:20 PM",
    "latestUpdate": 1533834860454,
    "latestVolume": 53099.322378,
    "iexRealtimePrice": null,
    "iexRealtimeSize": null,
    "iexLastUpdated": null,
    "delayedPrice": null,
    "delayedPriceTime": null,
    "extendedPrice": null,
    "extendedChange": null,
    "extendedChangePercent": null,
    "extendedPriceTime": null,
    "previousClose": 6257.89,
    "change": 198.88,
    "changePercent": 0.0318,
    "iexMarketPercent": null,
    "iexVolume": null,
    "avgTotalVolume": null,
    "iexBidPrice": null,
    "iexBidSize": null,
    "iexAskPrice": null,
    "iexAskSize": null,
    "marketCap": null,
    "peRatio": null,
    "week52High": null,
    "week52Low": null,
    "ytdChange": null,
    "bidPrice": 6449.5,
    "bidSize": 0.123956,
    "askPrice": 6453.88,
    "askSize": 0.112055
  },
  ...
  ]
```




