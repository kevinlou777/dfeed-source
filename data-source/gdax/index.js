"use strict";
exports.__esModule = true;
var GDAX = require('gdax');
//import * as GTT from 'gdax-trading-toolkit';
//import { GDAXFeed } from "gdax-trading-toolkit/build/src/exchanges"
var publicClient = new GDAX.PublicClient();
var callback = function (error, response, data) {
    if (error)
        return console.dir(error);
    return console.dir(data);
};
var DataSourceGDAX = /** @class */ (function () {
    function DataSourceGDAX() {
        this.pollInterval = 60;
        this.cryptoSymbols = ["BTC-USD", "ETH-USD", "BCH-USD", "LTC-USD"];
    }
    DataSourceGDAX.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            setInterval(function () {
                publicClient.getProductTicker(_this.cryptoSymbols[i], callback);
            }, this_1.pollInterval * 200);
        };
        var this_1 = this;
        for (var i = 0; i < this.cryptoSymbols.length; i++) {
            _loop_1(i);
        }
    };
    return DataSourceGDAX;
}());
exports.DataSourceGDAX = DataSourceGDAX;
