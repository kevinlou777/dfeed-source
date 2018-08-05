import { DataSourceGDAX } from "./data-source/gdax";
import { DataSourceCEXIO } from "./data-source/cexio";
import { DataSourceBITTREX } from "./data-source/bittrex";

const dataSourceGDAX = new DataSourceGDAX();
const dataSourceCEXIO = new DataSourceCEXIO();
const dataSourceBITTREX = new DataSourceBITTREX();
//dataSourceGDAX.start();
dataSourceCEXIO.start();
//dataSourceBITTREX.start();
