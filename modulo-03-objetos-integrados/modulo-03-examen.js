// Pregunta 01 - Analiza el siguiente código:

console.log(`${Boolean(-1)} ${Boolean(0)}  ${String(0)}  ${String(1)} `);

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

/*
    Opciones:

    - true false false true
    - false false 0 1
    - false false underfined undefined
    - true false 0 1 / Respuesta
*/


// Pregunta 02 - Falta una línea en el siguiente código:

let str = 'sample string';
// ...
// console.log(result);

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

let points = [{ x: 10, y: 20 }, { x: 0, y: 30 }, { x: 20, y: 100 }];
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
    - let result = points.filter(e => e.y > 0);
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
    - let result = points.sort((p1, p2) => p2.y > p1.y);
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

// Explicación:
// reduce() acumula los valores del arreglo.
// Con acumulador inicial 1000:
// 1000 + 100 + 101 + 102 + 103 = 1406.


// Pregunta 11 - Falta una línea en el código a continuación:

points = [{x: 10, y: 20}, {x: 0, y: 30}, {x: 20, y: 100}];
// Insertar línea de código aquí.
// console.log(result);


// Selecciona la línea faltante correcta para que el código ejecutado 
// resulte en la siguiente salida de consola: {x: 10, y: 20}

/*
    Opciones:

    - let result = points.find(x > 0);
    - let result = points.find(e => {e.x > 0 return e}); 
    - let result = points.find({x: 10, y: 20});
    - let result = points.find(e => e.x > 0); / Respuesta
*/


// Pregunta 12 - Falta una línea en el código a continuación:

x = ['a', 'b', 'c', 'd', 'e'];
// Insertar línea de código aquí.
// console.log(result);


// Selecciona la línea faltante correcta para que el código ejecutado resulte 
// en la siguiente salida de consola: ['b', 'c', 'd']

/*
    Opciones:

    - let y = x.slice(2, 4);
    - let y = x.slice(1, -1); / Respuesta
    - let y = x.slice(0, 2);
    - let y = x.slice(-1, 1);
*/


// traduce con formato:

// Pregunta 13 - Falta una línea en el código a continuación:

x = ['a', 'b', 'c', 'd', 'e'];
x.splice(2, 2);
// Insertar línea de código aquí.
// console.log(x);


// Selecciona la línea faltante correcta para que el código ejecutado resulte 
// en la siguiente salida de consola: ['a', 'b', 'x', 'y', 'e']

/*
    Opciones:

    - x.splice(2, 2, 'x', 'y');
    - x.splice(2, 'x', 'y');
    - x.splice(2, 0, 'x', 'y'); / Respuesta
    - x.splice(2, 0, 2, 'x', 'y');
*/


// Pregunta 14 - Falta una línea en el código a continuación:

// a = [1, 2, 30, 20];
// Insertar línea de código aquí.
// console.log(str);


// Selecciona la línea faltante correcta para que el código ejecutado resulte 
// en la siguiente salida de consola: 1 -> 2 -> 30 -> 20

/*
    Opciones:

    - let str = a.toString();
    - let str = String.join(a, ' ->'); 
    - let str = a.join();
    - let str = a.join(' -> '); / Respuesta
*/


// Pregunta 15 - Analiza el siguiente código:

let s = new Set([1, 2, '100']);
s.add(2);
s.add('2');
console.log(`${s.has(2)} ${s.has('2')} ${s.size}`);

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

/*
    Opciones:

    - true true undefined;
    - true true 4; / Respuesta
    - true false 3;
    - true false 4;
*/


// Pregunta 16 - Analiza el siguiente código:

s = new Set([1, 2, '100']);
console.log(...s);


// ¿Qué aparecerá en la consola como resultado de la ejecución?

/*
    Opciones:

    - 1 2 '100' / Respuesta
    - Uncaught SyntaxError: Unexpected token '...'
    - 3
    - 1
*/


// Pregunta 17 - Analiza el siguiente código:

let m = new Map([[1, '11'], ['2', 22]]);
m.set(3, '33');
console.log(`${m.has(1)} ${m.has('1')} ${m.get(3)}`);


// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

/*
    Opciones:

    - true false 3
    - false false undefined
    - false true undefined
    - true false 33 / Respuesta
*/


// Pregunta 18 - Analiza el siguiente código:

m = new Map([[1, '11'], ['2', 22]]);
m.set(1, '11');
m.set(1, '111');
console.log(`${m.size}`);

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

/*
    Opciones:

    - 2 / Respuesta
    - 4
    - 3
    - undefined
*/


// Pregunta 19 - Un objeto user puede convertirse a formato JSON usando el comando:

/*
    Opciones:

    - user.toJSON();
    - JSON.parse(user);
    - JSON(user);
    - JSON.stringify(user); / Respuesta
*/


// Pregunta 20 - Los siguientes datos están almacenados en formato JSON:

let strPoint = '{ "x": 10, "y": 20}';

// Selecciona el comando correcto para que los datos sean convertidos en un objeto
// que será asignado a la variable point:

/*
    Opciones:

    - let point = Object(strPoint);
    - let point = JSON(strPoint);
    - let point = JSON.stringify(strPoint);
    - let point = JSON.parse(strPoint); / Respuesta
*/


// Questions 21 - Has creado un objeto de la clase RegExp que quieres usar
// para buscar mediante expresiones regulares:

let r = new RegExp('.\.js');
console.log(r)

// Selecciona la forma alternativa correcta de esta declaración:

/*
    Options:

    - let r = RegExp('.\js');
    - let r = /'.\.js'/; Respuesta
    - let r = \'.\.js'\;
    - let r = ('.\.js'); 
*/


// Questions 22 - Usando una expresión regular, quieres verificar si una cadena
// de caracteres termina con la secuencia .js. ¿Cuál de las siguientes expresiones
// regulares puede utilizarse para esto?

/*
    Options:

    - /.js/
    - /*.js/
    - /\.js$/ / Respuesta
    - /\.js/
*/


// Questions 23 - Analiza el siguiente código:

console.log(`${Math.floor(5.7)} ${Math.ceil(5.2)} ${Math.round(5.5)}`)

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

/*
    Options:

    - 5 6 6 / Respuesta
    - 5 5 5
    - 5 6 5
    - 5 5 6 
*/


// Pregunta 24 - Analiza el siguiente código en el cual intentas extender
// el prototipo de la clase Array con un nuevo método test:

let a = [1,2];
Array.prototype.test = function(){
    console.log('test');
}
let b = [3,4];
a.test();
b.test();

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

/*
    Opciones:

    - Aparecerá un error al intentar ejecutar a.test(), porque el método
      fue agregado después de la creación del objeto array a.
    - Aparecerán dos mensajes 'test' en la consola. / Respuesta
    - Aparecerá un solo mensaje 'test' en la consola (el objeto a no tiene
      el método test).
    - Aparecerá un error, porque el método test está ligado a la clase Array
      y no a los objetos creados a partir de ella (los objetos a y b no tienen el método test).
*/


