"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var dim = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
var arreglo1 = new Array(dim);
var arreglo2 = new Array(dim);
var arreglo3 = [];
function cargarArreglo(arreglo, dim) {
    var i = 0;
    for (var i_1 = 0; i_1 < dim; i_1++) {
        arreglo[i_1] = Math.floor(Math.random() * 17);
    }
}
function sumaDeArreglos(arreglo1, arreglo2, arreglo3) {
    var i = 0;
    for (i = 0; i < arreglo1.length; i++) {
        arreglo3[i] = arreglo1[i] + arreglo2[i];
    }
    return arreglo3;
}
function mostrarArreglo(arreglo, dim) {
    var i;
    var linea = "";
    for (i = 0; i < dim; i++) {
        linea += "".concat(arreglo[i], " ");
    }
    console.log(linea);
}
cargarArreglo(arreglo1, dim);
mostrarArreglo(arreglo1, dim);
cargarArreglo(arreglo2, dim);
mostrarArreglo(arreglo2, dim);
sumaDeArreglos(arreglo1, arreglo2, arreglo3);
mostrarArreglo(arreglo3, dim);
