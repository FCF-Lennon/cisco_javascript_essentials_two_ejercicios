
// Funciones avanzadas y decoradores

/*
    Esta sección amplía el uso de funciones en JavaScript.
    Se introducen mejoras de ES6 relacionadas con parámetros,
    closures, IIFE, manejo de `this`, funciones de primera clase
    y decoradores.
*/

// Manejo extendido de parámetros – Valores por defecto:

/*
    ES6 permite asignar valores por defecto a los parámetros
    de una función. Esto evita validaciones manuales cuando
    no se entregan argumentos.
*/

function greetings(name) {
    console.log(`Hi, ${name}!`);
}
greetings();          // -> Hi, undefined!
greetings('Alice');   // -> Hi, Alice!

/*
    Al no pasar argumento, el parámetro `name` queda como undefined.
*/

function greetingsDefault(name = 'anonymous') {
    console.log(`Hi, ${name}!`);
}
greetingsDefault();         // -> Hi, anonymous!
greetingsDefault('Alice');  // -> Hi, Alice!

/*
    El valor por defecto solo se usa si no se entrega argumento.
*/

function testDefaults(a, b = 1, c, d = 2) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
testDefaults();
testDefaults(100);
testDefaults(100, 200);
testDefaults(100, 200, 300);
testDefaults(100, 200, 300, 400);


// El parámetro rest:

/*
    El parámetro rest (`...`) permite agrupar argumentos
    en un arreglo cuando no sabemos cuántos recibiremos.
*/

function testRest(...args) {
    let msg = `length: ${args.length}, args:`;
    args.forEach(arg => { msg += ` ${arg}`; });
    console.log(msg);
}
testRest(100, 200, 300);
testRest(100);

/*
    Reglas:
    
    - Solo puede existir un parámetro rest.
    - Debe ser el último parámetro.
*/

// Ejemplos incorrectos (comentados):

/*
    function test(...a, ...b) {}
    function test(...a, c) {}
    function test(...a, c, ...b) {}
*/

function testMixed(firstArg, ...anotherArgs) {
    let msg = `first arg: ${firstArg}, length: ${anotherArgs.length}, args:`;
    anotherArgs.forEach(arg => { msg += ` ${arg}`; });
    console.log(msg);
}

testMixed(100, 200, 300);
testMixed(100);


// Operador spread:

/*
    El operador spread (`...`) descompone un arreglo
    en argumentos individuales al llamar una función.
*/

function getFile(url, name, mime) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // lógica de descarga omitida
}

let parametersArray = [
    'https://localhost/files',
    'test.json',
    'application/json'
];
getFile(...parametersArray);


// Simulación de parámetros nombrados:

/*
    JavaScript no soporta parámetros nombrados nativos,
    pero se pueden simular usando objetos y desestructuración.
*/

function getFileNamed({ url, name, mime }) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
}

let parametersObject = {
    name: 'test.json',
    url: 'https://localhost/files',
    mime: 'application/json'
};

getFileNamed(parametersObject);
getFileNamed({
    mime: 'image/jpeg',
    url: 'http://test.com/rest',
    name: 'id.jpg'
});

/*
    El orden no importa: los valores se asignan por nombre.
*/

// Closure (cierre)

/*
    Un closure permite que una función recuerde variables
    de su entorno incluso después de que la función externa
    haya terminado de ejecutarse.
*/

let globalCounter = 0;
function tickGlobal() {
    return ++globalCounter;
}
tickGlobal();
tickGlobal();

function tickLocal() {
    let counter = 0;
    return ++counter;
}
tickLocal();
tickLocal();

/*
    La variable local se reinicia en cada llamada.
*/

function getTick() {
    let counter = 10;
    return function () {
        return ++counter;
    };
}
let tick = getTick();
tick();
tick();
tick();

/*
    El valor de `counter` se conserva gracias al closure.
*/

function getPoint() {
    function inc(n) {
        return ++n;
    }
    return {
        x: 10,
        y: 20,
        incX: function () {
            this.x = inc(this.x);
        },
        incY: function () {
            this.y = inc(this.y);
        }
    };
}
let point = getPoint();
point.incX();


// IIFE (Immediately Invoked Function Expression):

/*
    Una IIFE es una función que se ejecuta inmediatamente
    después de ser definida. Se usa para evitar variables globales.
*/

(function (msg) {
    console.log(msg);
})('test IIFE');

(function () {
    let a = 10;
    let b = 20;
    let sum = function (x, y) {
        return x + y;
    };
    console.log(sum(a, b));
})();

// console.log(a); // Error: no existe fuera de la IIFE


// Redirección de llamadas: call, apply, bind

'use strict';

let pointObj = {
    x: 100,
    y: 200
};

function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`);
}

showPoint.call(pointObj, 'coordinates');
showPoint.apply(pointObj, ['coordinates']);

let showCoordinates = showPoint.bind(pointObj, 'coordinates');
showCoordinates();

/*
    bind crea una nueva función con `this` fijo.
*/


// Funciones de primera clase:

/*
    Las funciones pueden almacenarse en variables,
    pasarse como argumentos y devolverse como resultado.
*/

let sum = function (a, b) {
    return a + b;
};

function executeOperation(operation, firstArg, secondArg) {
    return operation(firstArg, secondArg);
}
executeOperation(sum, 10, 20);

function getMultiplyBy(multiplier) {
    return function (a) {
        return a * multiplier;
    };
}
let multiplyBy3 = getMultiplyBy(3);
multiplyBy3(2);


// Decoradores de funciones:

/*
    Un decorador envuelve una función y extiende su
    comportamiento sin modificarla directamente.
*/

let funA = function (a, b) {
    return a + b;
};

let decor = function (fn) {
    return function (arg1, arg2) {
        let result = fn(arg1, arg2);
        console.log(`result ${result}`);
        return result;
    };
};

let funB = decor(funA);
funA(3, 4);
funB(3, 4);

/*
    Ejemplo práctico: cacheo de resultados (memorización).
*/

let factorial = function (n) {
    return n > 1 ? factorial(n - 1) * n : 1;
};

let decorator = function (fn) {
    let results = new Map();
    return function (n) {
        let result = results.get(n);
        if (!result) {
            result = fn(n);
            results.set(n, result);
        }
        return result;
    };
};

let factorial2 = decorator(factorial);
factorial2(10);
factorial2(10);

/*
    Decoradores comunes:

    - debounce
    - throttle
    
    Usados para optimizar eventos frecuentes en interfaces.
*/
