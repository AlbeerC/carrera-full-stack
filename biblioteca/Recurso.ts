export abstract class Recurso {

    protected nombre: string
    protected autor: string
    protected anio: number
    protected genero: string
    protected esExclusivo: boolean
    protected disponible: boolean

    constructor(nombre: string, autor: string, anio: number, genero: string, esExclusivo: boolean, disponible: boolean) {
        this.nombre = nombre
        this.autor = autor
        this.anio = anio
        this.genero = genero
        this.esExclusivo = esExclusivo
        this.disponible = disponible
    }

    getInformacion(): void {
        console.log(`${this.nombre} - ${this.autor} - ${this.anio} - ${this.genero} `)
    }

    getEsExclusivo(): boolean {
        return this.esExclusivo
    }
    
    abstract consumir(): void

}