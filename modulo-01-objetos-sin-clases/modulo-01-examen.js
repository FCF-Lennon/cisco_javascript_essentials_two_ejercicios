
// Cuestionario:

// Pregunta 01 - Has declarado la siguiente instrucción: 
// console.log(user.name)

// ¿Qué declaración debería preceder a la instrucción para que el texto 
// Bob aparezca en la consola como resultado de la ejecución del código?

/*
    Opciones:

    - let user = [name: 'Bob'];
    - let user = [name: 'Bob', age: 30];
    - let user = {name: 'Bob', age: 30}; / Respuesta
    - var user = {'Bob'}; 
*/


// Pregunta 02 - Un objeto que ya no será utilizado:

/* 
    Opciones: 

    - Se eliminará automáticamente. / Respuesta
    - Debe eliminarse usando el comando delete.  
    - Debe eliminarse asignando undefined a la variable que lo contiene. 
    - Debe eliminarse asignando null a la variable que lo contiene.  
*/


// Pregunta 03 - Falta una línea en el siguiente código:

/*
    let car = {
        make: 'Dodge',
        model: 'Dakota'
    }

    // Inserta aquí la línea de código.
    console.log(`${car.make} ${car.model}, color: ${car.color}`);
*/

// Selecciona la línea faltante correcta para que la consola muestre lo siguiente al ejecutar todo el código: 
// Salida esperada: Dodge Viper, color: red

/* 
    Opciones: 

    - car.model = 'Viper'; car.color = 'red'; / Respuesta
    - car.set('model', 'Viper'; car.add('color', 'red'); 
    - Una línea vacía - no es posible añadir una nueva propiedad color a un objeto previamente creado; 
    - car = {model: 'Viper', color: 'red'; 
*/


// Pregunta 04 - Has declarado un objeto circle: 

let circle = {
    centre: {
        x: 10,
        y: 20
    },
    radius: 100
}


// ¿Cuál de las siguientes opciones mostrará en la consola el valor de 
// la coordenada x del círculo (es decir, 10)?

/* 
    Opciones: 

    - console.log(centre.x); 
    - console.log(circle.centre); 
    - console.log(circle.x); 
    - console.log(circle.centre.x); / Respuesta
*/


// Pregunta 05 - Falta una línea en el siguiente código: 

/* 
    let key = 'x'
    let point = {
        x: '100',
        y: '200'
    }
    // Inserta aquí la línea de código.
*/  

// Selecciona la línea faltante correcta para que el código ejecutado
// muestre en la consola la siguiente salida: 100

/* 
    Opciones: 

    - console.log(point:key); 
    - console.log(point.key); 
    - console.log(point[key]); / Respuesta 
    - console.log(point[x]); 
*/


// Pregunta 06 - Has declarado un objeto point que tiene una propiedad:
// geo position string 

/*
    let point = {
        'geo position string': '67.88183984530318, 12.97985704867863'
    }
*/

// ¿Cuál de las siguientes es la forma correcta de referirse a esta 
// propiedad? 

/* 
    Opciones: 

    - No puedes usar un nombre de propiedad que consista en varias palabras. 
    - point['geo position string'] / Respuesta
    - point.'geo position string'  
    - point[geo position string]  
*/


// Pregunta 07 - Has declarado un objeto user: 

/* 
    let user = { 
        name: 'Ian', 
        age: 44 
    }
*/   

// ¿Qué línea de código mostrará los valores de todas las propiedades del objeto? 
// La consola debería mostrar Ian y 44

/* 
    Opciones: 

    - Object.keys(user).forEach(key => console.log(key);
    - console.log(user[name, age]);
    - for(key in user) console.log(key);
    - Object.keys(user).forEach(key => console.log(user[key])); / Respuesta
*/


// Pregunta 08 - Has declarado dos objetos user:  

/* 
    let user1 = {  
        name: 'Alice'   
    }
    let user2 = {  
        name: 'Alice'   
    } 
  */  

// ¿Cuál de las siguientes comparaciones devolverá true?  

/* 
    Opciones: 

    - user1 === user2 
    - user1 same user2 
    - (user1.name == user2.name) && (user1.name == user2.name) / Respuesta
    - user1 == user2 
*/


// Pregunta 09 - Analiza el siguiente código:  


let user1 = {
    name: 'Ian',
    age: 44
}

let user2 = user1;
user2.age = 40;
console.log(`${user2.name} ${user1.age}`);


// ¿Qué aparecerá en la consola como resultado de la ejecución del código?  

/* 
    Opciones: 

    - Ian 40 / Respuesta
    - Undefined 40 
    - Undefined 44 
    - Ian 44 
*/


// Pregunta 10 - Analiza el siguiente código:  


    let car1 = {
        make: 'Dodge',
        model: 'Viper'
    }
    let car2 = Object.assign({}, car1, {model:'RAM', transmission: 'automatic'}, {color: 'red'});
    car1.color = 'green';
    console.log(`${car2.make} ${car2.model} ${car2.transmission} ${car2.color}`);
   

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?  

/* 
    Opciones: 

    - Dodge RAM automatic red / Respuesta
    - Dodge RAM automatic green 
    - Dodge RAM automatic 
    - Dodge Viper undefined green 
*/


// Pregunta 11 - Analiza el siguiente código: 

