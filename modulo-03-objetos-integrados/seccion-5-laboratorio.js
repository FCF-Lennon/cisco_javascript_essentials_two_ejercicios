// Laboratorio:

// Ejercicio 01 - Escribe una función que extraiga (m) números enteros
// del 0 al n. Pasa los parámetros m y n, además de dos indicadores (flags)
// a la función:

/*
    - El primero determina si los números extraídos pueden repetirse.
    - El segundo indica si el arreglo de números devuelto debe estar
      ordenado.

    Utiliza la clase Set.
*/

function getRandomSet(m, n, repetirse, orden) {
    let resultado;

    if (repetirse) {
        // Permitir repeticiones: usamos un array
        resultado = [];
        for (let i = 0; i < m; i++) {
            const numeroAleatorio = Math.floor(Math.random() * (n + 1));
            resultado.push(numeroAleatorio);
        }
    } else {
        // Sin repeticiones: usamos un Set
        const numeros = new Set();
        while (numeros.size < m && numeros.size <= n + 1) {
            const numeroAleatorio = Math.floor(Math.random() * (n + 1));
            numeros.add(numeroAleatorio);
        }
        resultado = Array.from(numeros);
    }

    if (orden) {
        resultado.sort((a, b) => a - b);
    }

    return resultado;
}


// Prueba tu solución usando el siguiente código:

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));



// Ejercicio 02 - Declara una clase llamada User que permita crear
// objetos con información de usuario (nombre, apellido, y correo
// electrónico).

/*
    Los datos deben pasarse al constructor y almacenarse como propiedades
    privadas.

    Crear setters y getters para manejalos. Usa expresiones regulares
    para verificar que los datos pasados al constructor o al setter estén
    en el formato correcto (el nombre y apellido deben consistir solo
    en letras, con la primera letra en mayúscula, y el correo debe tener
    un formato válido).
    
    Para simplificar, asume que una dirección de correo electrónico solo
    puede contener letras, y que las cadenas de letras pueden estar 
    separadas por puntos.

    Por ejemplo, abc.def@ghi.jk o a@abc.def.gh serán válidos, mientras
    que a_b@abc.def o abcd1@efg.hi.jk serán inválidos.

    Si los datos no son complatibles con el formato, no los guardes y 
    lanza una excepción (clase Error) con un mensaje apropiado.
*/

// Prueba tu solución usando el siguiente código:

let nameRegExp = /^[A-Z][a-z]+$/;
let emailRegExp = /^([a-zA-Z]+\.)*[a-zA-Z]+@([a-zA-Z]+\.)+[a-zA-Z]{2,3}$/;

class User {
    #name;
    #surname;
    #email;

    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    get name() {
        return this.#name;
    }
    set name(val) {
        if (typeof val === 'string' && val.match(nameRegExp)) {
            this.#name = val;
        } else {
            throw(new Error(`Incorrect name format: ${val}`));
        }
    }
    get surname() {
        return this.#surname;
    }
    set surname(val) {
        if (typeof val === 'string' && val.match(nameRegExp)) {
            this.#surname = val;
        } else {
            throw(new Error(`Incorrect surname format: ${val}`));
        }
    }
    get email() {
        return this.#email;
    }
    set email(val) {
        if (typeof val === 'string' && val.match(emailRegExp)) {
            this.#email = val;
        } else {
            throw(new Error(`Incorrect email format: ${val}`));
        }
    }

    mostrarInfo() {
        return `Nombre: ${this.#name} Apellido: ${this.#surname} Email: ${this.#email}`;
    }
}


try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1.mostrarInfo());
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    console.log(user2.mostrarInfo());
} catch(err) {
    console.log(err.message);
}


// Ejercicio 03 - Crea una clase llamada Users que permita crear objetos
// que contengan una colección de usuarios individuales (los usuarios se
// crean usando la clase User del desafío anterior).

/* 
    Para crear la colección, utiliza la clase Map (la clave debe ser la
    dirección de correo electrónico, y el valor debe ser el objeto User).
    
    La clase debe proporcionar los siguientes métodos:
    
    - add - agrega un solo usuario; los argumentos son nombre, apellido y
      correo electrónico.
    - delete - elimina un usuario de la colección (el argumento es el correo
      electrónico).
    - get - recupera un solo usuario de la colección (el argumento es el correo
      electrónico).
    - getAll - recupera todos los usuarios de la colección (el argumento es el 
      nombre del campo por el cual se debe ordenar el arreglo: name, surname o 
      email).
*/

class Users {
    constructor() {
        this.usersMap = new Map();
    }

    add(name, surname, email) {
        if (!this.usersMap.has(email)) {
            const user = new User(name, surname, email);
            this.usersMap.set(email, user);
        }
    }

    delete(email) {
        this.usersMap.delete(email);
    }

    get(email) {
        return this.usersMap.get(email);
    }

    getAll(field) {
        const validFields = ['name', 'surname', 'email'];
        if (!validFields.includes(field)) {
            throw new Error(`Invalid field: ${field}`);
        }
        const usersArray = Array.from(this.usersMap.values());
        return usersArray.sort((a, b) => a[field].localeCompare(b[field]));
    }
}


// Prueba tu solución usando el siguiente código:

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com").mostrarInfo());
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));


// Ejercicio 04 -  Define tres clases: Point, Line y Figure.

