// Implemente un algoritmo de ordenamiento con el método Bubble Sort, para que ordene un arreglo de longitud N en orden descendente.
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
function fillArray(array, max) {
    for (var i = 0; i < array.length; i++) {
        array[i] = generateRandomNumber(max);
    }
}
function bubbleSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                var aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}
// Ejemplo 1
var array1 = new Array(10);
fillArray(array1, 100);
console.log("Arreglo inicial: ", array1);
bubbleSort(array1);
console.log("Arreglo ordenado de forma descendente: ", array1);
// Ejemplo 2 (descomentar para probar)
var array2 = new Array(15);
fillArray(array2, 50);
console.log("Arreglo inicial: ", array2);
bubbleSort(array2);
console.log("Arreglo ordenado de forma descendente: ", array2);
