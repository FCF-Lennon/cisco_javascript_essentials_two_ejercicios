// Notación con punto vs. notación con corchetes

/* 
    Hasta ahora hemos usado la notación con punto como forma básica 
    para referirnos a propiedades y métodos de un objeto.

    De manera alternativa, podemos usar la notación con corchetes. 
    Esta se parece a acceder a un índice de un arreglo, 
    pero en lugar de un número usamos una clave (string).
*/

contact.tel === contact["tel"];
contact.email.work === contact["email"]["work"];

// Nota: Ambas expresiones son equivalentes


// Claves con varias palabras:

/* 
    La notación con corchetes es menos intuitiva que la de punto, 
    pero a veces es la única opción.

    Un ejemplo clásico: claves con varias palabras. 
    En este caso no podemos usar el punto, 
    sino obligatoriamente los corchetes.
*/

let contact = {
    "first name": "Ronald"
};

contact["first name"] = "Tim";      // Correcto
// contact.first name = "Tim";      // Error de sintaxis
// contact."first name" = "Tim";    // Error de sintaxis

// Explicación: las claves con espacios deben ir siempre entre comillas
// y accederse con corchetes.


// Claves calculadas:

/* 
    La notación con corchetes también se usa para claves que se calculan 
    dinámicamente. 
    Es decir, cuando el nombre de la propiedad se construye durante la 
    ejecución del programa. 
    Con notación de punto esto no es posible.
*/

let contact2 = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};

for (let i = 1; i <= 2; i++) {
    let key = "email_" + i;       // Se construye la clave dinámicamente
    console.log(key);             // Muestra la clave
    console.log(contact2[key]);   // Accede al valor usando corchetes
}

// Explicación: JavaScript convierte automáticamente el número en 
// string cuando se concatena.


// Mejorando la salida en consola:

/* 
    Podemos formatear mejor lo que mostramos en consola usando plantillas 
    literales.
    Esto hace que la salida sea más clara y elegante.
*/

for (let i = 1; i <= 2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contact2[key]}`);
}

// Ejemplo de salida esperada:
// email_1: RonaldSMurphy@freepost.org
// email_2: rsmurphy@briazz.com

/* 
    Nota: Volveremos a esta técnica de formato de strings en capítulos 
    siguientes.
*/
