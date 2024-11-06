import { Cliente } from "./Cliente"
import { Recurso } from "./Recurso"

export class Biblioteca {
    private nombre: string
    private id: number
    private ciudad: string
    private listaClientes: Cliente[] = []
    private listaRecursos: Recurso[] = []

    constructor(nombre: string, id: number, ciudad: string) {
        this.nombre = nombre
        this.id = id
        this.ciudad = ciudad
    }

    agregarCliente(cliente: Cliente): void {
        this.listaClientes.push(cliente)
    }

    agregarRecurso(recurso: Recurso): void {
        this.listaRecursos.push(recurso)
    }

    getClientes(): Cliente[] {
        return this.listaClientes
    }

    getRecursos(): Recurso[] {
        return this.listaRecursos
    }
}