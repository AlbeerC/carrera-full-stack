let contador = 0
const numero = document.getElementById("numero")

function incrementar () {
    contador++
    numero.innerHTML = contador
}

function decrementar () {
    contador--
    numero.innerHTML = contador
}

const botonIncrementar = document.getElementById("incrementar")
const botonDecrementar = document.getElementById("decrementar")

botonIncrementar.addEventListener("click", incrementar)
botonDecrementar.addEventListener("click", decrementar)
