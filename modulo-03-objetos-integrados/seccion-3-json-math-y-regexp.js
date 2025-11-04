
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


// Generación de números aleatorios (Ma:th.random / funciones 
// auxiliares)

/*
    Descripción general:
    Math.random() devuelve un número pseudoaleatorio de coma flotante 
    en el rango [0, 1).
    Suele usarse como base para obtener enteros en un intervalo 
    arbitrario mediante una fórmula auxiliar.

    Math.random:
    - Parámetros: ninguno.
    - Retorno: Number (valor real x tal que 0 <= x < 1).

    A continuación se muestran dos implementaciones útiles para obtener 
    enteros:
    1) randomInteger(min, max) → entero en [min, max) (max excluido).
    2) randomIntegerInclusive(min, max) → entero en [min, max] (max 
       incluido).

    Ambas funciones normalizan los límites usando Math.ceil y Math.floor 
    para manejar correctamente valores no enteros.
*/

/* 
    Genera un entero aleatorio en el rango [min, max) — max excluido.
    @param {number} min - límite inferior (inclusive).
    @param {number} max - límite superior (exclusive).
    @returns {number} entero en [min, max) o NaN si los argumentos no 
    producen un rango válido.
*/

let randomInteger = (min, max) => {
    // normalizar límites a enteros adecuados
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    // si el rango es inválido, la expresión puede devolver NaN; se 
    // asume uso correcto
    return Math.floor(Math.random() * (_max - _min) + _min);
};

// Ejemplo:
console.log(typeof Math.random()); // -> "number"
console.log(Math.random());         // -> valor entre 0 (incl.) y 1 (excl.)
console.log(randomInteger(10, 20)); // -> entero entre 10 y 19

/*
    Explicación breve:
    - Math.random() produce un real 0 ≤ x < 1.
    - Multiplicando por (_max - _min) y sumando _min desplazamos el 
      rango.
    - Math.floor convierte a entero; por eso el valor máximo posible es
      _max - 1.
*/

/* 
    Genera un entero aleatorio en el rango [min, max] — max incluido.
    @param {number} min - límite inferior (inclusive).
    @param {number} max - límite superior (inclusive).
    @returns {number} entero en [min, max] o NaN si los argumentos no 
    producen un rango válido.
*/

let randomIntegerInclusive = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
};

// Ejemplo:
console.log(randomIntegerInclusive(10, 20)); // -> entero entre 10 y 20

/*
    Explicación breve:
    Sumando +1 al factor de escala conseguimos que el valor máximo 
    posible alcance _max,
    por lo tanto el intervalo es inclusivo en ambos extremos tras la 
    normalización.
*/


// Otros métodos útiles del objeto Math:

/*
    Resumen de métodos cubiertos:
    - Math.abs(x)
    - Math.min(...values), Math.max(...values)
    - Math.pow(base, exponent)
    - Math.sqrt(x)
    - Math.log(x), Math.log2(x), Math.log10(x)
    - Funciones trigonométricas: Math.sin, Math.cos, Math.tan, 
      Math.asin, etc.

    Para cada método se indica parámetros y tipo de retorno.
*/

/*
    Math.abs(x)
    @param {number} x - número del que obtener el valor absoluto.
    @returns {number} valor absoluto de x.
*/

console.log(Math.abs(-3.25)); // -> 3.25
console.log(Math.abs(10));    // -> 10

/*
    Math.min(...values) / Math.max(...values)
    @param {...number} values - lista de números (o expandir un array 
    con spread).
    @returns {number} mínimo o máximo entre los argumentos; si no se 
    dan argumentos, min devuelve Infinity y max devuelve -Infinity.
*/

console.log(Math.min(100, 20, 300, 10, 400)); // -> 10
let numbers = [100, 20, 300, 10, 400];
console.log(Math.max(...numbers));            // -> 400

/*
    Math.pow(base, exponent)
    @param {number} base - base de la potencia.
    @param {number} exponent - exponente (puede ser negativo o no 
    entero).
    @returns {number} base elevado a exponent; produce NaN si la 
    operación no es válida.
*/

console.log(Math.pow(2, 3));    // -> 8
console.log(Math.pow(4, 2));    // -> 16
console.log(Math.pow(4, -1));   // -> 0.25
console.log(Math.pow(4, -2));   // -> 0.0625
console.log(Math.pow(4, 0.5));  // -> 2
console.log(Math.pow(-1, 0.5)); // -> NaN (raíz no real)

/*
    Math.sqrt(x)
    @param {number} x - número no negativo.
    @returns {number} raíz cuadrada de x, o NaN si x < 0.
*/
console.log(Math.sqrt(4)); // -> 2

