// Propiedades

/*
    Vamos a analizar más de cerca las propiedades de los objetos.
*/


// Tipos:

/*
    A las variables podemos asignar:
    - Valores primitivos: número, booleano o cadena.
    - Valores complejos: arreglos, objetos.
    - Funciones.
*/

let nr = 10; 
let b = false; 
let str = "uno dos tres"; 
let arr = [10, 20, 30]; 
let obj = {
    x: 10, 
    y: 20
}; 
let fn = function(arg) {
    console.log(arg);
};
fn(123); // -> 123  (Ejecuta la función con el argumento 123)

/*
    Las propiedades de un objeto funcionan igual que las variables:
    pueden contener cualquier tipo de valor.
*/

// Crear un objeto con propiedades equivalentes a las variables anteriores

let test = {
    nr: 10, 
    b: false, 
    str: "uno dos tres", 
    arr: [10, 20, 30], 
    obj: {
        x: 10, 
        y: 20
    }, 
    fn: function(arg) { console.log(arg) } 
};
test.fn(123); // -> 123


// Propiedades anidadas:

/*
    Una propiedad puede ser a su vez un objeto que contenga más propiedades.
    A esto se le llama propiedades anidadas.
*/

console.log(test.obj.x); // -> 10
test.obj.y = 40;         // Modificamos una propiedad interna

/*
    Puede haber múltiples niveles de anidamiento.
*/


// Función como tipo de propiedad – método:

/*
    Si una propiedad es una función, se le llama "método".
    Los métodos representan comportamientos o acciones del objeto.
*/

let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance; // 'this' apunta al objeto actual
    },
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
};

console.log(point.x);      // -> 0
point.moveHorizontally(30);
console.log(point.x);      // -> 30

/*
    'this.x' hace referencia a la propiedad 'x' del objeto donde
    está definido el método.
*/


// Añadir una nueva propiedad:

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

// Agregamos nuevas propiedades

contact.firstName = "Ronald";
contact.lastName = "Murphy";

console.log(contact.tel);        // -> 207-662-5412
console.log(contact.firstName);  // -> Ronald

// Acceder a una propiedad inexistente devuelve 'undefined'

console.log(contact.notes);      // -> undefined


// Modificar una propiedad:

/*
    No hay restricciones para modificar el tipo de dato de una propiedad.
*/

contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com"]; // Sobrescribimos con arreglo

// Más lógico si distinguimos entre tipo privado y de trabajo

contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
};
console.log(contact.email.work); // -> rsmurphy@briazz.com


// Eliminar una propiedad:

/*
    Para eliminar una propiedad se usa 'delete'.
    Elimina solo la clave indicada.
*/

delete contact.email.work;
console.log(contact.email.work);    // -> undefined
console.log(contact.email.private); // -> "RonaldSMurphy@freepost.org"
