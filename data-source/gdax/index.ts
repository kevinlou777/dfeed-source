const GDAX = require('gdax');
//import * as GTT from 'gdax-trading-toolkit';
//import { GDAXFeed } from "gdax-trading-toolkit/build/src/exchanges"

const publicClient = new GDAX.PublicClient();
var symbol;

const callback = (error, response, data) => {
    if (error) {
        return console.dir(error);
    }
    const symbolData: any = {
        value: {
            timestamp: new Date(data.time).getTime(),
            price: data.price,
            volume: data.volume,
            type: "buy",
            symbol: symbol
        }
    };
    console.dir(JSON.stringify(symbolData));
    return;
}

export class DataSourceGDAX {
    pollInterval = 60;
    cryptoSymbols = ["BTC", "ETH", "BCH", "LTC"];
    public start() { 
        for (let i = 0; i < this.cryptoSymbols.length; i++) {
            setInterval(() => {
                symbol = this.cryptoSymbols[i];    
                publicClient.getProductTicker(this.cryptoSymbols[i] + "-USD", callback);
            }, this.pollInterval * 200);            
        }
    }
}
 