/*
    Logaritmos:
    Math.log(x)  -> logaritmo natural (base e).
    Math.log2(x) -> logaritmo base 2.
    Math.log10(x)-> logaritmo base 10.
    @param {number} x - número positivo.
    @returns {number} logaritmo correspondiente.
*/

let x = Math.pow(Math.E, 2); // e^2
console.log(Math.log(x));     // -> 2
console.log(Math.log2(16));   // -> 4
console.log(Math.log10(1000));// -> 3

/*
    Funciones trigonométricas (trabajan en radianes):
    - Math.sin(theta), Math.cos(theta), Math.tan(theta)
    - Math.asin(x), Math.acos(x), Math.atan(x)
    
    @param {number} theta - ángulo en radianes (o valor en [-1,1] para 
    asin/acos).
    @returns {number} resultado trigonométrico.
*/

console.log(Math.cos(Math.PI / 3)); // -> 0.5
console.log(Math.tan(Math.PI / 4)); // -> 1
console.log(Math.asin(1));          // -> π/2 (≈ 1.5708)

/*
    Observación:
    - Las funciones aquí mostradas son las más usadas; Math incluye 
      muchas más utilidades.
    - JavaScript no es una librería matemática de alta precisión; para 
      cálculos científicos
    
      avanzados se recomiendan bibliotecas especializadas.
*/


// Expresiones regulares (RegExp) - introducción: 

/*
    Descripción general:
    
    RegExp permite definir patrones de búsqueda sobre cadenas. Un patrón 
    puede ser una secuencia literal, metacaracteres y cuantificadores. 
    Las expresiones regulares se usan para validar, buscar, extraer o 
    reemplazar texto.

    Formas de crear una RegExp:
    
    1) Literal: /patrón/modificadores
    2) Constructor: new RegExp('patrón', 'modificadores')

    Tipos y retornos básicos de los métodos que veremos:
    
    - RegExp.test(string) -> Boolean (true si hay coincidencia).
    - RegExp.exec(string)  -> Array | null (detalles de la coincidencia).
    - String.match(regexp) -> Array | null
    - String.search(regexp) -> Number (índice) o -1
    - String.replace(regexp, replacement) -> String (cadena nueva)
*/


// Constructor y método test():

/*
    Reg:Exp.prototype.test
    @param {string} string - texto donde buscar coincidencia.
    @returns {boolean} true si el patrón coincide al menos una vez; 
    false en caso contrario.
*/

let re1 = new RegExp('c.t'); // patrón donde '.' significa cualquier carácter
let re2 = /c.t/;

console.log(re1.test("cat")); // -> true
console.log(re2.test("cut")); // -> true
console.log(re2.test("ct"));  // -> false

/*
    Explicación breve:
    - El patrón 'c.t' coincide con una 'c', cualquier carácter, y una 
      't' consecutivos.
*/


//  Método exec():

/*
    RegExp.prototype:.exec
    @param {string} string - texto donde buscar coincidencia.
    @returns {Array|null} Si hay coincidencia devuelve un array con:
    
    - índice 0: texto coincidente completo,
    - propiedad index: posición inicial,
    - property input: la cadena completa,
    - grupos capturados si existen (groups: ...).
    
    Si no hay coincidencia devuelve null.
*/

let re = /c.t/;
console.log(re.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re.exec("ct"));      // -> null

/*
    Explicación breve:
    
    - exec devuelve más información que test; útil cuando se necesita 
      la posición y el texto exacto encontrado.
    - Si la RegExp tiene la bandera 'g' (global), exec puede utilizarse 
      en bucle para encontrar múltiples coincidencias (mantiene lastIndex 
      internamente).
*/


//  Métodos del constructor String que admiten RegExp:

/*
    String.prototype.match(regexp)
    @param {RegExp|string} regexp - expresión regular (o cadena).
    @returns {Array|null} Si se usa regexp sin 'g' devuelve información 
    similar a exec().
    Si regexp tiene 'g' devuelve un array con todas las coincidencias o
    null.

    String.prototype.search(regexp)
    @param {RegExp|string} regexp - expresión regular (o cadena).
    @returns {number} índice de la primera coincidencia, o -1 si no hay
    coincidencia.

    String.prototype.replace(regexp|substr, replacement)
    @param {RegExp|string} regexp|substr - patrón a reemplazar (si es 
    RegExp se pueden usar flags).
    @param {string|function} replacement - texto o función que devuelve 
    el reemplazo.
    @returns {string} nueva cadena con los reemplazos aplicados (no 
    modifica la original).
*/

let regex = /c.t/;
let str = "dog and cat";

