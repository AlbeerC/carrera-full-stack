import * as readlineSync from 'readline-sync';


//Implemente un método llamado “multiplicarArreglo” que recibe como parámetros tres arreglos Enteros del mismo tamaño
// Los dos primeros arreglos contienen los números que se quieren multiplicar
//El tercer arreglo almacena el cálculo de la multiplicación de cada posición de los dos arreglos
// Utilice este método para multiplicar los siguientes cuatro arreglos de tres elementos 

const array1: number[] = [1, 2, 3]
const array2: number[] = [4, 5, 6]
const array3: number[] = []

function multiplicarArrays (ar1: number[], ar2: number[], ar3: number[]) {

    for (let i = 0; i <= ar1.length -1; i++) {
        ar3[i] = ar1[i] * ar2[i]
    }

    return ar3
}

console.log(multiplicarArrays(array1, array2, array3))


// El jardín infantil necesita un programa para poder asignar cursos a las aulas
// Se cuentan con tres aulas: Azul, Verde y Amarilla. Cada aula cuenta con una capacidad diferente (es decir, un número de bancos)
// La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
//Dado un número de infantes ingresado por el usuario, el programa deberá determinar el aula que minimice la cantidad de bancos vacíos
// La salida del algoritmo es el color que identifica al aula asignada

function asignarAula () {
    const aulaAzul: number = 40
    const aulaVerde: number = 35
    const aulaAmarilla: number = 30
    const cantidad: number = readlineSync.questionInt("Ingrese la cantidad de alumnos del aula: ")

    if (cantidad <= aulaAzul && cantidad > aulaVerde) {
        return "Aula azul"
    } else if (cantidad <= aulaVerde && cantidad > aulaAmarilla){
        return "Aula verde"
    } else if (cantidad <= aulaAmarilla) {
        return "Aula amarilla"
    } else {
        return ("Error: El numero ingresado no es válido o supera la cantidad de asientos de las aulas")
    }
}

console.log(asignarAula())