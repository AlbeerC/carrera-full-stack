function promedioEdad() {
    var edadJugadores = [];
    for (var i = 0; i < 8; i++) {
        edadJugadores[i] = Math.floor(Math.random() * (8 - 3) + 3);
    }
    var totalEdades = 0;
    for (var i = 0; i < edadJugadores.length; i++) {
        totalEdades += edadJugadores[i];
    }
    console.log("La edad de los jugadores es: ", edadJugadores);
    console.log("El promedio de edad entre todos los jugadores es de: ", totalEdades / edadJugadores.length);
}
promedioEdad();
