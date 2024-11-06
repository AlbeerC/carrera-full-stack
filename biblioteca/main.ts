// Sistema de Biblioteca con Diferentes Tipos de Miembros y Recursos
// El objetivo es crear un sistema de gestión de una biblioteca que permita a diferentes tipos de miembros acceder a recursos variados.
// Los recursos pueden incluir libros, revistas, y videos, cada uno con propiedades y métodos específicos.
// Además, ciertos miembros pueden tener privilegios especiales para acceder a recursos limitados o exclusivos.

import { Biblioteca } from "./Biblioteca";
import { Cliente } from "./Cliente";
import { Libro } from "./Libro";
import { Video } from "./Video";

const biblioteca = new Biblioteca("Biblio", 129, "Olavarría")

const cliente1 = new Cliente("Juan", 23)
const cliente2 = new Cliente("Pedro", 24)

const video1 = new Video("Gol messi 2015", "Barcelona", 2015, "Deporte", false, true, 2)
const video2 = new Video("Gol messi 2015", "Barcelona", 2015, "Deporte", false, true, 2)
const libro1 = new Libro("El principito", "Antonie", 1947, "Infantil", true, true, 129)

biblioteca.agregarCliente(cliente1)
biblioteca.agregarCliente(cliente2)
biblioteca.agregarRecurso(video1)
biblioteca.agregarRecurso(libro1)


cliente1.agregarRecurso(video1)

/* console.log(biblioteca.getClientes())
console.log(biblioteca.getRecursos()) */

libro1.consumir()
video1.consumir()
video1.consumir()
video1.consumir()
video2.consumir()
video2.consumir()
video2.consumir()