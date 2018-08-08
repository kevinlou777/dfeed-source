
import * as request from "request";
//import { logger } from "../logger";

const CRYPTO_API = "https://bittrex.com/api/v1.1/public/getticker?market=USD-";
//const CRYPTO_API = "https://bittrex.com/api/v1.1/public/getmarketsummary?market=USD-";
// https://support.bittrex.com/hc/en-us/articles/115003723911-Developer-s-Guide-API
//

export class DataSourceBITTREX {
    pollInterval = 60;
    cryptoSymbols = ["BTC", "ETH", "BCH", "LTC"];

    public start() { 

        for (let i = 0; i < this.cryptoSymbols.length; i++) {
            setInterval(() => {
                symbolWorker(this.cryptoSymbols[i], CRYPTO_API);
            }, this.pollInterval * 200);
        }
    }
}

function symbolWorker(symbol: string, api: string) {
    const url = api + symbol;

    request(url, (error: any, response: request.Response, body: any) => {
        if (error) {
            //logger.error({message: "Cannot get symbol data for: " + symbol, error: error});
            return;
        }

        if (response && response.statusCode !== 200) {
           // logger.error({ message: "Cannot get symbol data for: " + symbol, statusCode: response.statusCode });
            return;
        } 
		//
       processData(response.body, symbol);
 
    });
}

function processData(apiResult: string, symbol: string) { 
    var jsonObj = JSON.parse(apiResult);
    if (jsonObj.result) {
        const symbolData: any = {
            value: {
                timestamp: new Date().getTime(),
                price: jsonObj.result.Last,
                volume: "",
                type: "buy",
                symbol: symbol
            }
        };

        // Send it to kafka
        console.dir(JSON.stringify(symbolData));
    } 
    else {
        //log error
    }
}