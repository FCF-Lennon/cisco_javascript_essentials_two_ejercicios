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

class User {
    // Inserta la línea de código aquí.
    showName() {
        console.log(this.name);
    }
}
let user = new User('Alice');
user.showName();

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

let Point = class{}; 

console.log(Point)
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


