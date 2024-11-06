"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, id) {
        this.esExclusivo = false;
        this.recursosConsumidos = [];
        this.nombre = nombre;
        this.id = id;
    }
    Cliente.prototype.agregarRecurso = function (recurso) {
        if (recurso.getEsExclusivo() && !this.esExclusivo) { // Si el recurso es exclusivo y el usuario no, no se agrega
            console.log("El cliente no es exclusivo");
        }
        else {
            this.recursosConsumidos.push(recurso); // En cualquier otro caso, se agrega a la lista
        }
    };
    Cliente.prototype.hacerExclusivo = function () {
        if (this.recursosConsumidos.length >= 2) {
            this.esExclusivo = true;
            console.log("El cliente ahora es exclusivo");
        }
        else {
            console.log("El cliente no consumió suficientes recursos para ser exclusivo");
        }
    };
    Cliente.prototype.getRecursosConsumidos = function () {
        return this.recursosConsumidos;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
