"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
/* let mensaje: string = "Hola global"

ambitoVariables()

function ambitoVariables() {
    let mensaje: string
    mensaje = "Hola mundo"
    console.log(mensaje)
}

console.log(mensaje);
 */
var months = new Array(12);
months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var insertNumber = readlineSync.questionInt("Ingrese el numero del mes: ");
var findMonth = months[insertNumber - 1];
console.log(findMonth);
