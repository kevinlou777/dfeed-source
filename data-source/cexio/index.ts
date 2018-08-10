
import * as request from "request";
//import { logger } from "../logger";

const CRYPTO_API = "https://cex.io/api/ticker";

export class DataSourceCEXIO {
    pollInterval = 60;
    cryptoSymbols = ["BTC", "ETH", "BCH"];
	
	// LTC was removed from CEX.IO because of the low activities in March
	
    public start() { 

        for (let i = 0; i < this.cryptoSymbols.length; i++) {
            setInterval(() => {
                symbolWorker(this.cryptoSymbols[i], CRYPTO_API);
            }, this.pollInterval * 100);
        }
    }
}

function symbolWorker(symbol: string, api: string) {
    const url = api + "/" + symbol +"/USD";

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
    var json = JSON.parse(apiResult);
    if (json) {
        const symbolData: any = {
            value: {
                timestamp: json.timestamp,
                price: json.last,
                volume: json.volume,
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
 