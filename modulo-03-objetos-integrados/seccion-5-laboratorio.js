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

