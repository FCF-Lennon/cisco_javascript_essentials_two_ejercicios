
// Propiedades

/*
    Los objetos, además de métodos, también contienen propiedades.
    Por ello, las clases deben ser capaces de definirlas.

    En ES6, la sintaxis de clases no permitía declarar explícitamente
    propiedades dentro del cuerpo de la clase. Esa posibilidad se agregó
    recientemente, pero aún es experimental.

    Existen dos formas principales de declarar propiedades:
        
    1) Dentro del constructor o métodos.
    2) Directamente en el cuerpo de la clase (nueva técnica).

    Ambos enfoques pueden usarse en una misma clase.
*/

// Definiciones dentro de métodos de clase:

/*
    Originalmente se asumía que las propiedades se definirían dentro
    de constructores y métodos. No es una "declaración formal": 
    si asignamos un valor a una propiedad inexistente, esta se crea automáticamente.
*/

class Vehicle {
    constructor({id, latitude, longitude}){
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
};

/*
    En este ejemplo:
    
    - En el constructor se crean e inicializan `id` y `status`.
    - Al llamar `setPosition` por primera vez, se crean `time`, `longitude` y `latitude`.
    - En llamadas posteriores, esas propiedades solo se actualizan.

    Ventaja: sencillo y funcional.
    Desventaja: las propiedades pueden quedar dispersas entre métodos,
    lo que reduce la legibilidad.
*/


// Declaración directa en el cuerpo de la clase:

/*
    Posteriormente, se agregó la posibilidad de declarar propiedades
    directamente en el cuerpo de la clase, igual que los métodos.

    Además, se introdujo la distinción entre:
    - Propiedades públicas: accesibles desde fuera del objeto.
    - Propiedades privadas: accesibles solo dentro de la clase.
*/

class Vehicle2 {
    status = "unavailable"; // declaración pública en el cuerpo de la clase
    constructor({id, latitude, longitude}){
        this.id = id;
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
};

/*
    La propiedad `status` siempre empieza con el mismo valor ("unavailable"),
    y ya no es necesario declararla en el constructor.

    Nota: Declarar propiedades en el cuerpo de la clase aún es experimental.
    No todos los navegadores lo soportan sin herramientas como Babel.
*/


// Propiedades privadas:

/*
    Las propiedades privadas se definen en el cuerpo de la clase
    usando el prefijo # en su nombre. 

    Ejemplo: `#longitude` y `#latitude` son privadas.
*/

class Vehicle3 {
    status = "unavailable"; // pública
    #longitude; // privada
    #latitude;  // privada

    constructor({id, latitude, longitude}){
        this.id = id;
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.#longitude = longitude;
        this.#latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.#latitude,
            longitude: this.#longitude
        };
    };
};

let vehicle = new Vehicle3({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
console.log(vehicle.getPosition());
// console.log(vehicle.#longitude); // error: propiedad privada, no accesible desde fuera

/*
    En este ejemplo:
    - `#longitude` y `#latitude` se crean en la primera llamada a setPosition.
    - Los métodos internos (`getPosition` y `setPosition`) sí tienen acceso.
    - Cualquier intento de acceder desde fuera del objeto lanza un error.

    Conclusión: útil para proteger datos internos.
*/

// Nota final:

/*
    En este curso seguiremos usando el enfoque clásico 
    (declaraciones en constructor y métodos).
    Sin embargo, es importante conocer las declaraciones directas
    porque probablemente se conviertan en estándar muy pronto.
*/
