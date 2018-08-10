
import * as request from "request";
//import { logger } from "../logger";

const API_URL = "https://api.iextrading.com/1.0/stock/"; 

export class DataSourceIEX {
    pollInterval = 60;
    stockSymbols = ["AAPL", "MSFT", "BAC" ];
    cryptoSymbols = ["BTC", "ETH", "BCH", "LTC"];
 
    public start() { 
        for (let i = 0; i < this.stockSymbols.length; i++) {
            setInterval(() => {
                symbolWorkerStock(this.stockSymbols[i], API_URL, "quote");
            }, this.pollInterval * 200);
        } 
    }
}

function symbolWorkerStock(symbol: string, api: string, suffix: string) {
    const url = api + symbol + "/" + suffix;

    request(url, (error: any, response: request.Response, body: any) => {
        if (error) {
            //logger.error({message: "Cannot get symbol data for: " + symbol, error: error});
            console.dir("Cannot get symbol data for: " + symbol);
            return;
        }

        if (response && response.statusCode !== 200) {
           // logger.error({ message: "Cannot get symbol data for: " + symbol, statusCode: response.statusCode });
           console.dir("Cannot get symbosssl data for: " + symbol);

            return;
        } 
       processData(response.body, symbol);
 
    });
}

function processData(apiResult: string, symbol: string) { 
    var json = JSON.parse(apiResult);
    if (json) {
        const symbolData: any = {
            value: {
                timestamp: json.latestUpdate,
                price: json.latestPrice,
                volume: json.latestVolume,
                type: "buy",
                symbol: symbol
            }
        };

        // Send it to kafka
        console.dir(JSON.stringify(symbolData));
    } 
    else {
        console.dir("Error get symbol data for: " + symbol);

        //log error
    }
}