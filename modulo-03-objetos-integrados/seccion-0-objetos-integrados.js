
// OBJETOS INTEGRADOS EN JAVASCRIPT (Built-in Objects)

/*
    En JavaScript, no necesitamos crear todo desde cero.
    El lenguaje nos ofrece una gran variedad de objetos integrados
    (listos para usar), como `Math`, `JSON`, `Date`, entre otros.

    Estos objetos proporcionan funcionalidades comunes:
    - Math → para cálculos matemáticos
    - JSON → para convertir objetos en texto o viceversa
*/


// ¿Qué significa “objeto integrado”?

/*
    El término “objeto integrado” (built-in object) se utiliza en el
    estándar ECMAScript y en la documentación de MDN Web Docs.

    Algunos de estos objetos (como Math o JSON) son objetos comunes,
    mientras que otros (como Object o Date) son clases o funciones.
    En JavaScript todo, excepto los tipos primitivos, es un objeto,
    incluidas las clases y funciones.
*/


// Uso básico de objetos integrados:

// Ejemplo: uso del objeto Math
console.log(Math.sqrt(16)); // → 4

// Ejemplo: uso del objeto JSON
const persona = { nombre: "Ana", edad: 25 };
// convierte objeto a texto JSON
const jsonPersona = JSON.stringify(persona); 
console.log(jsonPersona); // → {"nombre":"Ana","edad":25}

/*
    Estos objetos se utilizan llamando a sus métodos o propiedades.
    Por ejemplo: JSON.stringify(objeto)
*/


// Métodos estáticos y métodos de instancia:

/*
    En las clases, los métodos pueden ser:
    - De instancia (definidos normalmente)
    - Estáticos (precedidos por la palabra clave `static`)

    Los métodos de instancia se usan en objetos creados a partir
    de la clase. Los métodos estáticos, en cambio, se usan desde la
    propia clase, sin necesidad de crear un objeto.
*/

// Ejemplo explicativo:
class ClaseCasiVacia {
  constructor(algo) {
    console.log(algo);
  }

  sayHi() {
    console.log("¡Hola!");
  }

  static sayHello() {
    console.log("¡Hello!");
  }
}

let objeto = new ClaseCasiVacia(120); // 120
objeto.sayHi(); // -> ¡Hola!
// objeto.sayHello(); // -> Error: no existe en la instancia
ClaseCasiVacia.sayHello(); // -> ¡Hello!

/*
    `sayHi()` → método de instancia (se usa con objetos)
    `sayHello()` → método estático (se usa con la clase)
*/

// Ejemplo con objeto integrado: Number

/*
    El constructor Number crea objetos que envuelven valores numéricos
    (primitivos). Tiene métodos de instancia y métodos estáticos.
*/

let n = new Number(100.123);
let fijo = n.toFixed(2); // Método de instancia
console.log(fijo); // → "100.12"

let esEntero1 = Number.isInteger(100); // Método estático
console.log(esEntero1); // → true

// let esEntero2 = n.isInteger(100); // Error: isInteger no es un método 
// de instancia

/*
    Resumen:
    - `n.toFixed(2)` → método de instancia, opera sobre el objeto `n`.
    - `Number.isInteger(100)` → método estático, opera sobre la clase 
      Number.
*/


// Importancia de entender métodos estáticos y de instancia:

/*
    Muchos objetos integrados combinan ambos tipos de métodos.
    Comprender la diferencia facilita el uso correcto y la lectura
    de la documentación en MDN.
*/


// Clasificación general de objetos integrados:


/*
    Grupo 1: Representan tipos de datos simples
    
    - Boolean
    - Number
    - String
    - Date
*/

const ejemploString = new String("Hola Mundo");
console.log(ejemploString.toUpperCase()); // → "HOLA MUNDO"

/*
    Grupo 2: Representan tipos de datos compuestos

    - Array
    - Set
    - Map
    - Object
*/

const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto); // → Set(3) {1, 2, 3}

/*
    Grupo 3: No representan datos, pero facilitan el trabajo diario
    
    - JSON
    - Math
    - RegExp
*/

const patron = /hola/i;
console.log(patron.test("Hola a todos")); // → true


// Recomendación final:

/*
    Esta no es una lista completa de los objetos integrados.
    Solo cubre los más comunes en la práctica.

    Para profundizar, consulta la documentación oficial de:
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects

    Dominar estos objetos te permitirá aprovechar la potencia
    del lenguaje y escribir código más eficiente y expresivo.
*/

