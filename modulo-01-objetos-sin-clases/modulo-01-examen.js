
// Questionario:

// Pregunta 01 - Has declarado la siguiente instrucción: 
// console.log(user.name)

// ¿Qué declaración debería preceder a la instrucción para que el texto 
// Bob aparezca en la consola como resultado de la ejecución del código?

/*
    Opciones:

    - let user = [name: 'Bob'];
    - let user = [name: 'Bob', age: 30];
    - let user = {name: 'Bob', age: 30};
    - let user = {name: 'Bob'}; / Respuesta
*/


// Pregunta 02 - Un objeto que ya no será utilizado:

/* 
    Opciones: 

    - Se eliminará automáticamente. / Respuesta. 
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
// Salida: Dodge Viper, color: red

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

