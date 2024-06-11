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
/* function almacenarCoincidencias (): number[] {
    
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
 */
var array = [1, 4, 5, 2, 4, 2, 6];
function sumarArreglo(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
console.log(sumarArreglo(array));
/* function establecerColorPorNotaa(valor: number): string {
    if (valor >= 0 && valor <7) {
        return "rojo";
    }
    else if ( valor >=7 && valor <= 10) {
        return "verde";
    }
     return "gris";
}



function establecerColorPorNota(valor: number): string {
    if (valor >= 0 && valor < 7) {
        return "rojo";
    }
    else if ( valor >=7 && valor <= 10) {
        return "verde";
    }
     return "gris";
} */
// La función va a retornar un number en lugar de un string
// Para el promedio, usar el operador / en lugar de %
// Retornar promedio en lugar de mostrarlo por consola
function obtenerPromedio(arr) {
    var suma = sumarArreglo(arr);
    var promedio = suma / arr.length;
    return promedio;
}
console.log(obtenerPromedio(array));
