// Prueba de existencia de propiedades y enumeración de propiedades


/* 
    Prueba de existencia de propiedades:

    Cuando intentamos leer una propiedad que no existe en un objeto, 
    JavaScript devuelve `undefined`. Lo mismo ocurre si la propiedad existe, 
    pero no tiene ningún valor asignado.
*/

if (contact.notes) { // si es distinto de undefined
    console.log(contact.notes);
}

/* 
    En ambos casos (no existe o no tiene valor), podemos asignar 
    un valor nuevo. Si no existía, se creará automáticamente.
*/

if (!contact.notes) { // si es undefined
    contact.notes = "algo realmente importante";
}

/* 
    Nota: Es recomendable comprobar si una propiedad existe antes de usarla, 
    sobre todo en objetos anidados. 
*/

console.log(contact.notes); // -> undefined (no hay error, solo undefined)

// Este ejemplo lanza una excepción, ya que `email` no existe en contact
// console.log(contact.email.private); // excepción

// Solución segura usando if

if (contact && contact.email) {
    console.log(contact.email.private);
}

// Forma abreviada con evaluación en cortocircuito

contact && contact.email && console.log(contact.email.private);

// Forma moderna con encadenamiento opcional (ES2020+)
// console.log(contact?.email?.private);


/* 
    Prueba de existencia usando "in":

    El operador `in` comprueba de forma explícita si un campo existe.
    Devuelve `true` incluso si no tiene valor.
*/

if ("notes" in contact) { // true si la propiedad existe
    console.log(contact.notes);
}

// Importante: el nombre de la propiedad debe ir como string.


/* 
    Enumeración con "for ... in":
    
    Con `for ... in` podemos recorrer las propiedades de un objeto. 
    Se recorren las claves (nombres de las propiedades).
*/

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

for (x in contact) {
    // mostrar nombre de la propiedad
    console.log(x);
}

for (x in contact) {
    // mostrar valor de la propiedad
    console.log(contact[x]);
}

for (x in contact) {
    // mostrar nombre, tipo y valor de la propiedad
    console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}


/* 
    Método Object.keys:
    
    Otra manera de obtener todas las propiedades es con `Object.keys()`. 
    Devuelve un array con los nombres de las propiedades.
*/

let keys = Object.keys(contact);
console.log(keys); // ["tel", "email"]
