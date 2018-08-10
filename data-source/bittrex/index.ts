
import * as request from "request";
//import { logger } from "../logger";

const CRYPTO_API = "https://bittrex.com/api/v1.1/public/getmarketsummary?market=USD-"; 

export class DataSourceBITTREX {
    pollInterval = 60;
    //cryptoSymbols = ["BTC", "ETH", "BCH", "LTC"];

    //Currently only BTC/USD and ETH/USD are supported pairs
    cryptoSymbols = ["BTC", "ETH"];

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
            console.dir("Cannot get symbol data for: " + symbol);
            return;
        }

        if (response && response.statusCode !== 200) {
           // logger.error({ message: "Cannot get symbol data for: " + symbol, statusCode: response.statusCode });
           console.dir("Cannot get symbosssl data for: " + symbol);

            return;
        } 
		//
       processData(response.body, symbol);
 
    });
}

function processData(apiResult: string, symbol: string) { 
    var json = JSON.parse(apiResult);
    if (json.success && json.result) {
        const symbolData: any = {
            value: {
                timestamp: json.result.TimeStamp,
                price: json.result.Last,
                volume: json.result.Volume,
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