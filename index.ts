import { DataSourceGDAX } from "./data-source/gdax";
import { DataSourceCEXIO } from "./data-source/cexio";
import { DataSourceBITTREX } from "./data-source/bittrex";
import { DataSourceBINANCE } from "./data-source/binance";
import { DataSourceIEX } from "./data-source/iex";
import { DataSourceOKEX } from "./data-source/okex";

const dataSourceGDAX = new DataSourceGDAX();
const dataSourceCEXIO = new DataSourceCEXIO();
const dataSourceBITTREX = new DataSourceBITTREX();
const dataSourceBINANCE = new DataSourceBINANCE();
const dataSourceIEX = new DataSourceIEX();
const dataSourceOKEX = new DataSourceOKEX();
//dataSourceGDAX.start();
//dataSourceCEXIO.start();
//dataSourceBITTREX.start();
//dataSourceBINANCE.start();
//dataSourceIEX.start();
dataSourceOKEX.start();
