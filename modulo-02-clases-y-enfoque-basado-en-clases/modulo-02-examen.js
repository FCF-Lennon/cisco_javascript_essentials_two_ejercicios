// Questionario:

// Pregunta 01 - Una clase puede tener un constructor, es decir,
//  un método:  

/*
    Opciones:

    - de cualquier nombre que se defina primero en la clase.
    - llamado this. 
    - llamado constructor. / Respuesta
    - de cualquier nombre precedido por la palabra constructor.  
*/


// Pregunta 02 - Has definido una clase Point cuyo constructor recibe 
// dos argumentos: x e y. ¿Cuál de las siguientes es la forma correcta 
// de crear un objeto point de esta clase?  

/*
    Opciones:

    - let point = Point(100, 200);  
    - let point = create Point(100, 200);  
    - let point = new Point(100, 200); / Respuesta
    - Point(let point, 100, 200);   
*/


// Pregunta 03 - Falta una línea en el siguiente código:

/* 
    class User {
        // Inserta la línea de código aquí.
        showName() {
            console.log(this.name);
        }
    }
    let user = new User('Alice');
    user.showName(); 
*/

// Selecciona la línea faltante correcta para que el código ejecutado 
// muestre en la consola: Alice
  
/*
    Opciones:

    - constructor(n) {this.name = n;} / Respuesta
    - User(n) {this.name = n;}   
    - constructor function(n) {name = n;}  
    - constructor(n) {name = n;}    
*/


// Pregunta 04 - Analiza el siguiente código: 

/* let Point = class{}; 

console.log(Point) */

// Es:
  
/*
    Opciones:

    - Incorrecto, porque una definición de clase (el contenido de las 
      llaves) no puede estar vacía.   
    - Correcto, porque es la declaración de una clase anónima y la 
      guarda en la variable Point (una clase como ciudadano de primera 
      clase). / Respuesta  
    - Incorrecto, porque debería ser: class Point {};    
    - Correcto, porque es la creación de un objeto basado en una clase
      vacía y lo guarda en la variable Point. 
*/


// Pregunta 05 - Falta una línea en el siguiente código:  

class A {
    // Inserta la línea de código aquí. 
}

// Selecciona la línea faltante correcta para declarar una propiedad 
// llamada test e inicializarla con el valor 10: 
  
/*
    Opciones:

    - test: 10    
    - this.test = 10;   
    - test: 10;     
    - test = 10; / Respuesta    
*/


// Pregunta 06 - Analiza el siguiente código: 

/* 
    class Point {
        constructor (x, y) {
            this.x = x;
            this.y = y;
        }

        setColor(color) {
            this.color = color;
        }
    }
    let point = new Point(100, 200);
    point.setColor('red'); 
*/

// El objeto point:

 /* 
    Opciones: 
    
    - No será creado: el constructor y el método setColor hacen 
      referencia a propiedades que no han sido definidas en el cuerpo 
      de la clase. 
    - Tiene tres propiedades: x, y y color. / Respuesta
    - Tiene dos propiedades: x e y (solo estas están definidas en el 
      constructor). 
    - No será creado: setColor hace referencia a una propiedad color 
      que no fue definida en el constructor. 
*/
 

// Pregunta 07 - Analiza el siguiente código:
  
/* 
    class Point {
    name = 'Point'; 
    constructor (x, y) { 
            this.x = x;
            this.y = y;
        }

        setColor(color) {
            this.color = color;
        }
    }
    let point = new Point(100, 200);
    point.setColor('red'); 
*/

// ¿Cuáles de las siguientes propiedades tendrá el objeto point? 

 /* 
    Opciones: 
    
    - name x y  
    - name  
    - x y  
    - name x y color / Respuesta
*/


// Pregunta 08 - Falta una línea en el siguiente código: 
  
/* 
    class User { 
    // Inserta la línea de código aquí.
    get name() {return this.#name;}
    }
    let point = new User();
    point.x = 10; 
*/

// Selecciona la línea faltante correcta para insertar una declaración 
// de propiedad privada en el código: 

 /* 
    Opciones: 
    
    - #name = 'Bob'; / Respuesta
    - private name = 'Bob';  
    - name = 'Bob'; 
    - this.name = 'Bob';  
*/


// Pregunta 09 - Analiza el siguiente código:  
  
class Point {  
    #x = 0;
    #y = 0;
    color = 'red';
}
let point = new Point();
console.log(Object.keys(point));

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

 /* 
    Opciones: 
    
    - []  
    - ['#x', '#y', 'color']  
    - ['x', 'y', 'color']  
    - ['color'] / Respuesta 
*/

// Nota: Object.keys() solo devuelve propiedades públicas enumerables.
// Las propiedades privadas #x y #y no aparecen.


// Pregunta 10 - Analiza el siguiente código:   
  
/* 
    class User {};
    user = new User(); 
    console.log(`${user instanceof User} ${typeof(user)}`); 
*/

// ¿Qué aparecerá en la consola como resultado de la ejecución del código? 

 /* 
    Opciones: 
    
    - User object 
    - true object  / Respuesta
    - User User   
    - true User 
*/


// Pregunta 11 - Analiza el siguiente código:    
  
/* 
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName()  {return `${this.firstName} ${this.lastName}`}
    }
    let user = new User('Bob',  'Marley');
*/

// Selecciona el comando correcto para que la consola muestre la siguiente cadena
// después de ejecutar todo el código: Bob Marley
  
 /* 
    Opciones: 
    
    - console.log(user.getfullName); 
    - console.log(user.fullName); / Respuesta   
    - console.log(user.fullName());    
    - console.log(user['get fullName']);  
*/


// Pregunta 12 - Falta una línea en el siguiente código:     
  
class User {
    _name = 'Alice';
    // Inserta aquí la línea de código.
    set name(val) {this._name = val;} 
}
let user = new User();
user.name = 'Bob';
console.log(user._name);

// Selecciona la línea faltante correcta para que la consola muestre lo siguiente
// después de ejecutar todo el código: Bob 
  
 /* 
    Opciones: 
    
    - set name(val) {this._name = val;} / Respuesta
    - set (name) {this._name = name;}     
    - set._name(name) {this._name = name;}     
    - _name set(name) {this._name = name;} 
*/

