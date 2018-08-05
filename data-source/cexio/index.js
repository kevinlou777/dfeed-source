"use strict";
exports.__esModule = true;
var request = require("request");
//import { logger } from "../logger";
var CRYPTO_API = "https://cex.io/api/ticker";
var DataSourceCEXIO = /** @class */ (function () {
    function DataSourceCEXIO() {
        this.pollInterval = 60;
        this.cryptoSymbols = ["BTC", "ETH", "BCH"];
    }
    // LTC was removed from CEX.IO because of the low activities in March
    DataSourceCEXIO.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            setInterval(function () {
                symbolWorker(_this.cryptoSymbols[i], CRYPTO_API);
            }, this_1.pollInterval * 100);
        };
        var this_1 = this;
        for (var i = 0; i < this.cryptoSymbols.length; i++) {
            _loop_1(i);
        }
    };
    return DataSourceCEXIO;
}());
exports.DataSourceCEXIO = DataSourceCEXIO;
function symbolWorker(symbol, api) {
    var url = api + "/" + symbol + "/USD";
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
