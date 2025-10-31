
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



// Copiar una parte seleccionada del arreglo (slice):

/* 
    El método slice() crea una copia superficial de una parte del 
    arreglo original.

    Sintaxis:
    array.slice(inicio, fin)

    - inicio: índice desde donde comienza la copia.
    - fin (opcional): índice donde termina (no incluido en la copia).

    Si "inicio" es negativo, se cuenta desde el final.
    Si se omite "fin", se copia hasta el final del arreglo.

    El arreglo original NO se modifica.
*/

myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];

let p1 = myPets.slice(3);       // ["canary", "shark", "cat", "dog"]
let p2 = myPets.slice(3, 5);    // ["canary", "shark"]
let p3 = myPets.slice(-3);      // ["shark", "cat", "dog"]
let p4 = myPets.slice(-3, -1);  // ["shark", "cat"]

// slice() devuelve una NUEVA lista sin alterar el arreglo original.


// Eliminar o reemplazar partes del arreglo (splice):

/* 
    El método splice() modifica el arreglo original. 
    
    Puede usarse para:

    - eliminar elementos
    - insertar nuevos elementos
    - o ambas cosas a la vez

    Sintaxis:

    array.splice(inicio, cantidad, elem1, elem2, ...)

    - inicio: índice donde comienza la operación (acepta negativos).
    - cantidad: número de elementos a eliminar.
    - elem1, elem2, ...: nuevos elementos a insertar (opcional).

    Retorna un arreglo con los elementos eliminados.
*/

myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets.splice(2, 3);
console.log(myPets);        // ["cat", "dog", "cat", "dog"]
console.log(removedPets);   // ["hamster", "canary", "shark"]

// Insertando nuevos elementos sin eliminar:
myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPets.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets);
// ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]


// Asignación por desestructuración (arrays):

/* 
    Permite extraer valores de un arreglo y asignarlos a variables 
    de manera más concisa.

    Sintaxis:
    let [var1, var2, , var4] = arreglo;

    Las posiciones vacías se saltan con comas. 
    Se pueden asignar valores por defecto.
*/

myPets = ["cat", "dog", "hamster", "canary"];
let [pet1, , pet3, pet4] = myPets;
console.log(pet1); // "cat"
console.log(pet3); // "hamster"

// Si faltan elementos:
myPets = ["cat", "dog"];
let [a, , b] = myPets;
console.log(b); // undefined

// Con valores por defecto:
let [x = "fish", , y = "fish"] = myPets;
console.log(x); // "cat"
console.log(y); // "fish"


// Operador Spread en arreglos:

/* 
    El operador spread (...) expande un arreglo en elementos 
    individuales.

    Usos comunes:

    - Crear nuevos arreglos a partir de otros.
    - Pasar elementos como argumentos de una función.
*/

array1 = [100, 200, 300];
array2 = [1000, 2000];
array3 = [10, 20, ...array1, 500, ...array2];
console.log(array3); // [10, 20, 100, 200, 300, 500, 1000, 2000]

let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.log(testFn(...array)); // 100


// Colecciones Set:

/* 
    Set es una colección de valores ÚNICOS (sin duplicados).
    El orden no es relevante y los elementos no tienen índices.

    Cada elemento se considera tanto clave como valor.
*/

let emptySet = new Set();
console.log(emptySet.size); // 0

let petsSet = new Set(["cat", "dog", "cat"]);
console.log(petsSet);       // {"cat", "dog"}
console.log(petsSet.size);  // 2


// Verificar la presencia de un elemento en Set:

/* 
    El método has() devuelve true si el valor existe en el Set.
*/

petsSet = new Set(["cat", "dog"]);
console.log(petsSet.has("cat"));   // true
console.log(petsSet.has("shark")); // false


// Manipular elementos en un Set:

/* 
    Métodos principales:

    - add(valor): agrega un elemento.
    - delete(valor): elimina un elemento (retorna true/false).
    - clear(): elimina todos los elementos.
*/

