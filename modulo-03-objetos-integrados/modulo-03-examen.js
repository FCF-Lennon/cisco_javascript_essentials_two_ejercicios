// Pregunta 01 - Analiza el siguiente código:

console.log(`${Boolean(-1)} ${Boolean(0)}  ${String(0)}  ${String(1)} `);

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

/*
    Opciones:

    - true false false true
    - false false 0 1
    - false false underfined underfined
    - true false 0 1 / Respuesta
*/


// Pregunta 02 - Falta una línea en el siguiente código:

let str = 'sample string';
// ...
console.log(result);

// Selecciona la línea correcta que falta para que el código ejecutado
// produzca la siguiente salida en consola: ['SAMPLE', 'STRING']

/*
    Opciones:

    - let result = str.split(' ').toUpperCase();
    - let result = str.toUpperCase(split(' '));
    - let result = str.toUpperCase().split(' '); / Respuesta
    - let result = str.toUpperCase(' ');
*/


// Pregunta 03 - Analiza el siguiente código:

str = 'sample string';
console.log(`${str.includes('s')} ${str.indexOf('s')} ${str.lastIndexOf('s')}`);

// ¿Qué aparecerá en la consola como resultado de la ejecución?

/*
    Opciones:

    - 0 0 7 
    - true 1 8 
    - true 0 7 / Respuesta
    - 1 1 8
*/


// Pregunta 04 - Una llamada a Date.now() devolverá:

/*
    Opciones:

    - Un objeto de la clase Date que contiene la fecha y hora actuales. 
    - El número de milisegundos desde las 00:00:00 del 1 de enero de 2000.
    - El número de segundos desde las 00:00:00 del 1 de enero de 1970.
    - El número de milisegundos desde las 00:00:00 del 1 de enero de 1970. / Respuesta
*/


// Pregunta 05 - Obtener el año actual puede realizarse con el comando:

/*
    Opciones:

    - let year = Date.now().getFullYear(); 
    - let year = (new Date(Date.now())).getFullYear(); / Respuesta
    - let year = Date.getFullYear();
    - let year = (new.Date.now().getFullYear();
*/


// Pregunta 06 - Analiza el siguiente código:

points = [{ x: 10, y: 20 }, { x: 0, y: 30 }, { x: 20, y: 100 }];
let r1 = points.some(e => e.x === 0);
let r2 = points.every(e => e.x === 0);

console.log(`${r1} ${r2}`);

// ¿Qué aparecerá en la consola como resultado de la ejecución?

/*
    Opciones:

    - true false / Respuesta
    - {x: 0, y: 30} null
    - {x: 0, y: 39} undefined
    - 1 -1
*/


// Pregunta 07 - Falta una línea en el siguiente código:

points = [
    { x: 10, y: 20 },
    { x: 0,  y: 30 },
    { x: 20, y: 100 }
];

// Insertar la línea correcta aquí.
// El resultado esperado en consola es:
// [{x: 10, y: 20}, {x: 20, y: 100}]

/*
    Opciones:

    - let result = points.filter(y > 0);
    - let result = points.filter(e => e.y - e.x);
    - let result = points.fliter(e => e.y > 0);
    - let result = points.filter(e => e.y > 0 && e.x > 0); / Respuesta
*/

// Explicación:
// Se requiere obtener los objetos donde x sea mayor que 0.


// Pregunta 08 - Falta una línea en el siguiente código:

points = [
    { x: 10, y: 20 },
    { x: 0,  y: 30 },
    { x: 20, y: 100 }
];

// Insertar la línea correcta aquí.
// Resultado esperado en consola:
// [{x: 20, y: 100}, {x: 0, y: 30}, {x: 10, y: 20}]

/*
    Opciones:

    - let result = points.sort((p1, p2) => p2.y - p1.y); / Respuesta
    - let result = points.sort((p1, p2) => p1.y - p2.y);
    - let result = points.sort((p1, p2) => p2.y - p1.y);
    - let result = points.sort((p1, p2) => p2 - p1);
*/

// Explicación:
// sort() ordena elementos según el valor retornado por la función de comparación.
// Para ordenar de mayor a menor por la propiedad y se utiliza: p2.y - p1.y.


// Pregunta 09 - Falta una línea en el siguiente código:

points = [
    { x: 10, y: 20 },
    { x: 0,  y: 30 },
    { x: 20, y: 100 }
];

// Insertar la línea correcta aquí.
// Resultado esperado en consola:
// [30, 30, 120]

/*
    Opciones:

    - let result = points.map(e => {e.x + e.y}); 
    - let result = points.map(e => e.x + e.y); / Respuesta
    - let result = points.map(x + y);
    - let result = points.map((e, n) => { n = e.x + e.y });
*/

// Explicación:
// map() crea un nuevo arreglo aplicando una función a cada elemento.
// En este caso, se requiere sumar x + y para cada objeto.


// Pregunta 10 - Falta una línea en el siguiente código:

let x = [100, 101, 102, 103];

// Insertar la línea correcta aquí.
// Resultado esperado en consola:
// 1406

/*
    Opciones:

    - let result = x.reduce((e, p) => e + 1000, p);
    - let result = x.reduce(e => e + 1000);
    - let result = x.reduce((e => e++, 1000);
    - let result = x.reduce((e, p) => e + p, 1000); / Respuesta
*/

let result = x.reduce((e, p) => e + p, 1000);

console.log(result);

// Explicación:
// reduce() acumula los valores del arreglo.
// Con acumulador inicial 1000:
// 1000 + 100 + 101 + 102 + 103 = 1406.
