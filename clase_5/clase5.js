"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese la base: ");
var exponent = readlineSync.questionInt("Ingrese el exponente: ");
function calculatePowerOfaNumber(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    if (exponent == 0) {
        result = 1;
    }
    return result;
}
if (exponent < 0) {
    console.log("El exponente ingresado no es valido");
}
else {
    console.log("El resultado es: ", calculatePowerOfaNumber(base, exponent));
}