/* 
    - Point:
        La clase Point debe tener solo tres propiedades:
            - coordenada x
            - coordenada y
            - type (siempre con el valor 'point')
        El constructor recibe las coordenadas x e y.

    - Line:
        La clase Line debe tener:
            - type = 'line'
            - points = un arreglo de objetos Point (los puntos que forman la línea)
        El constructor recibe un arreglo de coordenadas de puntos,
        por ejemplo: [[x1, y1], [x2, y2], ...]
        Ejemplo: [[0, 0], [10, 20], [20, 20]]

    - Figure:
        Esta clase debe permitir crear un objeto que contenga
        una colección de puntos y líneas (almacenados por separado).

        Métodos a implementar:
        
        constructor(elements)
            - Recibe un arreglo con puntos y líneas.

        addPoint(x, y)
            - Agrega un nuevo punto a la colección.

        addLine([[x1, y1], [x2, y2], ...])
            - Crea una nueva línea y la agrega a la colección.

        toJSON()
            - Devuelve la colección guardada (puntos y líneas) en formato JSON.

        fromJSON(jsonData, appendFlag)
            - Recibe datos en JSON, los convierte y los agrega a la colección.
            - appendFlag:
                  true  → Agregar a la colección existente.
                  false → Reemplazar la colección actual.

        deleteAll()
            - Elimina todos los datos de la colección.

    
*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = 'point';
    }
};

class Line {
    constructor(pointsArray) {
        this.type = 'line0';
        this.points = pointsArray.map(coord => new Point(coord[0], coord[1]));
    }
};

class Figure {
    constructor(elements = []) {
        this.elements = {
            points: [],
            lines: []
        };

        elements.forEach(element => {
            if (element.type === 'point') {
                this.elements.points.push(new Point(element.x, element.y));
            } else if (element.type === 'line') {
                const linePoints = element.points.map(p => [p.x, p.y]);
                this.elements.lines.push(new Line(linePoints));
            }
        });
    }
}

Figure.prototype.addPoint = function(x, y) {
    this.elements.points.push(new Point(x, y));
};

Figure.prototype.addLine = function(pointsArray) {
    this.elements.lines.push(new Line(pointsArray));
};

Figure.prototype.toJSON = function() {
    return JSON.stringify(this.elements);
};

Figure.prototype.fromJSON = function(jsonData, appenFlang) {
    const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;

    if (!appenFlang) {
        this.deleteAll();
    }
    
    data.points.forEach(pt => {
        this.addPoint(pt.x, pt.y);
    });

    data.lines.forEach(ln => {
        const linePoints = ln.points.map(p => [p.x, p.y]);
        this.addLine(linePoints);
    });
};

Figure.prototype.deleteAll = function() {
    this.elements.points = [];
    this.elements.lines = [];
}


// Prueba tu solución usando el siguiente código:

let f = new Figure();
f.addPoint(10,20);
f.addPoint(10,10);
f.addLine([[10,20], [30,40], [50,60]]);
let json = f.toJSON();
console.log(json);
f.fromJSON(json, true);
console.log(f.elements.points.length);
console.log(f.elements.lines.length);
f.fromJSON('{"points":[{"type":"point","x":10,"y":20},{"type":"point","x":10,"y":30},{"type":"point","x":10,"y":-30},{"type":"point","x":10,"y":20},{"type":"point","x":20,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":130,"y":20},{"type":"point","x":30,"y":20},{"type":"point","x":0,"y":20},{"type":"point","x":0,"y":-20},{"type":"point","x":0,"y":20}],"lines":[{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":30,"y":0},{"x":10,"y":-10},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]},{"type":"line","points":[{"x":0,"y":0},{"x":10,"y":0},{"x":0,"y":10},{"x":20,"y":0},{"x":0,"y":20}]}]}');
console.log(f.elements.points.length);
console.log(f.elements.lines.length);


// Ejercicio 05 - Modifica la clase Figure del desafío anterior para que puedas ordenar 
// los puntos y las líneas en la colección y eliminar automáticamente los elementos con 
// los mismos valores (por ejemplo, líneas compuestas por los mismos puntos).

Figure.prototype.sortAndUnique = function () {

    // ---- ORDENAR Y LIMPIAR PUNTOS ----
    this.elements.points.sort((a, b) => a.x - b.x || a.y - b.y);

    this.elements.points = this.elements.points.filter((p, i, arr) =>
        i === 0 || p.x !== arr[i - 1].x || p.y !== arr[i - 1].y
    );

    // ---- ORDENAR Y LIMPIAR LÍNEAS ----

    // normaliza puntos dentro de la línea
    this.elements.lines.forEach(line =>
        line.points.sort((a, b) => a.x - b.x || a.y - b.y)
    );

    // genera firma de una línea
    const signature = line =>
        line.points.map(p => `${p.x},${p.y}`).join('|');

    // ordenar líneas por firma
    this.elements.lines.sort((a, b) =>
        signature(a).localeCompare(signature(b))
    );

    // eliminar duplicados
    this.elements.lines = this.elements.lines.filter((line, i, arr) =>
        i === 0 || signature(line) !== signature(arr[i - 1])
    );

    return this;
};
   
// Prueba tu solución usando el siguiente código:

let f2 = new Figure();
f2.addPoint(10,20);
f2.addPoint(10,20);
f2.addPoint(5,15);
f2.addPoint(5,15);
f2.addLine([[10,20], [30,40], [50,60]]);
f2.addLine([[30,40], [10,20], [50,60]]);
console.log('Antes de sortAndUnique:'); 
console.log(f2.elements.points.length); // 4
console.log(f2.elements.lines.length); // 2
f2.sortAndUnique();
console.log('Después de sortAndUnique:'); 
console.log(f2.elements.points.length); // 2
console.log(f2.elements.lines.length); // 1
