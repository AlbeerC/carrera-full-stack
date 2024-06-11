import * as readlineSync from 'readline-sync';

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


/* const mayorNumero: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16, 34, 3, 121]
const array2: number[] = [3, 6, 34, 67, 3, 6, 342, 6]
const array3: number[] = [7, 12, 90, 5, 55, 8]


function encontrarMayorEnArray (array: number[]): number {
    
    let nroMayor: number = array[0]

    for (let indice = 1; indice < array.length; indice++) {

        if (array[indice] > nroMayor) {
            nroMayor = array[indice]
        }
    }

    return nroMayor
}

console.log(encontrarMayorEnArray(mayorNumero))


function parimpar(numero: number): string {

    if (numero % 2 == 0) {
        return "par"

    } else {
        return "impar"
    }
}

console.log(parimpar(encontrarMayorEnArray(mayorNumero))) */


// Crea una funcion que tome un arreglo de numeros como parametro y devuelva el promedio de los elementos del arreglo

/* const arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arreglo2: number[] = [2, 56, 6, 70, 80, 34, 21, 90, 13, 1] */

/* function promedio(arreglo: number[]) {
    let acumulador: number = 0;

    for (let i = 0; i < arreglo.length; i++) {
        acumulador += arreglo[i] 
    }

    const promedioDeElementos: number = acumulador / arreglo.length

    console.log("El total de la suma del arreglo es: ", acumulador)
    console.log("El promedio es: ", promedioDeElementos);
}

promedio(arreglo)
promedio(arreglo2) */



/* function encontrarPares (array: number[]): number {
    let acumulador: number = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            acumulador++
        }
    }

    return acumulador
}

console.log(encontrarPares(arreglo))
console.log(encontrarPares(arreglo2)) */



/* const arrayVeces: number[] = [1, 4, 60, 45, 25, 70, 47, 21, 4, 9, 11, 128, 4, 12]

function encontrarVeces (array: number[], elemento: number) {
    let acumulador: number = 0

    for (let i = 0; i < array.length; i++) {
        if (elemento === array[i]) {
            acumulador++
        }
    }

    console.log(`El número ${elemento} se encuentra repetido ${acumulador} veces en el array`)
}

encontrarVeces(arrayVeces, 4) */


/* let arreglo:number[]=[2, 5, 7, 12, 13, 15, 11, 14, 17]

let arregloNumPrimos:number[]= [];

function parametroArregloNum (array:number[]) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 2; i <= Math.sqrt(array[i]); j++) {
            if (i % j !== 0) {
                console.log("es primo")
            } else {
                console.log("no es primo")
            }
        }
    }
}

parametroArregloNum(arreglo) */

/* const arreglo = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arregloNumPrimos: number[] = [];

function esPrimo(numero: number): boolean {
    if (numero <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function parametroArregloNum(array: number[], arrayPrimos: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        if (esPrimo(array[i])) {
            arrayPrimos.push(array[i]);
        }
    }

    return arrayPrimos;
}

console.log(parametroArregloNum(arreglo, arregloNumPrimos));
 */


//Escribe una funcion que reciba como parametros de numeros y un valor x  y devuelva la multiplicacion de todos los elementos del arreglo que sean mayores a x  

/* const arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    

function multiplicarArreglo (array: number[], x: number): number {
    let acumulador: number = 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > x) {
            acumulador *= array[i]
        }
    }

    return acumulador
}

console.log(multiplicarArreglo(arreglo, 5))  */



let stringQuince: string="Cree un string de al menos quince caracteres";

let stringPasadoAMayuscula= stringQuince.toUpperCase();

let CantidadLetraA:number=0;
let CantidadLetraE:number=0;
let CantidadLetraO:number=0;

let creeUnArregloDeTresElementos:number[]=[0, 0, 0]


for (let i = 0; i < stringPasadoAMayuscula.length; i++) {
    if (stringPasadoAMayuscula[i] == "A") {
       creeUnArregloDeTresElementos[0] ++



    }else if (stringPasadoAMayuscula[i] == "E")
        creeUnArregloDeTresElementos[1]++;

    else (stringPasadoAMayuscula[i] == "O")
            creeUnArregloDeTresElementos[2]++;

        }

 console.log(creeUnArregloDeTresElementos);