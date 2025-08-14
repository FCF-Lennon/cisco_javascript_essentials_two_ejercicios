
// Literales

/*
    JavaScript es un lenguaje muy flexible. La sintaxis nos permite
    lograr lo mismo de distintas maneras. Una de las formas más comunes
    de crear objetos es la notación literal (con llaves {}). 
    También se le llama notación inicializadora.
*/


// Forma básica de crear objetos:

// Crear un objeto vacío y asignarlo a una variable

let contact = {};

// Agregar propiedades a un objeto usando notación de punto

contact.tel = "207-662-5412";
console.log(contact);       // Muestra el objeto con su propiedad
console.log(contact.tel);   // Muestra el valor de la propiedad 'tel'


// Crear un objeto con propiedades inicializadas:

let contact2 = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
console.log(contact2);
console.log(contact2.tel);  // Acceso a propiedad por notación de punto

/*
    En notación literal:
    - Las propiedades se separan por comas.
    - La clave y el valor se separan por dos puntos.
*/


// Claves como cadenas de texto:

/*
    Las claves de un objeto son cadenas (strings).
    No es obligatorio usar comillas, excepto si el nombre
    contiene espacios u otros caracteres no válidos.
*/

// Esto es incorrecto:

/// let contact3 = {
///     first name: "Ronald"
/// };

// Forma correcta:

let contact3 = {
    "first name": "Ronald"
};

/*
    Sin embargo, no es recomendable usar espacios en las claves.
    Mejor usar CamelCase, por ejemplo: firstName.
    Así es más fácil de leer y de acceder a la propiedad.
*/


// Notación de punto y console.log como ejemplo:

console.log(typeof console);      // -> object
console.log(typeof console.log);  // -> function

/*
    'console' es un objeto y 'log' es una de sus propiedades.
    Esa propiedad es de tipo función, lo que demuestra que
    las propiedades de un objeto pueden ser:
    - Números
    - Booleanos
    - Cadenas
    - Arreglos
    - Otros objetos
    - Funciones
*/


// Eliminando objetos:

/*
    Al ejecutar nuestra aplicación, creamos muchos objetos.
    Cada objeto ocupa memoria y, en teoría, podría llenarla.
    Sin embargo, no es un problema habitual porque JavaScript
    usa un "Garbage Collector" que elimina automáticamente
    los objetos que ya no se utilizan.
    
    Nota:
    JavaScript NO permite eliminar objetos explícitamente.
*/
