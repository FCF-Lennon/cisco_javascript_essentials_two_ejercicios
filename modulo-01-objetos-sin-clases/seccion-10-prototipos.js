// Prototipos en JavaScript:


/* 
    Prototipos:

    En la mayoría de lenguajes (Python, Java, C#, C++) se usan clases para crear objetos.
    Una clase funciona como plantilla: define propiedades y métodos, y permite herencia.

    JavaScript originalmente no usaba clases, sino prototipos: objetos existentes que sirven 
    de base a nuevos objetos. Desde ES6 existen clases, pero los prototipos siguen siendo
    fundamentales en el lenguaje.
*/

// Ejemplo simple con notación literal
let point = { x: 0, y: 0 };
let coloredPoint = { color: "red" };

/* 
    Cada objeto hereda por defecto del constructor Object. 
    Uno de los campos heredados es __proto__, que conecta objetos en una "cadena de prototipos".
*/

coloredPoint.__proto__ = point; // ⚠️ No recomendado en código real

console.log(Object.getOwnPropertyNames(coloredPoint)); // ["color"]
console.log(coloredPoint.color); // "red"
console.log(coloredPoint.x);     // 0 (heredado de point)

// Sobrescritura: se crea una nueva propiedad en lugar de modificar la del prototipo
coloredPoint.x = 100;
console.log(coloredPoint.x); // 100
console.log(point.x);        // 0

// Si modificamos el prototipo, los cambios se reflejan en el objeto derivado
point.y = 200;
console.log(coloredPoint.y); // 200
console.log(point.y);        // 200


// Uso de __proto__ (no recomendado):

/* 
    Creamos un objeto figure con un método getType y un objeto circle con propiedades.
    Luego, asignamos figure como prototipo de circle mediante __proto__.
*/

let figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
let circle = {
    type: "circle",
    center: { x: 0, y: 0 },
    radius: 100
};
circle.__proto__ = figure;

console.log(figure.getType()); // "unknown"
console.log(circle.getType()); // "circle"

/* 
    Nota: this se refiere al objeto que invoca el método, 
    no al objeto donde fue definido originalmente.
*/


// Object.setPrototypeOf / getPrototypeOf:


/* 
    Alternativa moderna a __proto__:
    - Object.setPrototypeOf(obj, proto): establece el prototipo.
    - Object.getPrototypeOf(obj): obtiene el prototipo.
*/

Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(circle.getType()); // "circle"


// Object.create:

/* 
    Permite crear un objeto vacío basado en un prototipo.
*/

let circle2 = Object.create(figure);
circle2.type = "circle";
circle2.center = { x: 0, y: 0 };
circle2.radius = 100;

console.log(circle2.getType()); // "circle"


// Constructores:

/* 
    Otra forma es usar funciones constructoras y la propiedad prototype.
*/

let Figure = function() {
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let baseFigure = new Figure();

// Constructor para círculos
let Circle = function(center, radius) {
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = baseFigure;

let circle1 = new Circle({ x: 0, y: 0 }, 10);
let circle3 = new Circle({ x: 100, y: 100 }, 100);

// Constructor para triángulos
let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [v1, v2, v3];
};
Triangle.prototype = baseFigure;

let triangle1 = new Triangle({ x: 0, y: 0 }, { x: 50, y: 50 }, { x: 10, y: 100 });

console.log(circle1.getType());   // "circle"
console.log(triangle1.getType()); // "triangle"


// Extender prototipos existentes


/* 
    Podemos añadir métodos a prototipos y se reflejan en todos los objetos que hereden de ellos.
*/

Circle.prototype.hi = function() { console.log("Hi!"); };

circle1.hi();    // Hi!
triangle1.hi();  // Hi! (hereda de Figure)
baseFigure.hi(); // Hi!


// Prototipos en objetos predefinidos

let testString = new String("unu doi trei");
console.log(testString.length); // 13

// Agregar un método al prototipo de String
String.prototype.hi = function() { console.log("Hi!"); };

// Autoboxing: incluso un string primitivo accede al método
console.log("abcd".hi()); // "Hi!"

/* 
    Resumen:
    - __proto__ existe pero está obsoleto (solo educativo).
    - Usar Object.create o constructores con prototype es la mejor práctica.
    - Prototipos permiten herencia y la extensión de funcionalidades en objetos existentes.
*/

