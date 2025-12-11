export class Nodo{
    public titulo: string;
    public prioridad: number;
    public siguiente: Nodo | null  = null;
    constructor(titulo: string, prioridad: number){
        this.titulo = titulo;
        this.prioridad = prioridad;
    }
}

export class NodoN{
    public Numero: number;
    public siguiente: NodoN | null  = null;
    constructor(Numero: number){
        this.Numero = Numero;
    }
}