import * as readlineSync from 'readline-sync';
/* Desarrolle un algoritmo que permita loguearse (registrarse) a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que es sistema tiene registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave claveJuan

const user: string = readlineSync.question("Ingrese su nombre de usuario: ")
const password: string = readlineSync.question("Ingrese su contraseña: ")

if (user === "Juan" && password === "claveJuan") {
    console.log("Ingreso correcto")
} else {
    console.log("Nombre de usuario o contraseña incorrecto")
}
*/

/* Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar.
• Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer puesto medalla de bronce. En caso que quede en otra posición se entrega certificado de participación 

const position: number = readlineSync.questionInt("Ingrese el puesto: ")

if (position === 1) {
    console.log("Medalla de oro");
} else if (position === 2) {
    console.log("Medalla de plata");
} else if (position === 3) {
    console.log("Medalla de bronce");
} else {
    console.log("Certificado de participacion");
}
*/

//Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras
//•Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, indicados por el usuario, determine  si el cliente tiene descuento o no 

/* const price: number = readlineSync.questionFloat("Ingrese el precio: ")
const quantity: number = readlineSync.questionFloat("Ingrese la cantidad: ")
const month: string = readlineSync.question("Ingrese el mes: ")
const discount = 15

if (month === "Octubre" || month === "octubre") {
    console.log("El precio final es: ", (price * quantity) -  (price * quantity * discount / 100))
} else {
    console.log("El precio final es: ", price * quantity)
} */



/* Una empresa desea premiar a sus empleados con un aumento de sueldo. Este aumento se ajusta a la siguiente tabla: 
Sueldo Actual | Sueldo con Aumento
0 - 15.000$ | 20%
15.001 - 20.000$ | 10%
20.001 - 25.000$ | 5%
Más de 25.000$ | No hay aumento
Desarrolle un algoritmo dado el salario actual de un empleado determine el aumento de sueldo a aplicar y se lo muestre


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
*/


/* Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos que hemos agotado todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa 

let failedAttempts = 0

for (let i = 0; i < 3; i++) {
    const password = readlineSync.question("Ingrese su contraseña: ")

    if (password === "eureka") {
        console.log("Ingreso correcto");
        break
    } else {
        console.log("Contraseña incorrecta");
        failedAttempts++    
    }

    if (failedAttempts === 3) {
        console.log("Has agotado los intentos");
    }
}
*/


/* let numero : number = 1
let multiploDos: number = 0
let multiploTres: number = 0

for (let i = 1; i <= 100; i++) {
    if (numero %  2 == multiploDos) {
        console.log("es multiplo de dos");
    } else if (numero % 2 == multiploTres) {
        console.log("es multiplo de 3");
        
    }
} */

// funciona abajo

/* 
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(`El número ${i} es múltiplo de dos o de tres`);
    }
} */


// Primero, con el while (true) el programa se va a ejecutar siempre hasta el break, que en este caso con un if hacemos que cuando el usuario ingrese una cadena vacía se corta el programa usando break;

while (true) {
    // El usuario ingresa el nombre del alumno
    const nombre = readlineSync.question('Ingrese el nombre del alumno (o una cadena vacía para terminar): ');

    // Si ingresa cadena vacía, se corta
    if (nombre === '') {
        break;
    }

    // Declaramos las constantes para que el usuario ingrese las notas por separado
    const notaPractica = readlineSync.questionFloat('Ingrese la nota de la parte práctica (0 a 10): ');
    const notaProblemas = readlineSync.questionFloat('Ingrese la nota de la parte de problemas (0 a 10): ');
    const notaTeorica = readlineSync.questionFloat('Ingrese la nota de la parte teórica (0 a 10): ');

    // Si alguna de las notas es menor a 1 o mayor a 10, mostramos mensaje de error y el programa vuelve a iniciarse desde el principio
    if (notaPractica < 0 || notaPractica > 10 || notaProblemas < 0 || notaProblemas > 10 || notaTeorica < 0 || notaTeorica > 10) {
        console.log('Error: Las notas deben estar entre 0 y 10. Continuando con el siguiente alumno...');
        continue;
    }

    // Calculamos la nota final sumando todas las notas, pero multiplicando cada una por el valor que dio la consigna (10%, 50% y 40%)
    const notaFinal = (notaPractica * 0.1) + (notaProblemas * 0.5) + (notaTeorica * 0.4);

    console.log(`Alumno: ${nombre}`);
    console.log(`Nota final: ${notaFinal}`);
}


// El usuario ingresa los dos números
const numero1 = readlineSync.questionInt('Ingrese el primer numero entero: ');
const numero2 = readlineSync.questionInt('Ingrese el segundo numero entero: ');

// Declaramos la variable que va a contener la suma de los números entre el primer numero ingresado y el segundo
let suma = 0;

// Empezamos el for desde el primer número ingresado, y lo terminamos con el segundo número ingresado
for (let i = numero1; i <= numero2; i++) {
    // En cada iteración, se va acumulando la suma de los números en la variable: suma
    suma += i;
}


console.log(`La suma de los números entre ${numero1} y ${numero2} es: ${suma}`);