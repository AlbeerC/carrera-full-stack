import * as readlineSync from 'readline-sync';

let dim:number=readlineSync.questionInt("Ingrese la dimension del arreglo: ")

let arreglo1: number[]= new Array(dim);
let arreglo2: number[]= new Array(dim);
let arreglo3: number[] = []

function cargarArreglo(arreglo:number[],dim:number) {
    let i:number=0;
    for (let i = 0; i < dim; i++) {
        arreglo[i] = Math.floor(Math.random() * 17);
    }
}


function sumaDeArreglos(arreglo1:number[],arreglo2:number[],arreglo3:number[]) { 
    let i:number = 0;
    for (i = 0; i < arreglo1.length; i++) {
        arreglo3[i] = arreglo1[i] + arreglo2[i];
    }

    return arreglo3;
}

function mostrarArreglo(arreglo:number[], dim:number) {
    let i: number;
    let linea:string = "";
    for (i = 0; i < dim; i++) {
        linea += `${arreglo[i]} `;
    }
    console.log(linea);
}

cargarArreglo(arreglo1,dim);
mostrarArreglo(arreglo1,dim);
cargarArreglo(arreglo2, dim);
mostrarArreglo(arreglo2,dim);
sumaDeArreglos(arreglo1, arreglo2, arreglo3);
mostrarArreglo(arreglo3,dim);