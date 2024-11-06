import { Recurso } from "./Recurso"

export class Libro extends Recurso {
    private cantidadPaginas: number
    private paginaActual: number = 0

    constructor (nombre: string, autor: string, anio: number, genero: string, esExclusivo: boolean, disponible: boolean, cantidadPaginas: number) {
        super(nombre, autor, anio, genero, esExclusivo, disponible)
        this.cantidadPaginas = cantidadPaginas
    }


    consumir(): void {
        if (this.paginaActual < this.cantidadPaginas) {
            this.paginaActual++
        } else {
            console.log("Libro terminado")
        }
    }
}