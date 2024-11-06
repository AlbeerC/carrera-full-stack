"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var Recurso_1 = require("./Recurso");
var Libro = /** @class */ (function (_super) {
    __extends(Libro, _super);
    function Libro(nombre, autor, anio, genero, esExclusivo, disponible, cantidadPaginas) {
        var _this = _super.call(this, nombre, autor, anio, genero, esExclusivo, disponible) || this;
        _this.paginaActual = 0;
        _this.cantidadPaginas = cantidadPaginas;
        return _this;
    }
    Libro.prototype.consumir = function () {
        if (this.paginaActual < this.cantidadPaginas) {
            this.paginaActual++;
        }
        else {
            console.log("Libro terminado");
        }
    };
    return Libro;
}(Recurso_1.Recurso));
exports.Libro = Libro;
