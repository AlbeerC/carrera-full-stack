import * as readlineSync from 'readline-sync';


/* const initialPrice = readlineSync.questionInt('Ingrese el precio del producto: '); 
const discount: number = initialPrice * 0.1
const finalPrice: number = initialPrice - discount

console.log('El precio final es: ' + finalPrice); */

const firstNum = readlineSync.questionInt('Ingrese el primer numero: ')
const secondNum = readlineSync.questionInt('Ingrese el segundo numero: ')
const thirdNum = readlineSync.questionInt('Ingrese el tercer numero: ')

if (firstNum > secondNum && firstNum > thirdNum) {
    console.log('El primer número es el mayor')
} else if (secondNum > firstNum && secondNum > thirdNum) {
    console.log('El segundo número es el mayor')
} else {
    console.log('El tercer número es el mayor')
}