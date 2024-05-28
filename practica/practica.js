"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras
//•Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, determine  si el cliente tiene descuento o no 
/*
const price: number = readlineSync.questionFloat("Ingrese el precio: ")
const quantity: number = readlineSync.questionFloat("Ingrese la cantidad: ")
const month: string = readlineSync.question("Ingrese el mes: ")
const discount = 15

if (month === "Octubre" || month === "octubre") {
    console.log("El precio final es: ", (price * quantity) -  (price * quantity * discount / 100))
} else {
    console.log("El precio final es: ", price * quantity)
}


// Una empresa desea premiar a sus empleados con un aumento de sueldo. Este aumento se ajusta a la siguiente tabla:
// Sueldo Actual | Sueldo con Aumento
// 0 - 15.000$ | 20%
// 15.001 - 20.000$ | 10%
// 20.001 - 25.000$ | 5%
// Más de 25.000$ | No hay aumento
// Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a aplicar y se lo muestre


const salary: number = readlineSync.questionInt("Ingrese el sueldo: ")

if (salary > 0 && salary <= 15000) {
    console.log("El salario con aumento es: ", salary + (salary * 20 / 100));
} else if (salary > 15000 && salary <= 20000) {
    console.log("El salario con aumento es: ", salary + (salary * 10 / 100));
} else if (salary > 20000 && salary <= 25000) {
    console.log("El salario con aumento es: ", salary + (salary * 5 / 100));
} else {
    console.log("No hay aumento :( ");
}



// Mayor numero entre tres

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


// Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo
// • Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
// • Recuerde que la operación mod permite saber si el resto de una división es cero

function esMultiplo(numero: number, divisor: number): boolean {
    return numero % divisor === 0;
}

// Ejemplos de uso:
console.log(esMultiplo(10, 2)); // Devuelve true porque 10 es múltiplo de 2
console.log(esMultiplo(10, 3)); // Devuelve false porque 10 no es múltiplo de 3
console.log(esMultiplo(15, 5)); // Devuelve true porque 15 es múltiplo de 5



// • Leer valores del usuario hasta que introduzca un 0
// • El usuario puede introducir valores numéricos, tanto positivos como negativos
// • Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje de positivos respecto del total

let totalValores = 0
let valoresPositivos = 0

while (true) {
    const valor = readlineSync.questionInt("Ingrese un numero, (0 para terminar): ")

    if (valor === 0) {
        break;
    }

    totalValores++;

    if (valor > 0) {
        valoresPositivos++;
    }
}
const porcentajePositivos = (valoresPositivos / totalValores) * 100 || 0;

console.log("Cantidad de valores positivos: ", valoresPositivos)
console.log("Porcentaje de valores positivos respecto al total: ",  porcentajePositivos)


// Auto de carreras
// •En una prueba, un piloto tiene que completar 4 vueltas
// •Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
// •El programa debe retornar el tiempo total y el promedio de vuelta

const numeroVueltas = 4;
let tiempoTotal = 0;

for (let i = 1; i <= numeroVueltas; i++) {
    const tiempoVuelta = readlineSync.questionFloat(`Ingresa el tiempo de la vuelta ${i}: `);
    tiempoTotal += tiempoVuelta;
}

const tiempoPromedio = tiempoTotal / numeroVueltas;

console.log(`Tiempo total de las ${numeroVueltas} vueltas: ${tiempoTotal}`);
console.log(`Tiempo promedio por vuelta: ${tiempoPromedio}`);

*/
//Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras
//•Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, determine  si el cliente tiene descuento o no 
/* const precioUnitario: number = readlineSync.questionInt("Ingrese el precio unitario: ")
const cantidad: number = readlineSync.questionInt("Ingrese la cantidad: ")
const mes: string = readlineSync.question("Ingrese el mes: ")

if (mes == "octubre" || mes == "Octubre") {
    console.log("El precio final es: ", (precioUnitario * cantidad) - (precioUnitario * cantidad * 15 / 100));
} else if (mes == "septiembre") {
    console.log("El precio final es: ", (precioUnitario * cantidad) - (precioUnitario * cantidad * 20 / 100));
} else {
    console.log("no hay descuento");
}
 */
