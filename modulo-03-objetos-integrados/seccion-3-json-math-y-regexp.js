
// JSON, Math y Expresiones Regulares (RegExp)

/* 
    Los objetos incorporados en JavaScript no solo sirven como 
    constructores de tipos de datos simples o compuestos, sino que 
    también ofrecen funcionalidades adicionales muy útiles. 

    En esta sección exploraremos tres objetos importantes:

    1. JSON – para el intercambio de datos.
    2. Math – para operaciones y constantes matemáticas.
    3. RegExp – para trabajar con expresiones regulares.
*/


// JSON:

/*
    JSON (JavaScript Object Notation)

    Es un formato de texto ligero utilizado para el intercambio de datos
    entre sistemas. 
    Su sintaxis está basada en la notación de objetos de JavaScript, 
    aunque es independiente del lenguaje.

    El objeto incorporado `JSON` proporciona dos métodos fundamentales:

    1. JSON.stringify(objeto)
    
    - Convierte un objeto o arreglo en una cadena de texto JSON.
    - Parámetro:
        - objeto: cualquier estructura de datos (objeto, arreglo, etc.) que se desea serializar.
    - Retorna:
        - Una cadena (`string`) con la representación JSON del objeto.

    2. JSON.parse(cadena)
    
    - Convierte una cadena JSON válida en un objeto o arreglo de JavaScript.
    - Parámetro:
        - cadena: texto JSON a convertir.
    - Retorna:
        - Un objeto o arreglo con la estructura original.
*/


// Ejemplo básico de conversión de objeto a JSON
let vehicle2 = {
    id: "AK12113",
    longitude: 59.358615,
    latitude: 17.947589,

    /* 
    🔹 Método: getId()
       Retorna el identificador del vehículo.

       No recibe parámetros.
       Retorna: string → valor de la propiedad `id` del objeto.
    */
    getId: function() {
        return this.id;
    }
};

let vehicle2JSON = JSON.stringify(vehicle2);
console.log(typeof vehicle2JSON); // -> "string"
console.log(vehicle2JSON); // -> {"id":"AK12113","longitude":59.358615,"latitude":17.947589}

/*
    Nota:
    Durante la conversión con `stringify`, las funciones (como `getId`) 
    no se incluyen en el resultado, ya que JSON está diseñado solo para 
    representar datos, no comportamiento.
*/


// Ejemplo de error al convertir estructuras circulares
// JSON.stringify(window); // TypeError: Converting circular structure 
// to JSON

/*
    Esto ocurre cuando un objeto se refiere a sí mismo directa o 
    indirectamente.
*/


// Ejemplo: conversión de un arreglo de objetos a JSON

/*
    Función constructora: Vehicle(id, latitude, longitude)
    Crea un nuevo objeto con tres propiedades.

    Parámetros:
    - id (string): identificador del vehículo.
    - latitude (number): latitud actual del vehículo.
    - longitude (number): longitud actual del vehículo.

    Retorna:
    - Un nuevo objeto Vehicle con las propiedades definidas.
*/

let Vehicle = function(id, latitude, longitude) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
};

let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];

/*
    Método: forEach(callback)
    Ejecuta una función proporcionada una vez por cada elemento del 
    array.

    Parámetros:
    - callback: función que recibe (elemento, índice, arreglo).
*/
ids.forEach(id => vehicles.push(new Vehicle(id, 59.358615, 17.947589)));

let vehiclesJSON = JSON.stringify(vehicles);
console.log(vehiclesJSON);
/*
→ [{"id":"AK12113","latitude":59.358615,"longitude":17.947589},
   {"id":"AL1024","latitude":59.358615,"longitude":17.947589},
   {"id":"BA1001","latitude":59.358615,"longitude":17.947589}]
*/


// Conversión desde formato JSON:

