function numeroAleatorio () {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    return randomNumber
}

function lanzarDado () {
    let nums = []
    for (let i = 0; i < 10; i++) {
        nums[i] = numeroAleatorio()
    }

    return nums
}

function sumarDados (array1, array2) {
    let arrayFinal = []

    for (let i = 0; i <= array1.length - 1; i++) {
        arrayFinal[i] = array1[i]+ array2[i]
    }

    return arrayFinal

}

function contarSietes (array) {
    let contador = 0
    
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === 7) {
            contador++
        }
    }

    return contador
}

const dadosSumados = sumarDados(lanzarDado(), lanzarDado())

const cantidadSietes = contarSietes(dadosSumados)

const cantidadSietesTexto = document.getElementById('cantidadSietes')

cantidadSietesTexto.innerHTML = `La cantidad de veces que salió siete es: ${cantidadSietes}`