// Auto de carreras
// •En una prueba, un piloto tiene que completar 4 vueltas
// •Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
// •El programa debe retornar el tiempo total y el promedio de vuelta
/* let tiempoTotal: number = 0;
let promedioVuelta: number = 0;

for (let i = 1; i <= 4; i++) {
    const tiempoVuelta = readlineSync.questionFloat("Ingrese el tiempo de la vuelta: ")
    tiempoTotal += tiempoVuelta

    promedioVuelta = tiempoTotal / 4
}

console.log("El tiempo total es: ", tiempoTotal)
console.log("El promedio es: ", promedioVuelta) */
// Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según si el primer número que se indique como parámetro es múltiplo del segundo
// • Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
// • Recuerde que la operación mod permite saber si el resto de una división es cero
/* function esMultiplo (numero1: number, numero2: number): boolean {
    if (numero1 % numero2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(esMultiplo(10, 5))
console.log(esMultiplo(12, 4))
console.log(esMultiplo(18, 4)) */
// • Leer valores del usuario hasta que introduzca un 0
// • El usuario puede introducir valores numéricos, tanto positivos como negativos
// • Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje de positivos respecto del total
/* let cantidadTotal: number = 0;
let cantidadPositivos: number = 0;
let cantidadNegativos: number = 0;
let porcentajePositivos: number = 0;

while (true) {
    const valor = readlineSync.questionInt("Ingrese un número: (pulse 0 para salir): ")

    if (valor == 0) {
        break
    }

    cantidadTotal++

    if (valor > 0) {
        cantidadPositivos++
    } else if (valor < 0){
        cantidadNegativos++
    }
}

porcentajePositivos= (cantidadPositivos / cantidadTotal) * 100

console.log("La cantidad de numeros positivos es: ", cantidadPositivos);
console.log("La cantidad de numeros negativos es: ", cantidadNegativos);
console.log("El porcentaje de positivos respecto del total es: ", porcentajePositivos); */
// Clase 9 - Arreglos y métodos:
// Implemente un método llamado “multiplicarArreglo” que recibe como parámetros tres arreglos Enteros del mismo tamaño
// Los dos primeros arreglos contienen los números que se quieren multiplicar
// El tercer arreglo almacena el cálculo de la multiplicación de cada posición de los dos arreglos
// Utilice este método para multiplicar los siguientes cuatro arreglos de tres elementos 
/* const array1: number[] = [1, 2, 3, 21, 1, 5, 6]
const array2: number[] = [4, 5, 6, 15, 4, 11, 3]
const array3: number[] = []


function multiplicarArreglo (arr1: number[], arr2: number[], arr3: number[]): number[] {

    for (let i = 0; i < arr1.length; i++) {
        array3[i] = arr1[i] * arr2[i]
    }

    return array3
}

console.log(multiplicarArreglo(array1, array2, array3)) */
// Dado el siguiente arreglo: [4,7,9,3,1,45,67,23,29,78,11,16]
// Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
// Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el número es par o impar
var mayorNumero = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16, 34, 3, 121];
var array2 = [3, 6, 34, 67, 3, 6, 342, 6];
var array3 = [7, 12, 90, 5, 55, 8];
function encontrarMayorEnArray(array) {
    var nroMayor = array[0];
    for (var indice = 1; indice < array.length; indice++) {
        if (array[indice] > nroMayor) {
            nroMayor = array[indice];
        }
    }
    return nroMayor;
}
console.log(encontrarMayorEnArray(mayorNumero));
function parimpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    }
    else {
        return "impar";
    }
}
console.log(parimpar(encontrarMayorEnArray(mayorNumero)));