console.log(str.match(regex));             // -> ["cat", index: 8, input: "dog and cat", groups: undefined]
console.log(str.search(regex));            // -> 8
console.log(str.replace(regex, "unicorn"));// -> "dog and unicorn"
console.log(str);                          // -> "dog and cat"  (cadena original sin cambios)

/*
    Explicación breve:
    - match puede devolver distinta forma de resultado según la bandera
      'g'.
    - replace acepta expresiones regulares; con 'g' reemplaza todas las 
      coincidencias.
    - replace acepta también una función como segundo argumento para 
      calcular dinámicamente el reemplazo.
*/


//  Reglas básicas y metacaracteres en expresiones regulares:

/*
    Metacaracteres y reglas cubiertas aquí:
    
    .   -> coincide con cualquier carácter (salvo salto de línea en 
        algunos motores).
    \   -> carácter de escape para tratar un metacaracter como literal.
    * + ? -> cuantificadores: 0+, 1+ y 0|1 repeticiones respectivamente.
    |    -> alternativa (OR).
    ()   -> agrupación y captura.
    []   -> conjunto de caracteres (uno de ellos).
    [^]  -> negación dentro de conjunto.
    {m,n}-> repeticiones exactamente m..n veces.
    \s   -> espacio en blanco (espacio, tab, salto de línea).
    \d   -> dígito [0-9].
    ^    -> inicio de cadena (fuera de []).
    $    -> fin de cadena (fuera de []).
*/


// Ejemplos y su explicación corta:

// Escape de metacaracter: buscar "c.t" literal
let reEscape = /c\.t/;
console.log(reEscape.exec("cut")); // -> null
console.log(reEscape.exec("c.t")); // -> ["c.t", index: 0, input: "c.t", groups: undefined]

// Cuantificadores: *, +, ?
let reStar = /o*ps/;
console.log(reStar.exec("ps"));               // -> ["ps"]
console.log(reStar.exec("ops"));              // -> ["ops"]
console.log(reStar.exec("He said: ooops!"));  // -> ["ooops"]

let rePlus = /o+ps/;
console.log(rePlus.exec("ps"));               // -> null
console.log(rePlus.exec("ops"));              // -> ["ops"]
console.log(rePlus.exec("He said: ooops!"));  // -> ["ooops"]

let reQ = /o?ps/;
console.log(reQ.exec("ps"));                  // -> ["ps"]
console.log(reQ.exec("ops"));                 // -> ["ops"]


// Alternativa y agrupación
let reAltSimple = /ca|ut/;
console.log(reAltSimple.exec("cattle")); // -> ["ca"]
console.log(reAltSimple.exec("haircut")); // -> ["ut"]
console.log(reAltSimple.exec("city")); // -> null

let reGroup = /c(a|u)t/;
console.log(reGroup.exec("cattle")); // -> ["cat", "a", index:0, ...]
console.log(reGroup.exec("haircut")); // -> ["cut", "u", index:4, ...]

// Repeticiones con llaves y \s (espacio)
let reRange = /\so{2,3}ps/; // espacio seguido de 'o' 2 a 3 veces y "ps"
console.log(reRange.exec("He said: ops!"));       // -> null (solo una 'o')
console.log(reRange.exec("He said: ooops!"));     // -> [" ooops", index:9, ...]
console.log(reRange.exec("He said: ooooooooops!"));// -> null (más de 3 'o')

// Conjuntos de caracteres y negación
let reSet = /c[aiu]t/;
console.log(reSet.exec("cattle")); // -> ["cat"]
console.log(reSet.exec("haircut")); // -> ["cut"]
console.log(reSet.exec("city"));    // -> ["cit"]

let reNeg = /c[^au]t/;
console.log(reNeg.exec("cattle"));  // -> null (a en conjunto)
console.log(reNeg.exec("haircut")); // -> null (u en conjunto)
console.log(reNeg.exec("city"));    // -> ["cit"]

// Dígitos con \d
let reDigits = /id\d+/;
console.log(reDigits.exec("My ids."));   // -> null
console.log(reDigits.exec("id60001"));   // -> ["id60001"]

// Anclajes de inicio y fin (^ y $)
let reLine = /^(abc\s){3}$/;
console.log(reLine.exec("abc abc abc "));  // -> coincide (3 veces "abc ")
console.log(reLine.exec("abc abc abc abc ")); // -> null (4 repeticiones)
console.log(reLine.exec("abc abcabc"));     // -> null (no coincide exactamente)

/*
    Resumen final:

    - RegExp es potente pero requiere práctica; comenzar por patrones 
      simples y probar con ejemplos es la forma más efectiva de 
      aprender.
    - Para uso en producción, documente y pruebe las expresiones 
      regulares para evitar efectos colaterales
      (por ejemplo, backtracking excesivo en patrones mal diseñados).
*/


