import { Recurso } from "./Recurso"

export class Video extends Recurso {
    private duracion: number
    private minutoActual: number = 0

    constructor (nombre: string, autor: string, anio: number, genero: string, esExclusivo: boolean, disponible: boolean, duracion: number) {
        super(nombre, autor, anio, genero, esExclusivo, disponible)
        this.duracion = duracion
    }


    consumir(): void {
        if (this.minutoActual < this.duracion) {
            this.minutoActual++
        } else {
            console.log("Video terminado")
        }
    }
}