/* 
    let car1 = {
        make: 'Dodge',
        model: 'Viper' 
    }

    let car2 = {...car1, model:'RAM', color: 'red'};
    car1.color = 'green';
    console.log(`${car2.make} ${car2.model} ${car2.color}`);
 */

// ¿Qué aparecerá en la consola como resultado de la ejecución del código?

/* 
    Opciones: 

    - undefined RAM red 
    - Dodge RAM red / Respuesta
    - Dodge RAM green
    - Dodge Viper green
*/


// Pregunta 12 - Falta una línea en el siguiente código:

/*
let car = {
    x: 100,
    y: 100
    // Inserta aquí la línea de código.
}
point.show();
*/

// Selecciona la línea faltante correcta para que la consola muestre lo 
// siguiente al ejecutar todo el código: 100 100

/* 
    Opciones: 

    - show: function() {console.log(`${this.x} ${this.y}`);} / Respuesta
    - show: function() {console.log(`${x} ${y}`);}
    - point.show: {console.log(`${this.x} ${this.y}`);}
    - show: function(this) {console.log(`${this.x} ${this.y}`);}
*/


// Pregunta 13 - Has declarado el siguiente objeto point:

/* 
    let point = {
        x: 100,
        y: 100,
        show: function() {console.log(`${this.x}:${this.y}`)}
    }
 */

// La forma predeterminada de llamar al método show es: point.show(). 
// Selecciona la alternativa correcta para llamar a este método:

/* 
    Opciones: 

    - point.show
    - point[show]
    - point[show]()
    - point['show'](); / Respuesta
*/


// Pregunta 14 - Falta una línea en el siguiente código: 

/* 
    let point = {
        x: 100,
        y: 100,
        // Inserta aquí la línea de código.
    }
    point.positionX = 0;
    console.log(point.x)
 */

// Selecciona la línea faltante correcta para que la consola muestre 
// lo siguiente al ejecutar todo el código: 0

/* 
    Opciones: 

    - positionX : set() {this.x = x;}
    - positionX: this.x = x
    - set positionX(x) {this.x = x;} / Respuesta
    - positionX() {this.x = x;}
*/



// Pregunta 15 - Falta una línea en el siguiente código: 

/* 
    let car = {
        make: 'Dodge',
        model: 'Dakota'
    }

    // Inserta aquí la línea de código.
    Object.preventExtensions(car)
    delete car.model;
    car.make = 'Toyota';
    car.color = 'red';
 */
    
// Selecciona la línea faltante correcta para que la consola muestre lo 
// siguiente después de ejecutar todo el código: Toyota undefined undefined 

/* 
    Opciones: 

    - Object.preventExtensions(car); / Respuesta
    - Una línea vacía  
    - Object.seal(car);  
    - Object.freeze(car);  
*/


// Pregunta 16 - Falta una línea en el siguiente código: 

/*
    let Car = function(make, model) { 
        this.make = make;
        this.model = model; 
    }

    // Inserta aquí la línea de código.
    console.log(`${car.make} ${car.model}`); 
*/

// Selecciona la línea faltante correcta para que la consola muestre lo 
// siguiente al ejecutar todo el código: Dodge Viper

/* 
    Opciones: 

    - let car = new Car('Dodge', 'Viper');  / Respuesta
    - let car = Car((), 'Dodge', 'Viper');  
    - let car = Car('Dodge', 'Viper');  
    - let car = Car({'Dodge', 'Viper'});  
*/


// Pregunta 17 - Falta una línea en el siguiente código:

/*
    let getCar = function(make, model) { 
        // Inserta aquí la línea de código. 
    }

    let car = getCar('Dodge', 'Viper'); 
    console.log(`${car.make} ${car.model}`); 
*/

// Selecciona la línea faltante correcta para que la consola muestre lo
// siguiente al ejecutar todo el código: Dodge Viper 

/* 
    Opciones: 

    - return {this.make, this.model};  
    - return (make, model);  
    - this.make = make; this.model = model; 
    - return {make, model};  / Respuesta
*/


// Pregunta 18 - Falta una línea en el siguiente código: 

/*
    // Inserta aquí la línea de código.
    let car = getCar('Dodge', 'Viper');
    console.log(`${car.make} ${car.model}`);
*/

// Selecciona la línea faltante correcta para que la consola muestre lo 
// siguiente al ejecutar todo el código: Dodge Viper

/* 
    Opciones: 

    - let getCar = (make, model) => ({make, model}); / Respuesta
    - let getCar = (make, model) => (make, model); 
    - let getCar = (make, model) => {this.make = make; this.model = model;}; 
    - let getCar = (make, model) => {make, model}; 
*/


// Pregunta 19 - Falta una línea en el siguiente código: 

/*
    let Point = function(x, y) { 
        this.x = x;
        this.y = y; 
    }
    let point = new Point(0, 0);
    let ColorPoint = function(color) {
        this.color = color;
    }
    // Inserta aquí la línea de código.
    let cpoint = new ColorPoint('Red');
    console.log(cpoint.x);
*/

// Selecciona la línea faltante correcta para que la consola muestre lo 
// siguiente al ejecutar todo el código: 0

/* 
    Opciones: 

    - ColorPoint.prototype = point; / Respuesta
    - ColorPoint.prototype = Point; 
    - cpoint.prototype = point; 
    - cpoint = point.prototype; 
*/
