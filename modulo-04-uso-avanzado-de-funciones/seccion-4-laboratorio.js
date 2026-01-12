// Laboratorio:

// Ejercicio 01 - Escribe una clase llamada MyIterable que permita crear
// un objeto iterable con las siguientes propiedades:

/*
    - Será posible añadir elementos arbitrarios (método add). ok
    - Un intento de añadir un elemento que ya exista en el objeto será
      ignorado. ok
    - Será posible comprobar si un elemento está presente en el objeto 
      (método has).
    - Será posible eliminar un elemento (método del).ok
    - Será posible comprobar la cantidad de elementos (propiedad length).
    - Será posible utilizar cualquier técnica para recorrer los elementos
      de un objeto iterable (operador spread, for ... of, iteradores), y se
      deberá usar un generador adecuado en la implementación.
*/

class MyIterable {
    constructor () {
        this.items = []
    };

    add(item) {
        if (!this.items.includes(item) ) {
            this.items.push(item);
        }
    }

    has(item) {
        return this.items.includes(item)
    }

    del(item) {
        let index = this.items.indexOf(item)
        if (index !== -1) {
            this.items.splice(index, 1)
        }
    }

    get length() {
        return this.items.length
    }

    *[Symbol.iterator]() {
        for (let item of this.items) {
            yield item;
        }
    }

}

// Prueba la clase utilizando el siguiente ejemplo:

let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);

console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5

