
// Otras formas de crear objetos:

/* 
    Hasta ahora hemos creado objetos usando la notación literal: {}.
    Este método es simple y legible, pero no es el único.
    Veremos alternativas para crear objetos en JavaScript.
*/


// Fábrica (Factory) patron de diseño:


/* 
    Una "fábrica" es una función que crea y devuelve objetos.
    Es un patrón de programación, no un mecanismo del lenguaje.
*/

// Ejemplo básico de fábrica
let createPoint = function(x, y) {
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};

let point1 = createPoint(1, 1);
let point2 = createPoint(2, 2);

console.log(point1.x); // -> 1
console.log(point2.x); // -> 2

/* 
    La función crea un objeto vacío, agrega propiedades y lo devuelve.
*/

// Versión simplificada
let createPoint2 = function(x, y) {
    return {
        x: x,
        y: y
    }
};

// Sintaxis abreviada
let createPoint3 = function(x, y) {
    return { x, y }
};

// Con función flecha
let createPoint4 = (x, y) => ({ x, y });

// Ejemplo con propiedades privadas (closure)
let createColoredPoint = function(x, y, color) {
    let _info = "... objeto en construcción";
    let _color = color;
    console.log(_info);

    return {
        x,
        y,
        getColor() { return _color }
    }
};

let coloredPoint1 = createColoredPoint(1, 1, "rojo");   // -> ... objeto en construcción
let coloredPoint2 = createColoredPoint(2, 2, "verde");  // -> ... objeto en construcción

console.log(coloredPoint1.getColor()); // -> rojo
console.log(coloredPoint2.getColor()); // -> verde
console.log(coloredPoint1._color);     // -> undefined !!!

/* 
    Explicación:
    - Cada llamada crea un nuevo "entorno" con variables locales.
    - _color se conserva gracias a las clausuras (closures).
    - Es un ejemplo de propiedad privada: solo accesible con métodos.
*/


// Constructor y palabra clave "new":

/* 
    Un constructor es como una fábrica, pero usa "new".
    - No necesita "return".
    - Usa "this" para referirse al nuevo objeto creado.
*/

let ColoredPoint = function(x, y, color) {
    let _info = "... objeto en construcción";
    let _color = color;
    console.log(_info);

    this.x = x;
    this.y = y;
    this.getColor = function() { return _color };
};

let cPoint1 = new ColoredPoint(1, 1, "rojo");
let cPoint2 = new ColoredPoint(2, 2, "verde");

console.log(cPoint1.getColor()); // -> rojo
console.log(cPoint2.getColor()); // -> verde
console.log(cPoint1._color);     // -> undefined !!!

/* 
    Convención: los constructores se nombran con mayúscula inicial.
    Los objetos heredan propiedades de Object automáticamente.
*/

// Verificando el constructor
console.log(cPoint1.constructor.name);   // -> "ColoredPoint"
console.log(typeof cPoint1.constructor); // -> function

// Ejemplo con objeto vacío
let a = {};
console.log(typeof a.constructor); // -> function

/* 
    Nota: {} o new no crean un objeto "realmente vacío".
    Siempre heredan de Object.
*/


// new Object():

/* 
    Podemos usar el constructor genérico Object.
    El resultado es equivalente a usar {}.
*/

let emptyObject = new Object();
console.log(emptyObject.constructor.name); // -> Object

let anotherEmptyObject = {};
console.log(anotherEmptyObject.constructor.name); // -> Object


// Object.create:

/* 
    Object.create permite crear un objeto a partir de otro (prototipo).
    Si pasamos null, no habrá prototipo -> objeto realmente vacío.
*/

let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor); // -> undefined

/* 
    Aquí no existe la propiedad constructor.
    Se recomienda usar {} o new, salvo que necesitemos un objeto
    realmente sin prototipo.
*/


// Clases:

/* 
    Otra forma de crear objetos es con clases.
    Son la manera estándar en muchos lenguajes.
    En JavaScript se introdujeron en ECMAScript 6 (ES6).
    Este tema se verá en detalle en el siguiente capítulo.
*/
