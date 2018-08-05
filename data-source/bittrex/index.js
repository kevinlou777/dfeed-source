"use strict";
exports.__esModule = true;
var request = require("request");
//import { logger } from "../logger";
var CRYPTO_API = "https://bittrex.com/api/v1.1/public/getmarketsummary?market=USD-";
var DataSourceBITTREX = /** @class */ (function () {
    function DataSourceBITTREX() {
        this.pollInterval = 60;
        this.cryptoSymbols = ["BTC", "ETH", "BCH", "LTC"];
    }
    DataSourceBITTREX.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            setInterval(function () {
                symbolWorker(_this.cryptoSymbols[i], CRYPTO_API);
            }, this_1.pollInterval * 200);
        };
        var this_1 = this;
        for (var i = 0; i < this.cryptoSymbols.length; i++) {
            _loop_1(i);
        }
    };
    return DataSourceBITTREX;
}());
exports.DataSourceBITTREX = DataSourceBITTREX;
function symbolWorker(symbol, api) {
    var url = api + symbol;
    request(url, function (error, response, body) {
        if (error) {
            //logger.error({message: "Cannot get symbol data for: " + symbol, error: error});
            return;
        }
        if (response && response.statusCode !== 200) {
            // logger.error({ message: "Cannot get symbol data for: " + symbol, statusCode: response.statusCode });
            return;
        }
        //
        console.dir(response.body);
    });
}