console.log(petsSet.size); // 2
petsSet.add("shark");
petsSet.add("hamster");
console.log(petsSet.size); // 4
console.log(petsSet.has("shark")); // true

petsSet.delete("dog");
console.log(petsSet.size); // 3

petsSet.clear();
console.log(petsSet.size); // 0


// Recorrer los elementos de un Set:

/* 
   forEach():

   Recorre todos los elementos y ejecuta una función por cada uno.
*/

petsSet = new Set(["cat", "dog", "hamster"]);
petsSet.forEach(value => console.log(value));
// cat -> dog -> hamster

// También puede usarse con dos parámetros (valor, clave), pero ambos son iguales:
petsSet.forEach((value, key) => console.log(`(${value}:${key})`));
// (cat:cat) -> (dog:dog) -> (hamster:hamster)

/*
   values():

   Devuelve un iterador que puede recorrerse manualmente.
*/

let petsIterator = petsSet.values();
console.log(petsIterator.next().value); // cat
console.log(petsIterator.next().value); // dog
console.log(petsIterator.next().value); // hamster

/*
   Uso con bucle while:

   Itera mientras done sea false.
*/

petsIterator = petsSet.values();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // cat -> dog -> hamster
    result = petsIterator.next();
}

// El método keys() existe pero funciona igual que values().


// Operador Spread en Sets:

/* 
    Permite convertir un Set en un arreglo fácilmente.
*/

petsSet = new Set(["cat", "dog", "hamster"]);
console.log(petsSet instanceof Set); // true

let petsArray = [...petsSet];
console.log(petsArray);              // ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // true


// Map:

/* 
    El constructor Map se usa para crear una colección de elementos
    donde cada uno está compuesto por un par clave:valor.

    A diferencia de un objeto común, Map permite usar cualquier 
    tipo de dato como clave (no solo strings o símbolos).
    Cada clave es única y su valor puede ser de cualquier tipo.

    Si se intenta agregar una clave que ya existe, su valor se 
    sobrescribe.
    El orden de los elementos no afecta su funcionamiento.
*/

// Ejemplo de estructura de un Map:

/*
    Map {
    clave1 => valor1,
    clave2 => valor2,
    clave3 => valor3
    }
*/


// El constructor Map:

/*
    El constructor Map() crea una nueva instancia de mapa.

    Parámetro opcional:
    - iterable: un arreglo con pares [clave, valor].

    Retorno:
    - Devuelve un nuevo objeto Map.
*/

let emptyMap = new Map();
let petsMap = new Map([
  ["cats", 1],
  ["dogs", 2],
  ["hamsters", 5]
]);

console.log(emptyMap.size); // -> 0
console.log(petsMap.size);  // -> 3

/*
    Explicación:
    - "emptyMap" es un mapa vacío.
    - "petsMap" contiene tres pares clave:valor.
    - La propiedad size devuelve cuántos elementos hay en el mapa.
*/


// Comprobación de la presencia de un elemento:

/*
    El método has() permite verificar si una clave específica
    existe en el mapa. Solo busca por la clave, no por el valor.

    Parámetro:
    - clave: la clave a buscar en el mapa.

    Retorno:
    - true si la clave existe, false si no.
*/

let animalsMap = new Map([
  ["cats", 1],
  ["dogs", 2],
  ["hamsters", 5]
]);

console.log(animalsMap.has("dogs"));   // -> true
console.log(animalsMap.has("sharks")); // -> false
console.log(animalsMap.has(1));        // -> false

/*
    Explicación:

    - has("dogs") devuelve true porque la clave existe.
    - has("sharks") devuelve false porque no hay tiburones.
    - has(1) devuelve false porque 1 es un valor, no una clave.
*/


// Manejo de elementos:

