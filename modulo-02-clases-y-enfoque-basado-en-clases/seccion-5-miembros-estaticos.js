// Miembros estáticos

/*
    En las clases de JavaScript, además de los métodos y propiedades regulares
    (conocidos como los del prototipo), también podemos definir **métodos y 
    propiedades estáticos**.

    Estos miembros **no aparecen en los objetos creados a partir de la clase**,
    sino que están **asociados directamente a la clase misma**.
*/


// Ejemplo básico: métodos regulares vs métodos estáticos:

class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!");
    };
    static sayHello() {
        console.log("Hello!");
    };
};

let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!
almostEmptyObject.sayHello(); // error
AlmostEmptyClass.sayHello(); // -> Hello!

/*
    Explicación breve:
    - `sayHi` es un método normal, accesible desde la instancia del objeto.
    - `sayHello` es un método estático, accesible solo desde la clase.

    Los métodos estáticos no se heredan por las instancias, sino que pertenecen
    a la clase como entidad.
*/


// ¿Por qué usar métodos estáticos?

/*
    Los métodos estáticos resultan útiles cuando una operación no depende
    de una instancia específica, sino del **tipo de objeto** en sí.

    Un caso común es cuando se necesitan métodos “de utilidad” que trabajen
    con varias instancias de la misma clase. Por ejemplo: comparar dos objetos.
*/


// Ejemplo: método estático para comparar vehículos:

class Vehicle {
    constructor({id, latitude, longitude}) {
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    static isSameId(v1, v2) {
        return v1.id === v2.id;
    };
};

// Creación de tres vehículos
let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});

// Comparación usando el método estático
Vehicle.isSameId(vehicle1, vehicle2); // -> true
Vehicle.isSameId(vehicle1, vehicle3); // -> false

/*
    Explicación breve:
    - `isSameId` no pertenece a los objetos, sino a la clase `Vehicle`.
    - Se usa para comparar dos instancias de `Vehicle` y determinar si
    representan el mismo vehículo según su propiedad `id`.

    Esto demuestra que los métodos estáticos son útiles para operaciones
    que implican **más de un objeto** de la misma clase.
*/


// Nota adicional: las clases también son objetos:

/*
    El uso de `Vehicle.isSameId` con notación de punto (`.`) nos recuerda que
    **las clases en JavaScript también son objetos**.

    Por lo tanto, también es posible agregar un método estático
    después de haber declarado la clase.
*/

// Definición del método estático fuera de la clase
Vehicle.isSameId = function(v1, v2) {
    return v1.id === v2.id;
};

/*
    En este caso, logramos el mismo resultado que antes,
    pero definimos el método **tras la declaración de la clase**.

    Este enfoque demuestra la flexibilidad del modelo de objetos en JavaScript.
*/
