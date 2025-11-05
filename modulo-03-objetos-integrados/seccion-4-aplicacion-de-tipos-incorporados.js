
// Ampliación de tipos incorporados:

/*
    Los objetos incorporados en JavaScript incluyen muchos métodos, 
    pero no siempre ofrecen exactamente lo que necesitamos. 
    En algunos casos, debemos crear nuevas funcionalidades 
    para resolver tareas específicas.

    En este ejemplo, aprenderemos cómo extender los tipos incorporados 
    añadiendo nuevos métodos al prototipo de los objetos.
*/


// Creación de funciones personalizadas para arreglos:

/*
    Imaginemos que necesitamos obtener un elemento específico 
    de un arreglo, según un índice dado. 
    El constructor `Array` no tiene un método así, 
    así que crearemos una función que lo haga.
*/

let getItem = function(array, index) {
    let retVal = undefined;
    if (index > 0 && index < array.length) {
        retVal = array[index];
    }
    return retVal;
};

let array = [10, 20, 80, 100];
console.log(getItem(array, 2)); // -> 80

/*
    Explicación:

    - La función devuelve el elemento del arreglo en la posición 
      indicada.
    - Si el índice está fuera del rango, devuelve `undefined`.
*/


// Simplificación del código:

/*
    Podemos reemplazar la estructura `if` por un operador condicional
    para hacerlo más compacto.
*/

let getItemCond = function(array, index) {
    return (index > 0 && index < array.length) ? array[index] : undefined;
};

/*
    Incluso podemos simplificar más:

    en JavaScript, acceder a un índice fuera del arreglo ya devuelve 
    `undefined`, por lo que la comprobación no es necesaria.
*/

let getItemSimple = function(array, index) {
    return array[index];
};

console.log(getItemSimple(array, 3)); // -> 100
console.log(getItemSimple(array, 10)); // -> undefined


// Función para obtener un elemento aleatorio:

/*
    Ahora queremos una función que devuelva un elemento aleatorio 
    de un arreglo. Para ello, utilizamos el objeto `Math` y su método 
    `random()` junto con `floor()` para generar índices válidos.
*/

let getRandomItem = function(array) {
    return array[Math.floor(Math.random() * array.length)];
};

let array2 = [10, 20, 80, 100];
console.log(getRandomItem(array2)); // -> elemento aleatorio
console.log(getRandomItem(array2)); // -> elemento aleatorio

/*
    Explicación:

    - `Math.random()` genera un número decimal entre 0 y 1.
    - Multiplicamos por la longitud del arreglo para obtener un 
      índice posible.
    - `Math.floor()` redondea hacia abajo al entero más cercano.
*/


// Extensión del prototipo del objeto Array:

/*
    Hasta ahora, nuestra función `getRandomItem` no está unida 
    directamente al objeto `Array`. 
    Podemos mejorar esto agregándola como un método del prototipo de 
    `Array`.
*/

Array.prototype.getRandomItem = function() {
    return this[Math.floor(Math.random() * this.length)];
};

let numbers = [10, 20, 80, 100];
console.log(numbers.getRandomItem()); // -> elemento aleatorio
console.log(numbers.getRandomItem()); // -> elemento aleatorio

/*
    Explicación:

    - Añadimos el método `getRandomItem` al prototipo de `Array`.
    - Dentro del método, `this` hace referencia al arreglo que lo 
      invoca.
    - El método no necesita argumentos porque trabaja directamente 
      con el propio arreglo.
*/


// Consideraciones y buenas prácticas:

/*
    Ventajas:
    - Permite extender funcionalidades nativas de JavaScript.
    - Hace que el código sea más legible y reutilizable.

    Desventajas:
    - Estas modificaciones solo afectan al entorno actual (se pierden al reiniciar).
    - Si en el futuro JavaScript implementa un método con el mismo nombre,
    podría sobrescribir o alterar el comportamiento esperado.

    Por ello, se recomienda usar esta técnica con precaución 
    y solo cuando sea realmente necesario.
*/
