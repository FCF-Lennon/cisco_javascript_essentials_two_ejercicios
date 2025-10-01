// CLASES EN JAVASCRIPT

/*
    Hasta ahora, hemos aprendido varios métodos para crear objetos en 
    JavaScript,
    pero todos ellos representaban un modelo sin clases.

    Con ECMAScript 6 se introdujeron las clases:
    una especie de plantilla para crear objetos.
*/


// ¿Por qué otro método para crear objetos?

/*
    1) Herencia:
    - Antes se usaban prototipos para heredar métodos y propiedades.
    - El problema es que no era intuitivo y requería mucha práctica.
    - Con clases, la herencia en el código es mucho más simple.

    2) Compatibilidad con otros lenguajes:
    - Casi todos los lenguajes orientados a objetos (Java, C#, Python)
        usan clases.
    - Esto facilita la transición hacia JavaScript.
    - Lo bueno: en JS podemos usar clases, pero no estamos obligados.
*/

/*
    IMPORTANTE:
    En JavaScript:
    - No se pueden definir propiedades directamente dentro de la clase 
      (solo métodos).
    - No se podían crear campos privados (esto recién se agregó de forma
      experimental y no todos los navegadores lo soportan).
*/


// ¿Qué es una clase?

/*
    Una clase es una plantilla que nos permite crear objetos de un mismo
    tipo.
    Usando la palabra clave "class" y "new", podemos generar múltiples 
    objetos.

    Dentro de la clase:
    - Definimos métodos.
    - Definimos un constructor (para inicializar los objetos).
*/

// Ejemplo básico de clase:
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;   // Propiedad inicializada en el constructor
        this.edad = edad;
    }

    // Método
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear instancias (objetos) a partir de la clase
let perro = new Animal("Firulais", 5);
let gato = new Animal("Michi", 3);

perro.saludar(); // Hola, soy Firulais y tengo 5 años.
gato.saludar();  // Hola, soy Michi y tengo 3 años.

/*
    Explicación:

    - "Animal" es la clase (el tipo).
    - "perro" y "gato" son instancias de esa clase.
    - Cada objeto creado tiene sus propias propiedades y puede usar los 
      métodos.
*/

// Nota sobre "constructor"


/*
    En JavaScript ya existían "funciones constructoras" para crear 
    objetos.

    Ojo: la palabra "constructor" puede referirse a:
    - El método constructor dentro de una clase.
    - Una función constructora usada directamente.

    Ejemplo de función constructora (antes de ES6):
*/

function Persona(nombre) {
    this.nombre = nombre;
}

let juan = new Persona("Juan");
console.log(juan.nombre); // Juan

/*
    Conclusión:
    
    - "class" es una forma más clara y moderna de definir plantillas de 
      objetos.
    - Un objeto creado a partir de una clase pertenece a ese tipo.
      Ejemplo: "perro" es un objeto del tipo Animal, una instancia de la
      clase Animal.
*/
