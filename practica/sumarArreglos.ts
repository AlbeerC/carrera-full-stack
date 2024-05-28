import * as readlineSync from 'readline-sync';

let dim:number=readlineSync.questionInt("Ingrese la dimension del arreglo:")

let arreglo1: number[]= new Array(dim);
let arreglo2: number[]= new Array(dim);
let arreglo3: number[]=new Array (dim);

function cargarArreglo1(arreglo1:number[],dim:number) {
        let i:number=0;
        for (let i = 0; i < dim; i++) {
            arreglo1[i] = Math.random[17];
        
        }
}

function cargarArreglo2(arreglo2:number[], dim:number) {
    let i:number=0;
    for (let i = 0; i < dim; i++) {
        arreglo2[i]=Math.random[17];
        
    }
    
}

function sumaDeArreglos(arreglo1:number[],arreglo2:number[],arreglo3:number[],dim:number) { 
    let i:number;
    for (let i = 0; i < dim; i++) {
        arreglo3[i]= arreglo1[i] + arreglo2[i];
        return arreglo3;
    }
}

function mostrarArreglo1(arreglo1:number[], dim:number) {
    let linea:string=" - ";
    let i:number;
    for (let i = 0; i < dim; i++) {
        linea += arreglo1[i];
    }
    console.log(linea);

}

function mostrarArreglo2(arreglo2:number[],dim:number) {
    let linea:string= " - ";
    let i:number;
    for (let i = 0; i < dim; i++) {
        linea += arreglo2[i];

    }
    console.log(linea);   
}



function mostrarArreglo3(arreglo3:number[],dim:number) {
    let linea:string= " - ";
    let i:number;
    for (let i = 0; i < dim; i++) {
        linea += arreglo3[i];
        
    }
    console.log(linea);   
}


cargarArreglo1(arreglo1,dim);
mostrarArreglo1(arreglo1,dim);
cargarArreglo2(arreglo2,dim);
mostrarArreglo2(arreglo2,dim);
sumaDeArreglos(arreglo1,arreglo2,arreglo3,dim);
mostrarArreglo3(arreglo3,dim);