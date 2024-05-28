"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var dim = readlineSync.questionInt("Ingrese la dimension del arreglo:");
var arreglo1 = new Array(dim);
var arreglo2 = new Array(dim);
var arreglo3 = new Array(dim);
function cargarArreglo1(arreglo1, dim) {
    var i = 0;
    for (var i_1 = 0; i_1 < dim; i_1++) {
        arreglo1[i_1] = Math.random[17];
    }
}
function cargarArreglo2(arreglo2, dim) {
    var i = 0;
    for (var i_2 = 0; i_2 < dim; i_2++) {
        arreglo2[i_2] = Math.random[17];
    }
}
function sumaDeArreglos(arreglo1, arreglo2, arreglo3, dim) {
    var i;
    for (var i_3 = 0; i_3 < dim; i_3++) {
        arreglo3[i_3] = arreglo1[i_3] + arreglo2[i_3];
        return arreglo3;
    }
}
function mostrarArreglo1(arreglo1, dim) {
    var linea = " - ";
    var i;
    for (var i_4 = 0; i_4 < dim; i_4++) {
        linea += arreglo1[i_4];
    }
    console.log(linea);
}
function mostrarArreglo2(arreglo2, dim) {
    var linea = " - ";
    var i;
    for (var i_5 = 0; i_5 < dim; i_5++) {
        linea += arreglo2[i_5];
    }
    console.log(linea);
}
function mostrarArreglo3(arreglo3, dim) {
    var linea = " - ";
    var i;
    for (var i_6 = 0; i_6 < dim; i_6++) {
        linea += arreglo3[i_6];
    }
    console.log(linea);
}
cargarArreglo1(arreglo1, dim);
mostrarArreglo1(arreglo1, dim);
cargarArreglo2(arreglo2, dim);
mostrarArreglo2(arreglo2, dim);
sumaDeArreglos(arreglo1, arreglo2, arreglo3, dim);
mostrarArreglo3(arreglo3, dim);