/*
    Podemos gestionar los elementos de un mapa usando los métodos:

    1 set(clave, valor)
    - Agrega un nuevo par clave:valor o actualiza uno existente.
    - Parámetros: clave, valor.
    - Retorna el propio mapa (permite encadenamiento).

    2 get(clave)
    - Obtiene el valor asociado a la clave.
    - Parámetro: clave.
    - Retorna el valor o undefined si no existe.

    3 delete(clave)
    - Elimina el elemento con esa clave.
    - Parámetro: clave.
    - Retorna true si se eliminó, false si no existe.

    4 clear()
    - Elimina todos los elementos del mapa.
    - Parámetros: ninguno.
    - No retorna nada (undefined).
*/

let petsCollection = new Map([
  ["cats", 1],
  ["dogs", 2],
  ["hamsters", 5]
]);

console.log(petsCollection.get("hamsters")); // -> 5

petsCollection.set("hamsters", 6);
console.log(petsCollection.get("hamsters")); // -> 6

petsCollection.delete("hamsters");
console.log(petsCollection.get("hamsters")); // -> undefined

petsCollection.clear();
console.log(petsCollection.size); // -> 0

/*
    Explicación:
    - get() obtiene valores asociados a las claves.
    - set() modifica o agrega pares clave:valor.
    - delete() elimina una clave específica.
    - clear() vacía todo el mapa.
*/


// Recorrido de los elementos del mapa:

/*
    Podemos recorrer los elementos del mapa de varias formas:
    forEach(), values(), keys() y entries().
*/


// forEach:

/*
    Ejecuta una función por cada elemento del mapa.

    Parámetros:
    - callback(valor, clave, mapa): función que se ejecuta por cada 
      elemento.
    - thisArg (opcional): valor a usar como "this" dentro del callback.

    Retorno:
    - No devuelve nada (undefined).
*/

let anotherPetsMap = new Map([
  ["snakes", 1],
  ["cats", 3],
  ["dogs", 2]
]);

anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`));
// -> snakes : 1
// -> cats : 3
// -> dogs : 2


// values:

/*
    El método values() devuelve un iterador que recorre solo los valores.

    Parámetros:
    - Ninguno.

    Retorno:
    - Un objeto iterador con los valores del mapa.
*/

let petValuesIterator = anotherPetsMap.values();
console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2


// keys:

/*
    El método keys() devuelve un iterador que recorre solo las claves.

    Parámetros:
    - Ninguno.

    Retorno:
    - Un objeto iterador con las claves del mapa.
*/

let petKeysIterator = anotherPetsMap.keys();
console.log(petKeysIterator.next().value); // -> snakes
console.log(petKeysIterator.next().value); // -> cats
console.log(petKeysIterator.next().value); // -> dogs


// entries:

/*
    El método entries() devuelve un iterador que recorre pares clave:valor
    en forma de arreglos de dos elementos.

    Parámetros:
    - Ninguno.

    Retorno:
    - Un objeto iterador que devuelve arreglos [clave, valor].
*/

petsIterator = anotherPetsMap.entries();
result = petsIterator.next();

while (!result.done) {
  console.log(result.value); 
  // -> ["snakes", 1]
  // -> ["cats", 3]
  // -> ["dogs", 2]
  result = petsIterator.next();
}

/*
    Resumen:
    - Map almacena pares clave:valor únicos.
    - Las claves y valores pueden ser de cualquier tipo.
    - Métodos útiles: set, get, has, delete, clear.
    - Se puede recorrer con forEach o con iteradores (keys, values, 
      entries).
*/


// bucle for ... of:

/*
    El bucle for ... of fue creado en JavaScript para recorrer 
    colecciones como arrays, sets y maps. Es un mecanismo universal e 
    intuitivo que permite acceder directamente a los valores almacenados.
*/

petsArray = ["cat", "dog", "hamster"];
for (let pet of petsArray) {
    console.log(pet); // -> cat -> dog -> hamster
};

/*
    En este ejemplo, for...of recorre un array e imprime cada elemento.
*/

petsSet = new Set(["cat", "dog", "hamster"]);
for (let pet of petsSet) {
    console.log(pet); // -> cat -> dog -> hamster
};

/*
    El mismo comportamiento se aplica a los sets, ya que son iterables.
*/

petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for (let pet of petsMap) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> cats -> dogs -> hamsters
};

/*
    En los maps, cada iteración devuelve un par [clave, valor].
    Si se accede al índice [0], se obtiene la clave.
*/


// El operador spread en maps:

/*
    El operador spread (...) permite expandir un map en elementos 
    individuales.
    Puede usarse para convertir un map en un array fácilmente.
*/

let petsMap2 = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
console.log(petsMap2 instanceof Map); // -> true

let petsArray2 = [...petsMap2]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
console.log(petsArray2 instanceof Array); // -> true

/*
    Este método es útil para manipular maps con operaciones de arrays.
*/


// El objeto Object:

/*
    El constructor Object y los objetos son estructuras fundamentales 
    en JavaScript.
    Pueden considerarse estructuras de datos compuestas, como arrays, 
    sets y maps, diseñadas para almacenar colecciones de información 
    en pares clave:valor.

    Diferencias clave:
    
    - Array: elementos repetibles, identificados por índice (orden 
      importante).
    - Set: sin índices, no permite duplicados.
    - Map: pares clave:valor únicos, las claves pueden ser de cualquier 
      tipo.
*/


// Creación de un objeto:

/*
    Los objetos en JavaScript también almacenan pares clave:valor,
    similar a los maps, pero con restricciones en los tipos de claves.
    Podemos crearlos usando literales de objeto.
*/

let anotherPetsObj = {"snakes": 1, "cats": 3, "dogs": 2};

/*
    Cada propiedad tiene una clave (nombre) y un valor asociado.
*/


// Manejo de elementos en objetos:

/*
    Podemos acceder, modificar o eliminar propiedades
    usando la notación de punto o de corchetes.
*/

console.log(anotherPetsObj.snakes); // -> 1

anotherPetsObj.snakes = 2;
console.log(anotherPetsObj.snakes); // -> 2

delete anotherPetsObj.snakes;
console.log(anotherPetsObj.snakes); // -> undefined

anotherPetsObj.snakes = 0;
console.log(anotherPetsObj.snakes); // -> 0

/*
    Resumen:
    - obj.propiedad = valor → agrega o modifica.
    - delete obj.propiedad → elimina.
*/


// Recorrido de elementos en objetos:

/*
    Para recorrer un objeto podemos usar los métodos estáticos:
    - Object.keys(obj): devuelve un array con las claves.
    - Object.values(obj): devuelve un array con los valores.
    - Object.entries(obj): devuelve un array de pares [clave, valor].
*/

let anotherPetsObj2 = {"snakes": 1, "cats": 3, "dogs": 2};

Object.keys(anotherPetsObj2).forEach(key => console.log(key)); 
// -> snakes -> cats -> dogs

Object.values(anotherPetsObj2).forEach(value => console.log(value)); 
// -> 1 -> 3 -> 2

Object.entries(anotherPetsObj2).forEach(entry => console.log(entry)); 
// -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]

/*
    Estos métodos devuelven arrays, por lo que podemos usar forEach 
    u otros métodos de iteración.
*/

let anotherPetsObj3 = {"snakes": 1, "cats": 3, "dogs": 2};
for (let key in anotherPetsObj3) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObj3[key]); // -> 1 -> 3 -> 2
};

/*
    for...in permite recorrer las claves de un objeto directamente.
*/


// El operador spread en objetos:

/*
    El operador spread (...) también funciona con objetos,
    pero su propósito es copiar o combinar propiedades entre ellos.
*/

let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
let newPetsObj = {...petsObj, "sharks": 1}; 
// -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}

console.log(newPetsObj);

/*
    El operador spread permite crear copias de objetos o fusionarlos,
    lo que es útil al manipular configuraciones o estructuras de datos.
*/


// Nota final:

/*
    El almacenamiento de datos en objetos es tan versátil que existe 
    un formato estándar para su intercambio: JSON.
    Este formato convierte objetos en texto, ideal para enviarlos por 
    la red.
    Se explicará con más detalle en la siguiente sección.
*/
