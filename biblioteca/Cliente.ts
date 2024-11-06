import { Recurso } from "./Recurso"

export class Cliente {
    private nombre: string
    private id: number
    private esExclusivo: boolean = false
    private recursosConsumidos: Recurso[] = []

    constructor(nombre: string, id: number) {
        this.nombre = nombre
        this.id = id
    }

    agregarRecurso(recurso: Recurso): void {
        if (recurso.getEsExclusivo() && !this.esExclusivo) { // Si el recurso es exclusivo y el usuario no, no se agrega
            console.log("El cliente no es exclusivo")
        } else {
            this.recursosConsumidos.push(recurso) // En cualquier otro caso, se agrega a la lista
        }
    }

    hacerExclusivo(): void {
        if (this.recursosConsumidos.length >= 2) {
            this.esExclusivo = true
            console.log("El cliente ahora es exclusivo")
        } else {
            console.log("El cliente no consumió suficientes recursos para ser exclusivo")
        }
    }

    getRecursosConsumidos(): Recurso[] {
        return this.recursosConsumidos
    }
}