
import * as request from "request";
//import { logger } from "../logger";

const CRYPTO_API = "https://api.binance.com/api/v1/klines?symbol=";

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
    const url = api + symbol +"USDT&interval=1d";

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
		
        //
        console.dir("ooops");
		console.dir(response.body);
    });
}

 