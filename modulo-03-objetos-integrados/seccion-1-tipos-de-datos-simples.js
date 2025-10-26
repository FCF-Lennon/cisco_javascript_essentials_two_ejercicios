
// Tipos de Datos Simples:

/* 
   En programación, todos los datos tienen un tipo que indica al 
   intérprete o compilador cómo tratarlos. 

   Los tipos se dividen en:
   - Simples (primitivos): contienen un solo valor (ej. número, texto, 
     booleano)
   - Compuestos (complejos): construidos a partir de tipos simples, 
     suelen ser colecciones (arrays, objetos)
*/


// Primitivos y Autoboxing:


/* 
   Los tipos primitivos no son objetos, por lo que no tienen métodos 
   ni propiedades.
   Pero cada primitivo tiene un constructor correspondiente: Boolean, 
   Number, String.
   Estos constructores permiten crear objetos con métodos útiles, 
   aunque ocupan más memoria.
*/

/* Ejemplo usando String como objeto */
let strObj = new String("¿Los murciélagos comen gatos?");
console.log(typeof(strObj)); // -> object
console.log(strObj.length);  // -> 27
let words = strObj.split(" ");
console.log(words[0]);       // -> ¿Los

/* Ejemplo usando String como primitivo */
let str = "¿Los murciélagos comen gatos?";
console.log(typeof(str)); // -> string
console.log(str.length);  // -> 27
let wordsPrim = str.split(" ");
console.log(wordsPrim[0]); // -> ¿Los

/*
  Aunque str es un primitivo, podemos usar métodos de String gracias 
  al autoboxing.
  El motor de JavaScript crea temporalmente un objeto String para 
  permitir la operación.
*/


// Boolean

/* 
   Boolean es un constructor de objetos que corresponde al tipo 
   primitivo boolean.
   Puede usarse explícitamente con `new` o implícitamente durante 
   autoboxing.
*/

let boolObj1 = new Boolean();      // false por defecto
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();    // "false"
let bool2 = boolObj2.valueOf();    // true
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : true

/* 
   También podemos usar Boolean sin `new` para convertir valores a 
   booleanos:
*/
let bool1 = Boolean(false);
bool2 = Boolean(1);
let bool3 = Boolean("");
console.log(`bool1 : ${typeof bool1} : ${bool1}`); // -> false
console.log(`bool2 : ${typeof bool2} : ${bool2}`); // -> true
console.log(`bool3 : ${typeof bool3} : ${bool3}`); // -> false

/*
  Valores falsos en JS: 
  false, null, undefined, NaN, "", 0, -0, 0n, -0n
  Todos los demás se consideran true.
*/


// Number:

/* 
   Number corresponde al tipo primitivo número.
   En JS, todos los números son de punto flotante (64-bit) y pueden 
   ser enteros o reales.
*/

let a = 10;     // decimal
let b = 0x10;   // hexadecimal
let c = 0o10;   // octal
let d = 0b10;   // binario
console.log(a, b, c, d); // -> 10 16 8 2

let x = 0.3;
let y = 0.6;
console.log(x + y);           // -> 0.8999999999999999 (aproximación)
console.log((x + y).toFixed(1)); // -> 0.9

console.log(x / 0);           // -> Infinity
console.log(x / "abc");       // -> NaN


// Constructores Number:


let nrStr1 = (11).toString();    // autoboxing, convierte número a string
let nrStr2 = (11).toString(16);  // hexadecimal
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> "11"
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> "b"

// Creando objetos Number explícitamente (no recomendado)
let numberObj1 = new Number();          // 0
let numberObj2 = new Number(100);       // 100
let numberObj3 = new Number("200");     // 200
let numberObj4 = new Number("abcd");    // NaN
let numberObj5 = new Number(9e10000);   // Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> 0

// Conversión implícita a número usando Number sin `new`
let nr = Number("100");
console.log(`nr : ${typeof nr} : ${ nr}`); // -> 100


// Convertir números a diferentes formatos de string:

let aNum = 12345;
console.log(aNum.toExponential());    // -> 1.2345e+4
console.log(aNum.toExponential(1));   // -> 1.2e+4

let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(3)); // -> 10.550

let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log(((nr2 * 10).toFixed(0) / 10)); // -> 2.6

// Uso de toLocaleString para formatos regionales
let nrLocal = 123456.789;
console.log(nrLocal.toLocaleString("en-GB")); // -> 123,456.789
console.log(nrLocal.toLocaleString("fr-FR")); // -> 123 456,789
console.log(nrLocal.toLocaleString("de-DE")); // -> 123.456,789
console.log(nrLocal.toLocaleString("ar-EG")); // -> ١٢٣٬٤٥٦٫٧٨٩
console.log(nrLocal.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR"
})); // -> 123.456,79 €
console.log(nrLocal.toLocaleString()); // -> formato según configuración local


