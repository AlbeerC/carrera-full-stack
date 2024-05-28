"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
//Implemente un método llamado “multiplicarArreglo” que recibe como parámetros tres arreglos Enteros del mismo tamaño
// Los dos primeros arreglos contienen los números que se quieren multiplicar
//El tercer arreglo almacena el cálculo de la multiplicación de cada posición de los dos arreglos
// Utilice este método para multiplicar los siguientes cuatro arreglos de tres elementos 
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [];
function multiplicarArrays(ar1, ar2, ar3) {
    for (var i = 0; i <= ar1.length - 1; i++) {
        ar3[i] = ar1[i] * ar2[i];
    }
    return ar3;
}
console.log(multiplicarArrays(array1, array2, array3));
// El jardín infantil necesita un programa para poder asignar cursos a las aulas
// Se cuentan con tres aulas: Azul, Verde y Amarilla. Cada aula cuenta con una capacidad diferente (es decir, un número de bancos)
// La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
//Dado un número de infantes ingresado por el usuario, el programa deberá determinar el aula que minimice la cantidad de bancos vacíos
// La salida del algoritmo es el color que identifica al aula asignada
function asignarAula() {
    var aulaAzul = 40;
    var aulaVerde = 35;
    var aulaAmarilla = 30;
    var cantidad = readlineSync.questionInt("Ingrese la cantidad de alumnos del aula: ");
    if (cantidad <= aulaAzul && cantidad > aulaVerde) {
        return "Aula azul";
    }
    else if (cantidad <= aulaVerde && cantidad > aulaAmarilla) {
        return "Aula verde";
    }
    else if (cantidad <= aulaAmarilla) {
        return "Aula amarilla";
    }
    else {
        return ("Error: El numero ingresado no es válido o supera la cantidad de asientos de las aulas");
    }
}
console.log(asignarAula());
