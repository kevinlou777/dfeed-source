const GDAX = require('gdax');
//import * as GTT from 'gdax-trading-toolkit';
//import { GDAXFeed } from "gdax-trading-toolkit/build/src/exchanges"

const publicClient = new GDAX.PublicClient();

const callback = (error, response, data) => {
    if (error)
        return console.dir(error);
    return console.dir(data);
}

export class DataSourceGDAX {
    pollInterval = 60;
    cryptoSymbols = ["BTC-USD", "ETH-USD", "BCH-USD", "LTC-USD"];

    public start() { 

        for (let i = 0; i < this.cryptoSymbols.length; i++) {
            setInterval(() => {
 				publicClient.getProductTicker(this.cryptoSymbols[i], callback);
            }, this.pollInterval * 200);
        }
    }
 
	
}