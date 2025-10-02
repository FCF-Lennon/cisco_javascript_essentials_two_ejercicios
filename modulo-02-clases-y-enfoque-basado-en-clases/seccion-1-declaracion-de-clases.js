
// Declaración de clases en JavaScript

/*
    En este capítulo se introduce cómo declarar clases en JavaScript.

    Ejemplo inicial: una empresa de transporte con vehículos.
    Cada vehículo tiene:
    - id (identificador único)
    - estado ("free", "busy", "unavailable")
    - posición geográfica (latitud y longitud)
    - tiempo de última actualización
*/


// Declaración de clases (Class declaration)

/*
    Antes de usar la palabra clave class, se solía trabajar con
    funciones constructoras.
*/

// Ejemplo con función constructora
let Vehicle = function(id, latitude, longitude) {
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable";
    this.time = Date.now();
    this.latitude = latitude;    
    this.longitude = longitude;
};
let vehicle1 = new Vehicle("AL1024", 59.358615, 17.947589);
vehicle1.setPosition(59.367647, 18.213451);
console.log(vehicle1);
/* 
    - new Vehicle crea un objeto con las propiedades definidas.
    - Date.now() devuelve milisegundos desde 1/1/1970 (época UNIX).
*/

// Evitando redundancia usando setPosition
let Vehicle2 = function(id, latitude, longitude) {
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition(latitude, longitude); // sin repetir código
};

// Usando un objeto como parámetro 
let Vehicle3 = function(initialData) {
    let {id, latitude, longitude} = initialData;
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable"; 
    this.setPosition(latitude, longitude);
};
let v1 = new Vehicle3({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let v2 = new Vehicle3({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
/* 
    - Usamos destructuring: {id, latitude, longitude}.
    - El orden ya no importa, solo los nombres.
*/

// Destructuring directo en parámetros + nuevo método getPosition 
let Vehicle4 = function({id, latitude, longitude}) {
    this.setPosition = function({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.getPosition = function() {
        return {latitude: this.latitude, longitude: this.longitude};
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition({latitude, longitude});
};
let v3 = new Vehicle4({id: "AL1024", latitude: 59.367647, longitude: 18.213451});

// Declaración con class
class VehicleClass {
    constructor({id, latitude, longitude}) {
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    }
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    }
    getPosition() {
        return {latitude: this.latitude, longitude: this.longitude};
    }
}
let vehicle = new VehicleClass({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
console.log(vehicle.getPosition());
/*
    - La sintaxis con class es más limpia.
    - Los métodos se definen fuera del constructor.
*/


// Expresiones de clase (Class expression)


/*
    Al igual que las funciones, las clases son "ciudadanos de primera clase":
    pueden guardarse en variables, pasarse como argumento, etc.
*/

// Ejemplo con funciones
function namedFunction() { console.log("Soy nombrada"); }
let anonymousFunction = function() { console.log("Soy anónima"); }
let anotherNamedFunction = function inner() { console.log("Tengo nombre interno"); }

namedFunction();          // -> Soy nombrada
anonymousFunction();      // -> Soy anónima
anotherNamedFunction();   // -> Tengo nombre interno

// Ejemplo con class expression
let AlmostEmptyClass = class {
    constructor(sth) {
        console.log(sth);
    }
    sayHi() {
        console.log("¡Hola!");
    }
};
let obj = new AlmostEmptyClass(120); // -> 120
obj.sayHi(); // -> ¡Hola!


// Operador instanceof

/*
    instanceof permite comprobar si un objeto es instancia de una clase.
*/

// typeof solo dirá "object"
console.log(typeof obj); // -> "object"

// constructor.name devuelve el nombre de la clase
console.log(obj.constructor.name); // -> "AlmostEmptyClass"

// instanceof comprueba relación con una clase
console.log(obj instanceof AlmostEmptyClass); // -> true
console.log(obj instanceof String);           // -> false

let str = new String("test me");
console.log(str instanceof String); // -> true

// instanceof también verifica la cadena de herencia
console.log(obj instanceof Object); // -> true
/*
    - Todas las clases en JS heredan de Object.
    - instanceof recorre la jerarquía hasta encontrar coincidencia.
*/

