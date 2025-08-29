// Configuración de propiedades y objetos (banderas y más)

// Configuración de propiedades:
/* 
    En ejemplos anteriores vimos cómo se enumeran las propiedades de un objeto.
    Usamos Object.keys y for ... in, que normalmente listan todas las propiedades.
    Sin embargo, podemos modificar esta enumeración configurando propiedades 
    individuales o todo el objeto.
*/

// Ejemplo de objeto con getters y setters
let contact = {
    _age: 36,
    firstName: "David",
    lastName: "Taylor",
    get fullName() { return `${this.firstName} ${this.lastName}`; },
    get age() { return this._age; },
    set age(a) { if (a > 0) this._age = a; }
};

let keys = Object.keys(contact);
console.log(keys);

/* 
    Output esperado: ["firstName", "lastName", "fullName", "age"]
    Nota: Object.keys solo devuelve propiedades enumerables 
*/

// Usando Object.getOwnPropertyDescriptor
let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(desc);

/* Output:
    {
        value: "David",
        writable: true,
        enumerable: true,
        configurable: true
    }
    Cada propiedad tiene atributos que determinan escritura, enumeración 
    y reconfiguración. 
*/

// Configuración de una propiedad con Object.defineProperty
let contact2 = {};
Object.defineProperty(contact2, "_age", {
    value: 36,
    writable: true,
    enumerable: false, // no será enumerada
    configurable: true
});
console.log(contact2._age); // 36
console.log(Object.keys(contact2)); // [] → no aparece porque enumerable=false

// Hacer la propiedad solo lectura
Object.defineProperty(contact2, "_age", {
    value: contact2._age,
    writable: false,
    enumerable: false,
    configurable: true
});
contact2._age = 100; // intento de modificar falla silenciosamente o error en strict mode
console.log(contact2._age); // 36

/* 
    Notas:
    - writable=false → no se puede modificar
    - enumerable=false → no aparece en Object.keys ni for ... in
    - configurable=false → no se puede reconfigurar ni eliminar
*/

// Obtener todas las propiedades sin importar enumerable
let enumKeys = Object.keys(contact2);
let allKeys = Object.getOwnPropertyNames(contact2);
console.log(enumKeys); // []
console.log(allKeys); // ["_age"]

// Configuración de objetos:

/*
    Podemos configurar todo un objeto usando métodos:
    - Object.preventExtensions(obj): no permite agregar nuevas propiedades
    - Object.seal(obj): no permite agregar, eliminar o reconfigurar propiedades
    - Object.freeze(obj): además, impide cambiar valores existentes

    Verificar configuración:
    - Object.isExtensible(obj)
    - Object.isSealed(obj)
    - Object.isFrozen(obj)
*/

// Ejemplos:

let obj = { a: 1, b: 2 };

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false

Object.seal(obj);
console.log(Object.isSealed(obj)); // true

Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true

/* 
    Resumen:

    - Object.keys y for...in solo operan sobre propiedades enumerables.
    - Object.getOwnPropertyNames devuelve todas las propiedades.
    - Object.defineProperty permite personalizar escritura, enumeración 
      y configuración.
    - Métodos preventExtensions, seal y freeze afectan al objeto completo.
*/
