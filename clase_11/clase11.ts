

function promedioEdad () {

    let edadJugadores: number[] = []

    for (let i = 0; i < 8; i++) {
        edadJugadores[i] = Math.floor(Math.random() * (7 - 3 + 1) + 3)
    }

    let totalEdades: number = 0

    for (let i = 0; i < edadJugadores.length; i++) {
        totalEdades += edadJugadores[i]
    }

    console.log("La edad de los jugadores es de: ", totalEdades)
    console.log("El promedio de edad entre todos los jugadores es de: ", totalEdades / edadJugadores.length)
}

promedioEdad()