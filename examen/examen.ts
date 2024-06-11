/* let texto: string = "aasasasasA"
let i = 0
let c = 0

while (i < texto.length) {
    if (texto[i] === "A") {
        c++
    }
    i++
}

console.log(i);
console.log(c); */


// Cree un string de al menos 15 caracteres (sin que el usuario lo ingrese). Cuente la cantidad de A, E y O que hay en ese string y almacene esas cantidades en otro arreglo de 3 elementos en el orden que usted desee.


function almacenarCoincidencias (): number[] {
    
    const stringInicial: string = "Este es un texto de ejemplo para contar las coincidencias";
    const stringUpperCase: string = stringInicial.toUpperCase();
    
    let cantidadA: number = 0;
    let cantidadE: number = 0;
    let cantidadO: number = 0;
    let cantidadCoincidencias: number[] = new Array(3);
    
    for(let i = 0; i < stringUpperCase.length; i++) {
        if (stringUpperCase[i] == "A") {
            cantidadA++;
        } else if (stringUpperCase[i] == "E") {
            cantidadE++;
        } else if (stringUpperCase[i] == "O") {
            cantidadO++;
        }
    }

    cantidadCoincidencias = [cantidadA, cantidadE, cantidadO];

    return cantidadCoincidencias;
}


console.log(almacenarCoincidencias());


const array: number[] = [1, 4, 5, 2, 4, 2, 6]

function sumarArreglo(arreglo: number[]): number {
    let suma: number = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma;
}

// Errores:
// 1) Falta declarar i
// 2) Retornar suma en lugar de arreglo

console.log(sumarArreglo(array))




function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor < 7) {
        return "rojo";
    }
    else if ( valor >=7 && valor <= 10) {
        return "verde";
    }
     return "gris";
}

// Errores
// 1) Usar operador && en lugar de la palabra "and"
// 2) Los valores no están retornados en formato string
// 3) En el primer if, "siete" está escrito en string y debería estar en número


// La función va a retornar un number en lugar de un string
// Para el promedio, usar el operador / en lugar de %
// Retornar promedio en lugar de mostrarlo por consola

function obtenerPromedio(arr:number[]): number {    
    let suma: number = sumarArreglo(arr);
    let promedio: number = suma / arr.length;
    return promedio;
}

// Errores
// 1) La función va a retornar un number en lugar de un string
// 2) Para el promedio, usar el operador / en lugar de %
// 3) Retornar promedio en lugar de mostrarlo por consola

console.log(obtenerPromedio(array))



/* let variable: number;
let variable2 = number
let variable3: int;
let variable4: string;
let number: variable; */