/*
    JSON.parse(cadena)
    -----------------------------------
    Convierte una cadena con formato JSON en un objeto o arreglo 
    utilizable en JavaScript.

    Parámetros:
    - cadena (string): texto JSON a analizar y transformar.

    Retorna:
    - Objeto o Array resultante de la conversión.
*/

// Ejemplo de conversión de texto JSON a objeto
let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);

console.log(typeof vehicle); // -> "object"
console.log(vehicle.position.longitude); // -> 59.358615

/*
    Regla importante:

    Las claves (keys) en JSON deben ir entre comillas dobles (" "), 
    y solo puede haber un objeto o arreglo en el nivel superior.
*/


// Ejemplo con arreglo modificado antes de convertir
let vehiclesJSON2 = '[{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]';

/*
    Método: replaceAll(patrón, reemplazo)
    Devuelve una nueva cadena donde todas las coincidencias 
    del patrón son reemplazadas por el valor indicado.

    Parámetros:
    - patrón (string o RegExp): texto o expresión regular a buscar.
    - reemplazo (string): texto que sustituirá cada coincidencia.

    Retorna:
    - Nueva cadena con los reemplazos aplicados.
*/

vehiclesJSON2 = vehiclesJSON2.replaceAll("id", "plate"); // cambia todas las claves "id" por "plate"
let vehiclesParsed = JSON.parse(vehiclesJSON2);

console.log(vehiclesParsed instanceof Array); // -> true
console.log(vehiclesParsed.length); // -> 3
console.log(vehiclesParsed[0].plate); // -> "AK12113"


/*
    Conclusión sobre JSON:
    -----------------------------------
    - `JSON.stringify()` convierte objetos/arrays en texto JSON.
    - `JSON.parse()` convierte texto JSON en objetos/arrays.
    - Evita ciclos de referencias al convertir.
    - Las claves deben ir entre comillas dobles.
*/



// Math:

/*
    Objeto Math
    -----------------------------------
    Proporciona constantes y métodos matemáticos útiles.

    No se instancia con `new`, ya que es un objeto estático global.
*/

// Constantes más importantes
console.log(Math.PI); // -> 3.141592653589793
console.log(Math.E);  // -> 2.718281828459045

/*
    Math.PI → número pi.
    Math.E  → base del logaritmo natural.
*/


// Redondeo de números:

/*
    Métodos de redondeo
    -----------------------------------
    El objeto `Math` ofrece varios métodos para redondear valores 
    numéricos:

    1. Math.ceil(x)
    - Redondea un número hacia arriba al entero más cercano.
    - Parámetro:
        - x (number): valor a redondear.
    - Retorna:
        - Entero mayor o igual a x.

    2. Math.floor(x)
    - Redondea un número hacia abajo al entero más cercano.
    - Parámetro:
        - x (number): valor a redondear.
    - Retorna:
        - Entero menor o igual a x.

    3. Math.round(x)
    - Redondea al entero más cercano, 
        hacia arriba si la parte decimal ≥ 0.5.
    - Parámetro:
        - x (number): valor a redondear.
    - Retorna:
        - Entero más cercano a x.
*/

console.log(Math.ceil(10.2));       // -> 11
console.log(Math.floor(10.2));      // -> 10
console.log(Math.round(10.2));      // -> 10

console.log(Math.ceil(10.499999));  // -> 11 
console.log(Math.floor(10.499999)); // -> 10
console.log(Math.round(10.499999)); // -> 10

console.log(Math.ceil(10.5));       // -> 11
console.log(Math.floor(10.5));      // -> 10
console.log(Math.round(10.5));      // -> 11

console.log(Math.ceil(10.8));       // -> 11
console.log(Math.floor(10.8));      // -> 10
console.log(Math.round(10.8));      // -> 11

/*
    Observación:
    - `ceil()` siempre sube.
    - `floor()` siempre baja.
    - `round()` sigue la regla matemática de redondeo convencional 
    (.5 hacia arriba).
*/