// Propiedades y métodos estáticos del constructor Number:

/*
    El constructor Number no solo tiene métodos en su prototipo, 
    sino que también nos proporciona varias propiedades y métodos 
    estáticos.
    Entre las propiedades más importantes encontramos MAX_VALUE, 
    MIN_VALUE, MAX_SAFE_INTEGER y MIN_SAFE_INTEGER.
*/

console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

/*
    MAX_VALUE es el valor máximo que se puede almacenar usando el tipo 
    number.
    MIN_VALUE es el valor fraccional positivo más pequeño que se puede 
    almacenar.
    El rango seguro de enteros está limitado por MIN_SAFE_INTEGER y 
    MAX_SAFE_INTEGER.
*/

/*
    Los métodos estáticos permiten comprobar si un valor es un entero, 
    si está dentro del rango seguro, si es finito, entre otras cosas.
*/

let numbers = [2e100, 200000, 1.5, Infinity];
for(let index = 0; index < numbers.length; index++) {
    console.log(`is ${numbers[index]} Integer: ${Number.isInteger(numbers[index])}`);
    console.log(`is ${numbers[index]} safe Integer: ${Number.isSafeInteger(numbers[index])}`);
    console.log(`is ${numbers[index]} finite number: ${Number.isFinite(numbers[index])}`);
}

/*
    En el ejemplo, se crea un array de números con valores 2e100, 
    200000, 1.5 e Infinity.

    Se recorre el array usando un bucle for y se aplican los métodos
     estáticos:

    - Number.isInteger
    - Number.isSafeInteger
    - Number.isFinite

    Los resultados se muestran en la consola.
*/

/*
    Dos métodos estáticos adicionales son parseInt y parseFloat, útiles
    para convertir valores numéricos escritos como cadenas.
    Se diferencian de Number() porque permiten cierta tolerancia a 
    errores en la cadena: si el inicio de la cadena puede interpretarse
    como número, lo convierten, ignorando el resto.
*/

console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN

/*
    Number no fue creado para cálculos matemáticos complejos. 
    Aunque podemos usar operaciones aritméticas y el objeto Math, 
    para cálculos científicos avanzados es mejor usar otros lenguajes 
    como Python.
    En JS, el constructor Number se usa principalmente para convertir 
    datos.
*/

// String:

/*
    El constructor String corresponde al tipo primitivo string y 
    permite manipular cadenas de manera cómoda.
    Ofrece un conjunto de métodos en su prototipo para trabajar 
    con caracteres.
*/

// Lo que ya sabemos sobre strings:

let delay = 10;
let name = "Bob";
let order = 'pizza';
let info = `Hi ${name}, you have to wait about ${delay} minutes for your ${order}`;
console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza
console.log(typeof name); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string

/*
    Ejemplo de uso de comillas dobles, simples y backticks. 
    Los backticks permiten template literals, que insertan valores 
    dinámicamente dentro de la cadena.
*/

let anotherInfo = "Hi " + name + ", you have to wait about " + delay + " minutes for your " + order;

/*
    Para incluir caracteres especiales en la cadena (como ", ' o `), 
    usamos la barra invertida \  o se cambia la comilla externa para 
    evitar conflictos.
*/

let warn1 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn2 = 'Confirm ticket reservation for "Alien 10" movie.';
let warn3 = `warning: "Confirm ticket reservation for 'Alien 10' movie."`;

// El constructor String:

let name2 = "Bob";
console.log(name2.length); // -> 3
console.log("Alice".length ); // -> 5
console.log("".length ); // -> 0

/*
    La propiedad length indica la cantidad de caracteres de una cadena.
    Se recomienda verificar que la variable sea un string antes de 
    consultar length.
*/

let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}

// String como array de caracteres:

let title = "Alien 10";
console.log(title[0]); // -> A
console.log(title.charAt(0)); // -> A

/*
    Se puede acceder a caracteres individuales usando corchetes o el 
    método charAt.
*/

// Conversión de mayúsculas/minúsculas:

let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127

/*
    toUpperCase y toLowerCase devuelven una nueva cadena sin modificar 
    la original.
*/

// Dividiendo la cadena con split:

/*
    split permite dividir la cadena en partes usando un separador y 
    devuelve un array.
    No modifica la cadena original.
*/

let ipParts2 = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts2[0]); // -> 127


// Reemplazo de subcadenas:

/*
    El método replaceAll permite reemplazar todas las ocurrencias de 
    una subcadena por otra. La cadena original no se modifica; el 
    resultado se trata como una nueva cadena.
    Se puede combinar con otros métodos, usando encadenamiento de 
    métodos (method chaining).
*/

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // -> 30

