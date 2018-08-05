import { DataSourceGDAX } from "./data-source/gdax";
import { DataSourceCEXIO } from "./data-source/cexio";
import { DataSourceBITTREX } from "./data-source/bittrex";
import { DataSourceBINANCE } from "./data-source/binance";

const dataSourceGDAX = new DataSourceGDAX();
const dataSourceCEXIO = new DataSourceCEXIO();
const dataSourceBITTREX = new DataSourceBITTREX();
const dataSourceBINANCE = new DataSourceBINANCE();
//dataSourceGDAX.start();
//dataSourceCEXIO.start();
//dataSourceBITTREX.start();
dataSourceBINANCE.start();
