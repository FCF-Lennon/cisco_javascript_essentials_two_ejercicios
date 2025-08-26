
// Métodos en JavaScript:

/*
    Las propiedades de un objeto pueden ser de cualquier tipo.
    Cuando una propiedad es una función, la llamamos MÉTODO.
    El uso más razonable de objetos comienza al darles métodos.
*/


// Métodos:

// Ejemplo clásico: un objeto con un método definido como función
let circle = {
    radius: 100,
    center: {
        x: 0,
        y: 0
    },
    getType: function() {
        return "circle";
    }
};

// Forma simplificada de declarar métodos
let circle2 = {
    radius: 100,
    center: {
        x: 0,
        y: 0
    },
    getType() {
        return "circle";
    }
};

// Invocación con notación de punto
console.log(circle2.getType()); // "circle"

// Invocación con notación de corchetes
console.log(circle2["getType"]()); // "circle"


// La palabra clave this:

/*
    Los métodos son útiles cuando acceden a los campos del objeto.
    El error común: referirse al objeto por su nombre en vez de usar this.
*/

// Mal ejemplo: uso del nombre del objeto
let circle3 = {
    radius: 100,
    center: { x: 0, y: 0 },
    getType() {
        return (typeof circle3.radius === "number") ? "circle" : "unknown";
    }
};

console.log(circle3.getType()); // "circle"

// Problema al copiar el objeto
let figure = { ...circle3 };
delete circle3.radius;
console.log(figure.radius);      // 100
console.log(figure.getType());   // "unknown" (error conceptual)

/*
    La solución es usar this, que siempre referencia
    al objeto en el que se ejecuta el método.
*/

let circle4 = {
    radius: 100,
    center: { x: 0, y: 0 },
    getType() {
        return (typeof this.radius === "number") ? "circle" : "unknown";
    }
};

console.log(circle4.getType()); // "circle"

let figure2 = { ...circle4 };
delete circle4.radius;
console.log(figure2.radius);     // 100
console.log(figure2.getType());  // "circle" 


// Funciones flecha y this:

/*
    Las funciones flecha no crean su propio this (usan ámbito léxico).
    Por eso NO deben usarse como métodos de objetos.
*/

// Ejemplo de función normal vs flecha
let add = function(a, b) {
    return a + b;
};

let addArrow = (a, b) => a + b;


// this en objetos anidados:

/*
    Los objetos pueden contener otros objetos (anidamiento).
    this siempre apunta al objeto donde el método está definido.
*/

let circle5 = {
    radius: 100,
    center: {
        x: 0,
        y: 0,
        show() {
            console.log(`${this.x}, ${this.y}`);
        }
    }
};

circle5.center.show(); // "0, 0"

/*
    Pero desde center.show() no se puede acceder al radius del padre.
    Esto es lógico: cada método ve solo su objeto.
    Además, si el mismo objeto se referencia en otro lugar,
    su "padre" sería ambiguo.
*/

let test = {
    point: circle5.center
};

// test.point === circle5.center (referencia compartida)


// Getters y Setters:

/*
    Los getters y setters son métodos especiales:
    - Getter: no recibe argumentos y se accede como propiedad.
    - Setter: recibe 1 argumento y se asigna como propiedad.
    - Se definen con las palabras clave get y set.
*/

// Getter simple
let contact1 = {
    _tel: "207-662-5412",
    get tel() { return this._tel; }
};

console.log(contact1.tel);       // "207-662-5412"
contact1.tel = "100-100-1000";   // No funciona, no hay setter
console.log(contact1.tel);       // sigue siendo "207-662-5412"

// Creación dinámica de propiedad (email)
contact1.email = "RonaldSMurphy@freepost.org";
console.log(contact1.email);     // "RonaldSMurphy@freepost.org"

// Getter + Setter
let contact2 = {
    _tel: "207-662-5412",
    get tel() { return this._tel; },
    set tel(t) { this._tel = t; }
};

console.log(contact2.tel);       // "207-662-5412"
contact2.tel = "100-100-1000";   // ahora sí funciona
console.log(contact2.tel);       // "100-100-1000"


// Ejemplo avanzado: campos falsos, validación, datos agregados
let contact3 = {
    _age: 36,
    firstName: "David",
    lastName: "Taylor",
    get fullName() { return `${this.firstName} ${this.lastName}`; },
    get age() { return this._age; },
    set age(a) {
        if (a > 0) this._age = a;
    }
};

console.log(contact3.fullName);  // "David Taylor"
contact3.age = -20;              // inválido, no cambia
console.log(contact3.age);       // 36 (sin cambios)

/*
    Conclusión:
    - Los métodos hacen a los objetos más útiles.
    - this apunta al objeto actual, no al nombre de la variable.
    - Evita funciones flecha para métodos.
    - Los getters/setters permiten crear propiedades virtuales y controladas.
*/