/*
    Equivalente usando variables intermedias:
*/
a = text.toLowerCase();
b = a.replaceAll('.', '');
c = b.replaceAll(',', '');
let word = c.split(' ');

/*
    replaceAll reemplaza todas las coincidencias; replace solo reemplaza
    la primera.
*/

// Búsqueda de subcadenas:

/*
    includes: devuelve true si la subcadena está presente.
    indexOf: devuelve la posición de la primera ocurrencia.
    lastIndexOf: devuelve la posición de la última ocurrencia.
*/

let text2 = "One, two, three, one, two, three.";
console.log(text2.includes("two")); // -> true
console.log(text2.includes("four")); // -> false
console.log(text2.indexOf("two")); // -> 5
console.log(text2.indexOf("four")); // -> -1
console.log(text2.lastIndexOf("two")); // -> 22

// Copiar subcadenas:

/*
    substr(inicio, longitud)
    substring(inicio, fin)
    slice(inicio, fin)
*/

let text3 = "One, two, three, one, two, three.";

console.log(text3.substr(0,8)); // -> One, two
console.log(text3.substr(10)); // -> three, one, two, three.
console.log(text3.substr(-6)); // -> three.
console.log(text3.substr(-6, 2)); // -> th

console.log(text3.substring(5, 8)); // -> two
console.log(text3.substring(5)); // -> two, three, one, two, three.
console.log(text3.substring(-11, 8)); // -> One, two

console.log(text3.slice(0,3)); // -> One
console.log(text3.slice(5)); // -> two, three, one, two, three.
console.log(text3.slice(-11)); // -> two, three.
console.log(text3.slice(-11, -8)); // -> two

// Relleno (Padding):

numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padStart(10, 'abc'));
    console.log(String(numbers[i]).padStart(10));
}

// Eliminación de espacios (Trimming):

let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.trimLeft().length); // -> 8
console.log(city.trimRight().length); // -> 7
console.log(city.trim().length); // -> 6
console.log(street.trim().length); // -> 10

// Comparación de cadenas:

console.log("a" < "b"); // -> true
console.log("abc" < "acd"); // -> true
console.log("b" < "acd"); // -> false
console.log("4" < "5"); // -> true
console.log("2" < "12"); // -> false
console.log("34" < "332"); // -> true
console.log("brettesnes" < "Sundsfjord"); // -> false
console.log("Brettesnes" < "Sundsfjord"); // -> true

// Uso de localeCompare para alfabetos locales
console.log("Ørnes".localeCompare("Sundsfjord", "nn")); // -> -1
console.log("Ørnes".localeCompare("Brettesnes", "nn")); // -> 1

// Constructor Date:

/*
    Date almacena fechas y horas usando un timestamp (milisegundos 
    desde 01/01/1970 UTC).
*/

let date1 = new Date(0);
let date2 = new Date(1000*60*60*10);
console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

console.log(date2.getTimezoneOffset());
console.log(date2.toLocaleString());
console.log(date2.toISOString());
console.log(date2.toUTCString());

// Hora actual:

let nowObj = new Date();
console.log(nowObj.toLocaleString());

let now = Date.now();
let nowObj2 = new Date(now);
console.log(`now : ${typeof now} : ${now}`);
console.log(`nowObj : ${typeof nowObj2} : ${nowObj2}`);

// Especificación de fecha con componentes:

let date3 = new Date(2020, 6); // año 2020, mes julio (0-index)
let date4 = new Date(2020, 6, 8);
let date5 = new Date(2020, 6, 8, 10);
let date6 = new Date(2020, 6, 8, 10, 20, 45);
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());
console.log(date6.toLocaleString());

// Fecha con string: 

let date7 = new Date("2020-07-08T10:20:00.000");
let date8 = new Date("2020-07-08T10:20:00.000Z");

// Uso práctico de timestamp:

let date9 = new Date(2020, 6, 8, 10, 20, 0);
let date10 = new Date(2020, 6, 9, 10, 20, 0);
console.log(date10.getTime() - date9.getTime()); // -> 86400000

// Cronómetro simple:

let startTime = Date.now();
for(let i=0; i<10000000; i++){}
let endTime = Date.now();
console.log(endTime - startTime);

// Operaciones sobre componentes individuales:

let date11 = new Date("2020-07-08T10:20:00");
console.log(date11.getMonth()); // -> 6
console.log(date11.getDay()); // -> 3
console.log(date11.getDate()); // -> 8
console.log(date11.getHours()); // -> 10
date11.setHours(12);
console.log(date11.getHours()); // -> 12

console.log(date11.toLocaleDateString()); // -> 08/07/2020
console.log(date11.toLocaleTimeString()); // -> 12:20:00

