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



// Ejercicio 02 - Escribe un decorador llamado myDecorator que almacene
// los argumentos de cada llamada a la función decorada.

/*
    Si la función ya ha sido llamada anteriormente con esos mismos
    argumentos, deberá mostrarse un mensaje apropiado en la consola
    que contenga, entre otras cosas, los valores de dichos argumentos.

    Nota - La función puede ser llamada con cualquier cantidad de
    argumentos, por lo que debes utilizar argumentos rest para este 
    propósito.
*/

function myDecorator (fn) {
   
    let calledArgs = new Set(); 
    return function(...args) {
        let argsKey = JSON.stringify(args);
        if (calledArgs.has(argsKey)) {
            console.log(`-> arguments already used: ${args.join(', ')}`);
        } else {      
            calledArgs.add(argsKey);
            return fn(...args);
        }
    }
}

// Prueba el decorador utilizando el siguiente código:

let sum = function(...args) {
    let retVal = 0;
    for( let arg of args) {
        retVal += arg;
    }
    return retVal;
}

let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2, 3, 4
dfn(4, 5); // -> arguments already used: 4, 5
