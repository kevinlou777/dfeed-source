import { DataSourceGDAX } from "./data-source/gdax";
import { DataSourceCEXIO } from "./data-source/cexio";
import { DataSourceBITTREX } from "./data-source/bittrex";
import { DataSourceBINANCE } from "./data-source/binance";
import { DataSourceIEX } from "./data-source/iex";

const dataSourceGDAX = new DataSourceGDAX();
const dataSourceCEXIO = new DataSourceCEXIO();
const dataSourceBITTREX = new DataSourceBITTREX();
const dataSourceBINANCE = new DataSourceBINANCE();
const dataSourceIEX = new DataSourceIEX();
//dataSourceGDAX.start();
//dataSourceCEXIO.start();
//dataSourceBITTREX.start();
//dataSourceBINANCE.start();
dataSourceIEX.start();
