
// Generadores e iteradores

/*
    Esta sección introduce los conceptos de iteradores y generadores en JavaScript.
    Ambos fueron incorporados en ECMAScript 2015 (ES6) y permiten recorrer datos
    de forma controlada y eficiente.

    Los objetos iterables son colecciones de datos que pueden recorrerse elemento
    por elemento.
    Ejemplos integrados: Array, Map, Set.

    Para recorrer objetos iterables podemos usar:
    - for...of
    - operador spread (...)
    - iteradores
*/


/*
    Ejemplo de un objeto iterable integrado: Set
*/

let s = new Set([1, 30]);
s.add(500);
s.add(50);

// Recorrido usando for...of
for (let e of s) {
    console.log(e); // -> 1 30 500 50
}

// Uso del operador spread para convertir a array
console.log([...s]); // -> [1, 30, 500, 50]

// Uso del operador spread como argumentos
console.log(...s); // -> 1 30 500 50

/*
    Uso manual de un iterador.
    Un iterador actúa como un puntero que avanza elemento por elemento.
*/

let it = s[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 30
console.log(it.next().value); // -> 500
console.log(it.next());       // -> { value: 50, done: false }


// Iteradores:

/*
    Un iterador:
    - Está asociado a un objeto iterable.
    - Proporciona el método next().
    - next() devuelve un objeto con:
    - value: valor actual
    - done: indica si se terminó la iteración
*/

// Intento fallido de crear un iterable propio
let almostIterable = {
    data: [10, 30, 60, 20, 90]
};

// Este código falla porque el objeto no es iterable
// for (let a of almostIterable) {
//     console.log(a);
// }
// let arr = [...almostIterable];

/*
    Agregamos un método que crea un iterador manualmente.
    Este primer intento no está conectado a los datos reales.
*/

let almostIterableV1 = {
    data: [10, 30, 60, 20, 90],
    iterator: function () {
        return {
            next: function () {
                return {
                    value: undefined,
                    done: false
                };
            }
        };
    }
};

let it1 = almostIterableV1.iterator();
console.log(it1.next()); // -> { value: undefined, done: false }

/*
    Mejoramos el iterador conectándolo con los datos reales.
    Usamos closures para mantener el estado.
*/

let almostIterableV2 = {
    data: [10, 30, 60, 20, 90],
    iterator: function () {
        let index = -1;
        let data = this.data;
        return {
            next: function () {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                };
            }
        };
    }
};

let it2 = almostIterableV2.iterator();
console.log(it2.next()); // -> { value: 10, done: false }
console.log(it2.next()); // -> { value: 30, done: false }

/*
    Aún no funciona con for...of ni spread,
    porque JavaScript busca un método llamado Symbol.iterator
*/

let almostIterableV3 = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function () {
        let index = -1;
        let data = this.data;
        return {
            next: function () {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                };
            }
        };
    }
};

// Ahora sí funciona
for (let a of almostIterableV3) {
    console.log(a);
}
console.log([...almostIterableV3]);


// Generador:

/*
    Un generador es una función especial:
    - Usa function*
    - Usa yield en lugar de return
    - Produce un iterador automáticamente
*/

// Generador simple
function* testGenerator() {
    yield 10;
    yield 20;
    yield 30;
}

let gen = testGenerator();
console.log(gen.next()); // -> { value: 10, done: false }
console.log(gen.next()); // -> { value: 20, done: false }
console.log(gen.next()); // -> { value: 30, done: false }
console.log(gen.next()); // -> { value: undefined, done: true }

/*
    Generador usando un bucle
*/

function* testGeneratorLoop() {
    for (let i = 10; i <= 30; i += 10) {
        yield i;
    }
}

// Generador recorriendo un array
function* testGeneratorArray() {
    let data = [10, 20, 30];
    for (let element of data) {
        yield element;
    }
}

/*
    Reescribimos nuestro iterable usando generadores.
    Mucho más simple y legible.
*/

let iterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for (let element of this.data) {
            yield element;
        }
    }
};

for (let a of iterable) {
    console.log(a);
}
console.log([...iterable]);

/*
    Importante:
    Un iterador no puede reutilizarse una vez agotado.
*/

let itOnce = iterable[Symbol.iterator]();
console.log([...itOnce]); // -> [10, 30, 60, 20, 90]
console.log([...itOnce]); // -> []


// Generadores para secuencias infinitas o calculadas:

// Generador de factoriales:

function* factorialGenerator(range = Infinity) {
    let last = 1;
    for (let index = 1; index <= range; index++) {
        last *= index;
        yield last;
    }
}

let factorial = factorialGenerator(3);
console.log(factorial.next()); // -> 1
console.log(factorial.next()); // -> 2
console.log(factorial.next()); // -> 6

/*
    Clase iterable basada en generadores
*/

class Factorial {
    constructor(range = Infinity) {
        this.range = range;
    }

    *[Symbol.iterator]() {
        let last = 1;
        for (let index = 1; index <= this.range; index++) {
            last *= index;
            yield last;
        }
    }
}

let factorialObj = new Factorial(5);
console.log([...factorialObj]); // -> [1, 2, 6, 24, 120]


// Generador de Fibonacci:

function* fibonacci(range = Infinity) {
    let lastButOne = 0, last = 1;
    yield lastButOne;
    yield last;
    for (let i = 1; i <= range; i++) {
        let tmp = lastButOne + last;
        lastButOne = last;
        last = tmp;
        yield last;
    }
}

let fibIt = fibonacci(5);
for (let f of fibIt) {
    console.log(f);
}


// yield*

/*
    yield* delega la iteración a otro iterable
*/

function* cities() {
    for (let city of ['London', 'Oslo', 'Berlin']) {
        yield city;
    }
}

function* test() {
    yield* cities();
    yield 'Amsterdam';
    yield* ['Madrid', 'Rome'];
}

console.log([...test()]);
// -> ['London', 'Oslo', 'Berlin', 'Amsterdam', 'Madrid', 'Rome']
