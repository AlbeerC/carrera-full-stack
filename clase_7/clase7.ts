import * as readlineSync from 'readline-sync';

/* let mensaje: string = "Hola global"

ambitoVariables()

function ambitoVariables() {
    let mensaje: string
    mensaje = "Hola mundo"
    console.log(mensaje)
}

console.log(mensaje);
 */

let monthsArray : string [] = new Array (12)

monthsArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

const insertNumber = readlineSync.questionInt("Ingrese el numero del mes: ")

const findMonth = monthsArray[insertNumber - 1]

console.log(findMonth)