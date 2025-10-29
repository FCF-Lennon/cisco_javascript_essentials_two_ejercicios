
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


// Mapeo de elementos:

/* 
    El método map() crea un nuevo arreglo aplicando una función a cada 
    elemento del arreglo original.
    
    Recibe una función como argumento con hasta tres parámetros:
    
    - item: el elemento actual del arreglo.
        - index (opcional): la posición del elemento en el arreglo.
        - array (opcional): el arreglo original completo.
    
    Devuelve un nuevo arreglo con los elementos transformados según la 
    función.
    Se suele combinar con filter() para operar solo sobre ciertos 
    elementos.
*/

array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array1
    .filter(item => typeof item === "number") // filtra solo los números
    .map(item => item * item); // eleva cada número al cuadrado
console.log(squarePower); // -> [8100, 6400, 100, 400, 900, 10000, 2500]


// Ordenamiento:

/* 
    El método sort() ordena los elementos de un arreglo en su lugar 
    (modifica el arreglo original).
    
    Puede recibir una función de comparación con dos parámetros:
    
        - first: el primer elemento a comparar.
        - second: el segundo elemento a comparar.
    
    La función debe devolver:
        
        - un número negativo si first debe preceder a second,
        - 0 si son iguales en orden,
        - un número positivo si first debe ir después de second.
    
        Si no se proporciona función, sort convierte los elementos a 
        strings y los ordena alfabéticamente.
*/

let numbers = array1.filter(item => typeof item === "number");
console.log(numbers[0]); // -> 90
numbers.sort((first, second) => {
    if (first < second) return -1;
    else if (first === second) return 0;
    else return 1;
});
console.log(numbers[0]); // -> 10

// Versión simplificada usando una función de resta
numbers.sort((first, second) => first - second);
console.log(numbers); // -> [10, 20, 30, 50, 80, 90, 100]


// Reducción de un arreglo:

/* 
    El método reduce() recorre un arreglo y acumula un valor según la 
    función que recibe.
    
    La función reductora recibe:
    
        - accumulator: el valor acumulado hasta el momento.
        - item: el elemento actual del arreglo.
        - index (opcional): posición del elemento actual.
        - array (opcional): el arreglo original.
    
    Opcionalmente, reduce() puede recibir un valor inicial. Devuelve el
    valor final acumulado.
*/

let numbers2 = [10, 20, 30, 50, 80, 90, 100];
let sum = numbers2.reduce((accumulator, item) => accumulator + item);
console.log(sum); // -> 380

// Uso de un valor inicial
let anotherSum = numbers2.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum); // -> 1380

// Convertir un arreglo en un objeto usando reduce
let strangeObj = numbers2.reduce((accumulator, item, index) => {
    accumulator[item] = index;
    return accumulator;
}, {});
console.log(strangeObj); // -> {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}


// Invertir el orden de los elementos:

/* 
    El método reverse() invierte el orden de los elementos del arreglo 
    original.
    No recibe argumentos y devuelve el arreglo modificado en su lugar.
*/

let numbers3 = [10, 20, 30, 50, 80, 90, 100];
console.log(numbers3[0]); // -> 10
numbers3.reverse();
console.log(numbers3[0]); // -> 100
numbers3.reverse();
console.log(numbers3[0]); // -> 10


// Búsqueda de elementos:

/* 
    Métodos de búsqueda en arreglos:

    - includes(value): devuelve true si el valor existe, false si no.
    - indexOf(value): devuelve el índice del primer elemento que 
      coincide, -1 si no encuentra.
    - lastIndexOf(value): devuelve el índice del último elemento que 
      coincide, -1 si no encuentra.
    - find(función): devuelve el primer elemento que cumpla la condición
      de la función, undefined si no hay.
    - findIndex(función): devuelve el índice del primer elemento que 
      cumpla la condición de la función, -1 si no hay.
    
    La función de prueba recibe: 

        - item: elemento actual
        - index (opcional): posición del elemento
        - array (opcional): el arreglo completo
*/

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.includes("shark")); // -> true
console.log(myPets.includes("unicorn")); // -> false
console.log(myPets.indexOf("dog")); // -> 1
console.log(myPets.lastIndexOf("dog")); // -> 6
console.log(myPets.indexOf("unicorn")); // -> -1

console.log(myPets.find(item => item.length > 3)); // -> hamster
console.log(myPets.find(item => item.includes("og"))); // -> dog
console.log(myPets.find(item => item.includes("fish"))); // -> undefined
console.log(myPets.findIndex(item => item.length > 3)); // -> 2
console.log(myPets.findIndex(item => item.includes("og"))); // -> 1
console.log(myPets.findIndex(item => item.includes("fish"))); // -> -1

