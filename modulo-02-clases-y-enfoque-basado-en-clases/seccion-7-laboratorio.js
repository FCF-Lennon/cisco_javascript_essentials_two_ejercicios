// Laboratorio:

// Ejercicio 01:

/*
    Intenta preparar un sistema simple para almacenar información sobre
    estudiantes y profesores y combinarlos para tutorías.

    Crea una clase User para generar objetos tanto de profesores como de
    estudiantes.
    El constructor debe recibir los datos del usuario(name, surname, 
    email, role), pero asegúrate de crear las propiedades adecuadas.
*/

// Además, crea los siguientes métodos:

/*
    - addCourse(course, level) - permitirá agregar un curso (por ejemplo, 
      matemáticas) y un nivel (por ejemplo, 2 - mientras más alto el 
      número, mayor el nivel).
      En el caso de un estudiante, esto significará que busca ayuda en ese
      nivel; en el caso de un profesor, singificará que puede ayudar hasta
      ese nivel.
    - removeCourse(course) - permitirá eliminar un curso (por ejemplo, 
      si el estudiante ya no está interesado en aprender matemáticas).
    - editCourse(course, level) - permitirá cambiar el nivel asociado al
      curso.
    - sendMessage(from, message) - permitirá enviar un mensaje 'message' 
      desde el usuario 'from' al usuario descrito en el objeto.
      La información completa del mensaje enviado debe almacenarse en una
      memoria local (cache) (sugerencia: usa un arreglo para esto).
      El envío del mensaje será solo simulado: declara previamente la 
      función sendEmail(from, to, message) {} y úsala en el lugar 
      apropiado.
    - showMessagesHistory() - mostrará en la consola el historial de 
      todos los mensajes enviados al usuario.
*/

// Prueba tu solución usando el siguiente código:

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    }
}

User.prototype.addCourse = function(course, level) {
    this.courses.push({name:course, level});
}

User.prototype.removeCourse = function(course) {
    this.courses = this.courses.filter(c => c.name !== course);
}

User.prototype.editCourse = function(course, level) {
    for (let c of this.courses){
        if (c.name === course){
            c.level = level;
            break;
        }
    }
}

User.prototype.sendMessage = function(from, message) {

    this.messages.push({from: from.email, to: this.email, message});
    sendEmail(from.email, this.email, message);

}

User.prototype.showMessagesHistory = function() {
    if (!this.messages || this.messages.length === 0) {
        console.log("No messages");
        return;
    }   
    this.messages.forEach(msg => {
        console.log(`${msg.from} -> ${msg.to}: ${msg.message}`);
    });
}

sendEmail = function(from, to, message) {
    // Simulate sending email
    console.log(`Email sent from ${from} to ${to}: ${message}`);
}   

let student1 = new User(
    {
        name: 'Rafael', 
        surname: 'Fife', 
        email: 'rfife@rhyta.com', 
        role: 'student'
    }
);
let student2 = new User(
    {
        name: 'Kelly', 
        surname: 'Estes', 
        email: 'k_estes@dayrep.com', 
        role: 'student'
    }
);
let teacher1 = new User(
    {
        name: 'Paula', 
        surname: 'Thompkins', 
        email: 'PaulaThompkins@jourrapide.com', 
        role: 'teacher'
    }
);

// Prueba tu solución usando el siguiente código:

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
console.log('\n------Ejercicio 01------')
console.log(student1);
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(teacher1);
console.log(`${student1.name}: ${student1.courses.length} courses`); // -> Rafael: 1 courses
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`); // -> Paula: 1 courses
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory(); 
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: test message
// -> rfife@rhyta.com -> PaulaThompkins@jourrapide.com: another message



// Ejercicio 02:

/*
    Crea una nueva clase llamada ExtendedUser, que herede de la clase
    User.

    Agregar en ella un getter y un setter llamados fullName.

    - El getter debe devolver el nombre y el apellido concatenados en
      una sola cadena.
    - El setter debe recibir el nombre y apellido concatenados (por 
      ejemplo, 'Rafael Fifer') y dividirlos utilizando el método split(), 
      asignando las partes correspondientes a las propiedades de nombre 
      y apellido del objeto.
    
    Basándote en la clase ExtendedUser, crea dos clases adicionales:
    Teacher y Student (ambas mediante herencia).
    Estas clases no deben tener nuevos métodos ni propiedades, solo 
    deben establecer roles por defecto en sus constructores.
    
    - 'teacher' para los profesores.
    - 'student' para los estudiantes.
    
    Por tanto, sus constructores deberán recibir tres parámetros en lugar
    de cuatro: name, surname y email.
*/


class ExtendedUser extends User {
    get fullName(){
        return `${this.name} ${this.surname}`;
    }

    set fullName(fullName) {
        [this.name, this.surname] = fullName.split(' ');    
    }
}

class Teacher extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'teacher'})
    }
}

class Student extends ExtendedUser {
    constructor({name, surname, email}) {
        super({name, surname, email, role: 'student'})
    }
}

// Prueba tu solución usando el siguiente código:

student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});

student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.editCourse('chemistry', 4); 
console.log('\n------Ejercicio 02------')
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses