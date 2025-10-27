
// TIPOS DE DATOS COMPUESTOS:

/*
    Los tipos de datos compuestos permiten almacenar múltiples valores,
    de diferentes tipos y estructuras, dentro de una misma variable.

    A diferencia de los tipos simples, estos pueden crecer o modificarse
    durante la ejecución del programa (son dinámicos).
*/


// ARREGLOS (ARRAY):

/*
    El constructor Array se usa para crear arreglos: colecciones 
    ordenadas de elementos que pueden ser de distintos tipos. Su tamaño 
    y contenido pueden cambiar dinámicamente.
*/

let ejemploArray = [10, "texto", true]; // Ejemplo de arreglo mixto
console.log(ejemploArray[0]); // -> 10


// CREACIÓN DE UN ARREGLO:

/*
    Podemos crear arreglos de varias formas: usando corchetes [] o el
    constructor new Array().
*/

let array1 = []; // -> []
let array2 = [2, 4, "six"]; // -> [2, 4, "six"]
let array3 = new Array(); // -> []
let array4 = new Array(2); // -> [undefined, undefined]
let array5 = new Array(2, 4, "six"); // -> [2, 4, "six"]
let array6 = new Array("2"); // -> ["2"]

console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`);
console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`);

/*
    Notas:

    - Si no se pasa ningún argumento → arreglo vacío.
    - Si se pasa un número → crea un arreglo con esa longitud (valores 
      undefined).
    - Si se pasan varios argumentos → los usa como elementos del arreglo.
*/

console.log(array2[0]); // -> 2
console.log(array5[2]); // -> "six"
console.log(array5[5]); // -> undefined


// COMBINACIÓN DE ARREGLOS (concat):

/*
    El método concat combina dos arreglos en uno nuevo sin modificar 
    los originales.
*/

let a1 = [10, 20, 30];
let a2 = ["cat", "dog"];
let a3 = a1.concat(a2); // -> [10, 20, 30, "cat", "dog"]

console.log(a1.length); // -> 3
console.log(a2.length); // -> 2
console.log(a3.length); // -> 5
console.log(a3); // -> [10, 20, 30, "cat", "dog"]


// AGREGAR ELEMENTOS (push / unshift):

/*
    - push() agrega elementos al final.
    - unshift() agrega elementos al inicio.
    
    Ambos modifican el arreglo original.
*/

let arrayPush = [10, 20, 30];
arrayPush.push(100); // -> [10, 20, 30, 100]
arrayPush.push(50, "dog"); // -> [10, 20, 30, 100, 50, "dog"]
arrayPush.unshift("cat", 90, 80); // -> ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]

console.log(arrayPush);


// ELIMINAR ELEMENTOS (pop / shift):

/*
    - pop() elimina y devuelve el último elemento.
    - shift() elimina y devuelve el primero.
    
    Ambos modifican el arreglo.
*/

console.log(arrayPush.length); // -> 9
console.log(arrayPush.shift()); // -> "cat"
console.log(arrayPush.length); // -> 8
console.log(arrayPush.pop()); // -> "dog"
console.log(arrayPush.length); // -> 7


// AGREGAR Y ELIMINAR SIN MÉTODOS:

/*
    Podemos agregar elementos asignando a un índice inexistente.
    Podemos eliminar usando delete (deja un hueco con undefined).
*/

let arrayDirecto = [10, 20, 30];
arrayDirecto[3] = 100;
arrayDirecto[5] = 1000;
delete arrayDirecto[1];

console.log(arrayDirecto); // -> [10, undefined, 30, 100, undefined, 1000]
console.log(arrayDirecto[1]); // -> undefined


// RECORRER ELEMENTOS DE UN ARREGLO:

/*
    La forma clásica de recorrer arreglos es con un bucle for.
*/

let arrayFor = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];

for (let index = 0; index < arrayFor.length; index++) {
    console.log(`${index} : ${arrayFor[index]}`);
}

/*
    Una alternativa más moderna es el método forEach(),
    que ejecuta una función para cada elemento.
*/

function mostrarEnConsola(item, index, array) {
    console.log(`${index} : ${item}`);
}

arrayFor.forEach(mostrarEnConsola);

// También puede usarse con una función anónima o flecha:

arrayFor.forEach(function (item, index) {
    console.log(`${index} : ${item}`);
});

arrayFor.forEach((item, index) => console.log(`${index} : ${item}`));


// MÉTODOS every() Y some():

/*
    - every() → true si TODOS los elementos cumplen la condición.
    - some() → true si ALGUNO cumple la condición.
    
    Ambos devuelven un valor booleano.
*/

let arrayMix = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];

let algunNumero = arrayMix.some(item => typeof item === "number");
console.log(algunNumero); // -> true

let arrayNum = [90, 80, 10, 20, 30, 100, 50];
let todosPositivos = arrayNum.every(item => item > 0);
console.log(todosPositivos); // -> true


// FILTRADO (filter):

/*
    filter() crea un NUEVO arreglo con los elementos que cumplen
    la condición dada. No modifica el arreglo original.
*/

let arrayFiltrado = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numeros = arrayFiltrado.filter(item => typeof item === "number");

console.log(numeros); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(arrayFiltrado); // El arreglo original no cambia

/* 
    RESUMEN:
    
    - concat() une arreglos sin modificarlos.
    - push/unshift agregan elementos (final/inicio).
    - pop/shift eliminan (final/inicio).
    - delete elimina dejando hueco.
    - forEach recorre el arreglo.
    - some/every prueban condiciones.
    - filter crea un nuevo arreglo filtrado.
*/
