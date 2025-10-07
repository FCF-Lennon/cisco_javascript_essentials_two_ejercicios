// HERENCIA

/*
    La herencia permite crear nuevas clases basadas en clases existentes.
    En JavaScript, esto se logra con la palabra clave `extends`.
    Aunque el mecanismo sigue funcionando sobre prototipos, su sintaxis es
    mucho más clara y moderna con clases.
*/


// Herencia básica:

// Clase base genérica

/* 
    class Vehicle {
        constructor({ id, latitude, longitude }) {
            this.id = id;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    } 
*/

/*
    Ejemplo: Queremos diferenciar entre vehículos de pasajeros y de carga.
    Creamos una clase `Bus` que extiende `Vehicle` y agrega una propiedad
    extra: `seats` (asientos).
*/

class Bus extends Vehicle {
    constructor({ seats }) {
        this.seats = seats;
    }
}

let bus = new Bus({ seats: 40 });
console.log(bus.seats); // -> 40
console.log(bus.id);    // -> undefined

/*
    Explicación:
    Aunque `seats` se inicializa correctamente, las propiedades heredadas
    de `Vehicle` (como `id`) son `undefined` porque no se han inicializado
    en el constructor del padre.
*/


// Corrigiendo el constructor:

/*
    El problema ocurre porque no pasamos los argumentos necesarios
    al constructor de la clase base.
    Para solucionar esto, usamos `super()`, que llama al constructor
    de la clase padre.
*/

class Bus extends Vehicle {
    constructor({ seats, id, latitude, longitude }) {
        super({ id, latitude, longitude }); // llama al constructor de Vehicle
        this.seats = seats;
    }
}

let bus2 = new Car({
    seats: 4,
    longitude: 18.213423,
    latitude: 59.367628,
    id: "AL1024"
});

console.log(bus2.seats); // -> 4
console.log(bus2.id);    // -> "AL1024"

/*
    Explicación:
    `super()` permite inicializar correctamente las propiedades heredadas.
    En JavaScript, la clase base se conoce también como "superclase".
*/


// Sombreado (Shadowing):

/*
    El "shadowing" ocurre cuando una subclase define un método con el mismo
    nombre que uno de la clase base. El nuevo método "sombrea" al anterior.
    Podemos seguir accediendo al método original usando `super`.
*/

class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    }

    sayHi() {
        console.log("Hi!");
    }
}

class ExtendedClass extends AlmostEmptyClass {
    constructor(name) {
        super("I’m super ..."); // llama al constructor de la clase base
        this.name = name;
    }

    // Método que sombrea al método base
    sayHi() {
        console.log(`Hi ${this.name}!`);
    }

    // Usa `this` → llama al método redefinido (sombreador)
    newHi() {
        this.sayHi();
    }

    // Usa `super` → llama al método original de la clase base
    oldHi() {
        super.sayHi();
    }
}

let obj = new ExtendedClass("Bob"); // -> I’m super ...
obj.sayHi();    // -> Hi Bob!
obj.newHi();    // -> Hi Bob!
obj.oldHi();    // -> Hi!

/*
    Explicación rápida:
    - `sayHi()` → llama al nuevo método de la subclase.
    - `newHi()` → usa `this`, por lo que sigue llamando al método redefinido.
    - `oldHi()` → usa `super`, accediendo al método original de la clase base.
*/


// Herencia desde una función constructora:

/*
    Las clases también pueden extender funciones constructoras tradicionales.
    Esto permite compatibilidad con código más antiguo.
*/

let AlmostEmpty = function (sth) {
    console.log(sth);
    this.sayHi = function () {
        console.log("Hi!");
    };
};

// Extendemos una clase a partir de una función constructora
class ExtendedFromConstructor extends AlmostEmpty {
    constructor(name) {
        super("I am super ..."); // llama a la función constructora base
        this.name = name;
    }

    sayHi() {
        console.log(`Hi ${this.name}!`);
    }
}

let obj2 = new ExtendedFromConstructor("Bob");
obj2.sayHi(); // -> Hi Bob!

/*
    Explicación:
    El uso de `extends` también es posible con funciones constructoras,
    aunque su aplicación práctica es menos común en proyectos modernos.
*/


// Conclusión:


/*
    Resumen:
    - `extends` permite crear clases basadas en otras (herencia).
    - `super()` llama al constructor o métodos de la clase base.
    - Los métodos con el mismo nombre "sombrean" los antiguos.
    - `super.metodo()` permite acceder al método original.
    - También se puede extender desde funciones constructoras.

    Este conocimiento es esencial para comprender la reutilización
    de código y el polimorfismo en JavaScript orientado a objetos.
*/
