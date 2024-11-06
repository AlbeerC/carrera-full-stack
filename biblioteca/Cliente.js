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
        if (recurso.getEsExclusivo() && !this.esExclusivo) {
            console.log(recurso.getEsExclusivo());
            console.log("El cliente no es exclusivo");
        }
        else {
            this.recursosConsumidos.push(recurso);
        }
    };
    Cliente.prototype.hacerExclusivo = function () {
        if (this.recursosConsumidos.length > 2) {
            this.esExclusivo = true;
        }
        else {
            console.log("El cliente no consumió suficientes recursos para ser exclusivo");
        }
    };
    return Cliente;
}());
exports.Cliente = Cliente;
