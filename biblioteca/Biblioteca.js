"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var Biblioteca = /** @class */ (function () {
    function Biblioteca(nombre, id, ciudad) {
        this.listaClientes = [];
        this.listaRecursos = [];
        this.nombre = nombre;
        this.id = id;
        this.ciudad = ciudad;
    }
    Biblioteca.prototype.agregarCliente = function (cliente) {
        this.listaClientes.push(cliente);
    };
    Biblioteca.prototype.agregarRecurso = function (recurso) {
        this.listaRecursos.push(recurso);
    };
    Biblioteca.prototype.getClientes = function () {
        return this.listaClientes;
    };
    Biblioteca.prototype.getRecursos = function () {
        return this.listaRecursos;
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
