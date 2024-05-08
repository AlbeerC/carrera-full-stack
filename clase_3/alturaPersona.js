"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
/* const initialPrice = readlineSync.questionInt('Ingrese el precio del producto: ');
const discount: number = initialPrice * 0.1
const finalPrice: number = initialPrice - discount

console.log('El precio final es: ' + finalPrice); */
var firstNum = readlineSync.questionInt('Ingrese el primer número: ');
var secondNum = readlineSync.questionInt('Ingrese el segundo número: ');
var thirdNum = readlineSync.questionInt('Ingrese el tercer número: ');
if (firstNum > secondNum && firstNum > thirdNum) {
    console.log('El primer número es el mayor');
}
else if (secondNum > firstNum && secondNum > thirdNum) {
    console.log('El segundo número es el mayor');
}
else {
    console.log('El tercer número es el mayor');
}
