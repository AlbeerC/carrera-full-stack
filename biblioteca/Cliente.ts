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
        if (recurso.getEsExclusivo() && !this.esExclusivo) {
            console.log(recurso.getEsExclusivo())
            console.log("El cliente no es exclusivo")
        } else {
            this.recursosConsumidos.push(recurso)
        }
    }

    hacerExclusivo(): void {
        if (this.recursosConsumidos.length >= 2) {
            this.esExclusivo = true
        } else {
            console.log("El cliente no consumió suficientes recursos para ser exclusivo")
        }
    }
}