import { ListaSimples } from "./clases/ListaS.js";
import { ListaNumeros } from "./clases/listasn.js";

/*const Lista = new ListaSimples();
Lista.insertarOrdenando("Matematicas", 3);
Lista.insertarOrdenando("Lenguaje", 1);
Lista.insertarOrdenando("Fisíca", 5);
Lista.insertarOrdenando("Química", 4);*/

const lista=new ListaNumeros();
lista.agregar(3);
lista.agregar(7);
lista.agregar(8);
lista.agregar(7);
lista.agregar(10);
lista.agregar(2);
const lista2=new ListaNumeros();
lista2.agregar(5);
lista2.agregar(2);
lista2.agregar(3);
lista2.agregar(7);
lista2.agregar(7);
lista2.agregar(1);
let resultado=lista.juntarlistas(lista2);
console.log(resultado.imprimir());