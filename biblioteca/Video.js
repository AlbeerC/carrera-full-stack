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
exports.Video = void 0;
var Recurso_1 = require("./Recurso");
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video(nombre, autor, anio, genero, esExclusivo, disponible, duracion) {
        var _this = _super.call(this, nombre, autor, anio, genero, esExclusivo, disponible) || this;
        _this.minutoActual = 0;
        _this.duracion = duracion;
        return _this;
    }
    Video.prototype.consumir = function () {
        if (this.minutoActual < this.duracion) {
            this.minutoActual++;
        }
        else {
            console.log("Video terminado");
        }
    };
    return Video;
}(Recurso_1.Recurso));
exports.Video = Video;
