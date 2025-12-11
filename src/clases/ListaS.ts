import { Nodo } from "./Nodo.js"
export class ListaSimples {
    public cabeza: Nodo | null = null;
    public insertarOrdenando(titulo: string, prioridad: number) {

        debugger;
        const Nuevonodo = new Nodo(titulo, prioridad);
        if (this.cabeza === null || prioridad < this.cabeza.prioridad) {
            Nuevonodo.siguiente=this.cabeza;
            this.cabeza=Nuevonodo;
            return;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente !== null && actual.siguiente.prioridad <= prioridad) {
                actual = actual.siguiente;
            }
            Nuevonodo.siguiente = actual.siguiente;
            actual.siguiente = Nuevonodo;
        }
    }
}