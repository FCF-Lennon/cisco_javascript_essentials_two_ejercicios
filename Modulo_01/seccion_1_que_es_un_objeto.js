// ¿Qué es un objeto?

// Tipos de datos primitivos:

/*
    En la parte anterior del curso, conociste algunos tipos de datos primitivos.

    En la práctica, solo se usan los tipos number, boolean y string. 
    Se puede verificar el tipo de un valor usando el comando typeof.

    Este comando permite probar no solo un valor específico, sino también una variable 
    (o lo que contiene).

    Se recomienda ejecutar los siguientes comandos en la consola y observar los resultados. 
    Es útil probar cada fragmento de código que se discuta.
*/

console.log(typeof 2.5);            // -> number
console.log(typeof "one two three"); // -> string
console.log(typeof false);           // -> boolean

/*
    Los valores pueden almacenarse en variables, donde podemos guardarlos o realizar operaciones 
    como dividir números o concatenar cadenas.
*/

let nr = 2.5;
nr = nr / 2;
console.log(typeof nr);              // -> number

/*
    Si declaramos una variable sin asignarle un valor, contiene por defecto el valor undefined,
    que también es considerado un tipo primitivo, igual que string o number.

    typeof devuelve el nombre del tipo como cadena.

    ¿En qué consiste la "primitividad" de estos tipos? Que son simples, no complejos. 
    Cada variable contiene un valor único y simple: un número, un valor lógico, una cadena, o 
    undefined si no tiene valor.
*/

/*
    Usar solo estos tipos primitivos limita la creación de programas avanzados. 
    Por eso se usan tipos complejos, principalmente arrays y objetos.

    ¿Por qué es una simplificación? Porque en JavaScript los arrays y funciones también son objetos. 
    Todo lo que no es primitivo es un objeto. Pero aquí solo trataremos como objetos a los declarados 
    explícitamente como tales.
*/

// Array como tipo complejo:

/*
    Los tipos complejos (arrays, objetos) son colecciones de datos, 
    un conjunto ordenado de valores dentro de una variable.

    En arrays, cada valor se llama elemento y se accede con un índice (posición numérica).

    Los índices empiezan en 0: el primer elemento es el índice 0, el segundo 1, etc.

    Los arrays se crean fácilmente con corchetes [].
*/

let a = [10, 20, "en to tre", true, 50];
a[4] = a[4] * 2;
console.log(a[0]);    // -> 10
console.log(a[2]);    // -> en to tre
console.log(a[4]);    // -> 100

/*
    Creamos un array de cinco elementos, modificamos el último elemento y mostramos 
    algunos valores.

    Volveremos a arrays y sus aplicaciones avanzadas más adelante.
*/

// Un objeto como tipo diferente de array:

/*
    Formalmente, un objeto puede verse como un tipo especial de array.

    En informática, se llaman arrays asociativos o mapas.

    La diferencia con un array normal es que no usamos índices numéricos para acceder 
    a los elementos, sino claves (keys).

    Una clave es una etiqueta única dentro del objeto, que identifica cada elemento 
    de forma unívoca.

    Los elementos en objetos se llaman propiedades, compuestas por clave y valor.

    La idea de objetos viene de la observación del mundo real: casi todo es una colección de 
    componentes con nombre y valor.

    Las propiedades definen un objeto.

    JavaScript permite crear objetos de muchas formas, la más sencilla es con llaves {}.
*/

let sampleObject = {
    id: 10, 
    delay: 20,
    name: "en to tre",
    isPresent: true,
    delay: 50   // Esta clave repetida sobrescribe el valor anterior
};

sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);      // -> 10
console.log(sampleObject.name);    // -> en to tre
console.log(sampleObject.delay);   // -> 100

/*
    Creamos un objeto con cinco propiedades (aunque delay se repite, el último 
    valor es el que queda).

    Luego modificamos delay y mostramos id, name y delay.

    En adelante usaremos indistintamente los términos clave (key) y nombre 
    de propiedad, así como propiedad y campo de objeto.
*/

