"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recurso = void 0;
var Recurso = /** @class */ (function () {
    function Recurso(nombre, autor, anio, genero, esExclusivo, disponible) {
        this.nombre = nombre;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
        this.esExclusivo = esExclusivo;
        this.disponible = disponible;
    }
    Recurso.prototype.getInformacion = function () {
        console.log("".concat(this.nombre, " - ").concat(this.autor, " - ").concat(this.anio, " - ").concat(this.genero, " "));
    };
    Recurso.prototype.getEsExclusivo = function () {
        return this.esExclusivo;
    };
    return Recurso;
}());
exports.Recurso = Recurso;
