let arreglo1 =[2, 5, 7, 4, 5, 2, 3, 6, 2, 4]
let arreglo2= [2, 3, 1, 3, 2, 5, 4, 1, 6, 2]
let arreglo3=[]

function boton(array1, array2) {
    let contador=0;
    let numero=7;
    for (let i = 0; i < array1.length; i++) {
       arreglo3[i]= array1[i] + array2[i];
       if (arreglo3[i]===numero) {
           contador++
        }
        
        console.log(arreglo3);
    }return contador


}

function ejecutarBoton () {
    const numeroFinal = boton(arreglo1, arreglo2)
    const spanCantidad = document.getElementById('cantidadSietes')

    spanCantidad.innerHTML = numeroFinal
}

const botonEjecutar = document.getElementById("boton")
botonEjecutar.addEventListener("click", ejecutarBoton)






// Hacer una aplicación web que al apretar un botón simule el lanzamiento de dos dados 10 veces, sumarlos y muestre en el HTML la cantidad de veces que salió 7.

/* function generarNumeros () {
    const numero = Math.floor(Math.random() * 6 + 1)
    return numero
}

function lanzarDado () {
    let arrayNumeros = []

    for (let i = 0; i < 10; i++) {
        arrayNumeros[i] = generarNumeros()
    }

    return arrayNumeros
}

function sumarDados (dado1, dado2) {

    let arraySuma = []

    for (let i = 0; i < dado1.length; i++) {
        arraySuma[i] = dado1[i] + dado2[i]
    }

    return arraySuma
}

function contarSietes (array) {
    let contador = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 7) {
            contador++
        }
    }

    return contador
}

function ejecutarFuncion () {
    const dado1 = lanzarDado()
    const dado2 = lanzarDado()
    const arrayFinal = sumarDados(dado1, dado2)
    
    const cantidadSietes = contarSietes(arrayFinal)
    
    const cantidad = document.getElementById("cantidad")
    
    cantidad.innerHTML = `${cantidadSietes}`
} */