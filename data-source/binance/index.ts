
import * as request from "request";
//import { logger } from "../logger";

const CRYPTO_API = "https://api.binance.com/api/v1/ticker/24hr?symbol=";

export class DataSourceBINANCE {
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
    var binanceSymbol;
    if (symbol == "BCH") {
        binanceSymbol = "BCC";
    }
    else {
        binanceSymbol = symbol;
    }
    const url = api + binanceSymbol +"USDT";

    request(url, (error: any, response: request.Response, body: any) => {
        if (error) {
            //logger.error({message: "Cannot get symbol data for: " + symbol, error: error});
            console.dir("ooops  111111" + url);
            return;
        }

        if (response && response.statusCode !== 200) {
           // logger.error({ message: "Cannot get symbol data for: " + symbol, statusCode: response.statusCode });
           console.dir("ooops  2222222" + url);
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
                timestamp: new Date().getTime(),
                price: json.lastPrice,
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
 