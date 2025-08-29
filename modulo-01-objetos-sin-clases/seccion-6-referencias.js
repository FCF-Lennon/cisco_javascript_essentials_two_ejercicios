
// Referencias en JavaScript

/* 
    En esta sección aprenderemos sobre:
    - El comportamiento de `const` con valores y objetos.
    - Comparación de objetos.
    - Copia, clonación y combinación de objetos.
*/

// Ejemplo inicial con const:

/* 
    El valor de una variable declarada con `const` no puede reasignarse.
*/

const x = 10;
x = 20; // ❌ TypeError: Assignment to constant variable.

/*
    Para objetos, el comportamiento es similar: 
    no se puede reasignar la referencia completa.
*/

const contacto1 = {};
contacto1 = { email: "RonaldSMurphy@freepost.org" }; // ❌ TypeError

/*
    Sin embargo, SÍ podemos modificar las propiedades internas del objeto.
*/

const contacto2 = {};
contacto2.email = "RonaldSMurphy@freepost.org";
console.log(contacto2.email); // RonaldSMurphy@freepost.org

contacto2.email = "rsmurphy@briazz.com";
console.log(contacto2.email); // rsmurphy@briazz.com

delete contacto2.email;
console.log(contacto2.email); // undefined


// Los objetos const pueden modificarse:

/*
    Resumen:
    - `const` protege la referencia (la dirección en memoria), 
    no el contenido del objeto.
    - Podemos modificar las propiedades internas.
    - No podemos reasignar el objeto completo.
    Ejemplo: un documento con tu dirección escrita. No puedes cambiar la dirección,
    pero sí pintar, remodelar o modificar la casa real.
*/


// Comparando objetos:

var punto1 = { x: 10, y: 20 };
var punto2 = { x: 10, y: 20 };

console.log(punto1 === punto2); // false (diferentes referencias)

let punto3 = punto1;
console.log(punto1 === punto3); // true (misma referencia)

punto3.z = 40;
console.log(punto3.z); // 40
console.log(punto1.z); // 40
console.log(punto2.z); // undefined

/*
    Conclusión:

    - Comparar objetos, arrays, tuplas o sets con `===` compara referencias
      de memoria, no el contenido.
    - Comparar datos primitivos (`string`, `number`, `boolean`, etc.) con 
      `===` compara directamente el **valor y el tipo de dato**.
    - No existe comparación profunda nativa en JS, pero se puede implementar 
      con funciones o librerías.
*/


// Copiando objetos (copias, clonación, combinación):

/* 
    Asignar un objeto a otra variable solo copia la referencia.
    Para copiar propiedades necesitamos `Object.assign` o el spread operator `...`.
*/

let p0 = { x: 10, y: 20 };
let p1 = p0; // copia de referencia
let p2 = {};
Object.assign(p2, p0); // copia propiedades a un nuevo objeto

console.log(p2.x, p2.y);   // 10 20
console.log(p1 === p0);    // true (misma referencia)
console.log(p1 === p2);    // false (diferente objeto)

// Añadiendo propiedades al copiar
let p3 = {};
Object.assign(p3, p0, { z: 100 });
console.log(p3); // { x: 10, y: 20, z: 100 }

// Sobrescribir propiedades
let p4 = {};
Object.assign(p4, p3, { z: 200, color: "red" });
console.log(p4); // { x: 10, y: 20, z: 200, color: "red" }

// Usando Object.assign devolviendo directamente
let p5 = Object.assign({}, p0);
let p6 = Object.assign({}, p0, { z: 300 });
console.log(p6); // { x: 10, y: 20, z: 300 }


// Spread operator (alternativa a Object.assign):

let p7 = { ...p0 };
let p8 = { ...p0, z: 400 };

console.log(p7); // { x: 10, y: 20 }
console.log(p8); // { x: 10, y: 20, z: 400 }

let p9 = { ...p8, ...{ z: 500, color: "blue" } };
console.log(p9); // { x: 10, y: 20, z: 500, color: "blue" }

/*
    Spread operator es una forma más concisa de clonar y fusionar objetos.
*/


// Limitación: Copia superficial (shallow copy):

let circulo1 = {
    radio: 100,
    centro: { x: 100, y: 100 }
};

let circulo2 = { ...circulo1 }; // copia superficial

circulo1.radio = 200;
circulo1.centro.x = 300;

console.log(circulo2.radio);      // 100 (independiente)
console.log(circulo2.centro.x);   // 300 (referencia compartida)

console.log(circulo1 === circulo2);         // false
console.log(circulo1.centro === circulo2.centro); // true

/*
    Conclusión:
    - La copia superficial no clona objetos anidados, solo sus referencias.
*/

// Clonación profunda (deep clone) con recursión:

let deepClone = function (obj) {
    let nuevo = { ...obj };
    for (let propiedad in nuevo) {
        if (typeof nuevo[propiedad] === "object") {
            nuevo[propiedad] = deepClone(nuevo[propiedad]);
        }
    }
    return nuevo;
};

// Ejemplo de clonación profunda
let objetoOriginal = {
    nivel1: {
        nivel2: {
            nivel3: { valor: 123 }
        }
    }
};

let objetoClonado = deepClone(objetoOriginal);

objetoOriginal.nivel1.nivel2.nivel3.valor = 999;

console.log(objetoOriginal.nivel1.nivel2.nivel3.valor); // 999
console.log(objetoClonado.nivel1.nivel2.nivel3.valor); // 123 (independiente)

/*
    Ahora todas las propiedades anidadas son independientes.
*/
