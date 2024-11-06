"use strict";
// Sistema de Biblioteca con Diferentes Tipos de Miembros y Recursos
// El objetivo es crear un sistema de gestión de una biblioteca que permita a diferentes tipos de miembros acceder a recursos variados.
// Los recursos pueden incluir libros, revistas, y videos, cada uno con propiedades y métodos específicos.
// Además, ciertos miembros pueden tener privilegios especiales para acceder a recursos limitados o exclusivos.
Object.defineProperty(exports, "__esModule", { value: true });
var Biblioteca_1 = require("./Biblioteca");
var Cliente_1 = require("./Cliente");
var Libro_1 = require("./Libro");
var Video_1 = require("./Video");
var biblioteca = new Biblioteca_1.Biblioteca("Biblio", 129, "Olavarría");
var cliente1 = new Cliente_1.Cliente("Juan", 23);
var cliente2 = new Cliente_1.Cliente("Pedro", 24);
var video1 = new Video_1.Video("Gol messi 2015", "Barcelona", 2015, "Deporte", false, true, 2);
var video2 = new Video_1.Video("Gol messi 2015", "Barcelona", 2015, "Deporte", false, true, 2);
var libro1 = new Libro_1.Libro("El principito", "Antonie", 1947, "Infantil", true, true, 129);
biblioteca.agregarCliente(cliente1);
biblioteca.agregarCliente(cliente2);
biblioteca.agregarRecurso(video1);
biblioteca.agregarRecurso(video2);
biblioteca.agregarRecurso(libro1);
cliente1.agregarRecurso(libro1); // No puede, ya que el libro es exclusivo y el cliente no.
cliente1.hacerExclusivo(); // Todavía no puede ser exclusivo
cliente1.agregarRecurso(video1);
cliente1.agregarRecurso(video2);
cliente1.hacerExclusivo(); // Ahora sí puede ser exclusivo
cliente1.agregarRecurso(libro1); // Y ahora sí puede agregar el libro
console.log(cliente1.getRecursosConsumidos()); // Ver recursos del cliente
// Métodos de leer libro y reproducir video
libro1.consumir();
video1.consumir();
video1.consumir();
video1.consumir();
// Ver clientes y recursos de una biblioteca
console.log(biblioteca.getClientes());
console.log(biblioteca.getRecursos());
