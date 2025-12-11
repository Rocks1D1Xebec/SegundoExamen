import { NodoN } from "./Nodo.js";

export class ListaNumeros {
    public cabezanumerica: NodoN | null = null;
    public agregar(Numero: number){
        const NuevoNodoN = new NodoN(Numero);
        if(this.cabezanumerica === null){
            this.cabezanumerica = NuevoNodoN;
        } else {
            let actual = this.cabezanumerica;
            while(actual.siguiente !== null){
                actual = actual.siguiente;
            }
            actual.siguiente = NuevoNodoN;
        }
    }
    public juntarlistas(lista2: ListaNumeros) {
    let resultado = new ListaNumeros();
    let actual1 = this.cabezanumerica;
    while (actual1 !== null) {
        let actual2 = lista2.cabezanumerica;
        let existeEnLista2 = false;
        while (actual2 !== null) {
            if (actual2.Numero === actual1.Numero) {
                existeEnLista2 = true;
                break;
            }
            actual2 = actual2.siguiente;
        }
        if (existeEnLista2) {
            let r = resultado.cabezanumerica;
            let yaAgregado = false;
            while (r !== null) {
                if (r.Numero === actual1.Numero) {
                    yaAgregado = true;
                    break;
                }
                r = r.siguiente;
            }
            if (!yaAgregado) {
                resultado.agregar(actual1.Numero);
            }
        }
        actual1 = actual1.siguiente;
    }
    return resultado;
}

    public imprimir(){
        let actual = this.cabezanumerica;
        let resultado = "";
        while(actual !== null){
            resultado += actual.Numero + " ";
            actual = actual.siguiente;
        }
        return resultado;
    }
}