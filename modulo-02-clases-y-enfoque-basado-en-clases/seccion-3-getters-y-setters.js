// Getters y setters

/* 
    En el capítulo sobre objetos aprendimos los getters y setters. 
    Resumen rápido: son métodos especiales declarados con las palabras 
    clave `get` y `set`.
    Se acceden como si fueran propiedades (p. ej. `obj.prop = valor` 
    activa el setter).
    En las clases funcionan igual: `set` recibe exactamente 1 argumento y 
    `get` ninguno.
*/

// Ejemplo: clase Vehicle usando getter y setter para `position`.
class Vehicle { 
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.position = {latitude, longitude}; 
        this.status = "unavailable"; 
    };
    set position({latitude, longitude}) { 
        this.time = Date.now(); 
        this.longitude = longitude; 
        this.latitude = latitude; 
    };
    get position() { 
        return { 
            latitude: this.latitude, 
            longitude: this.longitude 
        }; 
    };
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.position = {longitude: 18.193121, latitude: 59.378654};
console.log(vehicle.position);

/* 
    Explicación breve del ejemplo:

    - Definimos `set position(...)` y `get position()` dentro de la clase.
    - Al asignar `this.position = {...}` en el constructor se ejecuta el setter 
      (por eso se actualiza `this.time`).
    - Acceso en código: `vehicle.position = {...}` (setter) y `vehicle.position` (getter).
*/

// Análisis (pistas sobre las 4 diferencias principales con la versión que 
// usaba métodos regulares):

/* 
    1) Sintaxis / Declaración:
    - Antes: métodos normales (ej. setPosition(pos) / getPosition()).
    - Ahora: `set position(...)` y `get position()` (palabras clave `set` y `get`).

    2) Forma de invocación:
    - Antes: se llamaba como método: `vehicle.setPosition({...})` y `vehicle.getPosition()`.
    - Ahora: se usan como propiedades: `vehicle.position = {...}` (asignación) y 
      vehicle.position` (lectura).

    3) Efectos secundarios al asignar en el constructor:
    - En el constructor `this.position = { ... }` activa el setter inmediatamente, por lo 
      que se ejecuta código extra (ej. `this.time = Date.now()`).
    - En la versión con métodos, asignar directamente un campo o llamar a setPosition podría 
      comportarse distinto según su implementación.

    4) Cómo se almacenan los datos internamente y contratos de firma:
    - El setter descompone y guarda `this.latitude` / `this.longitude` individualmente; 
      el getter reconstruye un objeto.
    - El setter está limitado a 1 argumento (aquí un objeto con latitude/longitude); 
      el getter no recibe argumentos.
*/

/* 
    Nota final para estudiantes:
    - Observa bien cuándo se ejecutan las rutinas (p. ej. el setter en el constructor).
    - Piensa en efectos colaterales: usar setters en asignaciones invisibles puede introducir 
    lógica inesperada (timestamps, validaciones).
    - Hints para comprobar: haz `console.log(vehicle.time)` antes y después de asignar 
    `vehicle.position` para ver el efecto del setter.
*/

